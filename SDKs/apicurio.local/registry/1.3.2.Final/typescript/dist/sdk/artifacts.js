var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";
var Artifacts = /** @class */ (function () {
    function Artifacts(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * createArtifact - Create artifact
     *
     * Creates a new artifact by posting the artifact content.  The body of the request should
     * be the raw content of the artifact.  This is typically in JSON format for *most* of the
     * supported types, but may be in another format for a few (for example, `PROTOBUF`).
     *
     * The registry attempts to figure out what kind of artifact is being added from the
     * following supported list:
     *
     * * Avro (`AVRO`)
     * * Protobuf (`PROTOBUF`)
     * * Protobuf File Descriptor (`PROTOBUF_FD`)
     * * JSON Schema (`JSON`)
     * * Kafka Connect (`KCONNECT`)
     * * OpenAPI (`OPENAPI`)
     * * AsyncAPI (`ASYNCAPI`)
     * * GraphQL (`GRAPHQL`)
     * * Web Services Description Language (`WSDL`)
     * * XML Schema (`XSD`)
     *
     * Alternatively, you can specify the artifact type using the `X-Registry-ArtifactType`
     * HTTP request header, or include a hint in the request's `Content-Type`.  For example:
     *
     * ```
     * Content-Type: application/json; artifactType=AVRO
     * ```
     *
     * An artifact is created using the content provided in the body of the request.  This
     * content is created under a unique artifact ID that can be provided in the request
     * using the `X-Registry-ArtifactId` request header.  If not provided in the request,
     * the server generates a unique ID for the artifact.  It is typically recommended
     * that callers provide the ID, because this is typically a meaningful identifier,
     * and for most use cases should be supplied by the caller.
     *
     * If an artifact with the provided artifact ID already exists, the default behavior
     * is for the server to reject the content with a 409 error.  However, the caller can
     * supply the `ifExists` query parameter to alter this default behavior. The `ifExists`
     * query parameter can have one of the following values:
     *
     * * `FAIL` (*default*) - server rejects the content with a 409 error
     * * `UPDATE` - server updates the existing artifact and returns the new metadata
     * * `RETURN` - server does not create or add content to the server, but instead
     * returns the metadata for the existing artifact
     * * `RETURN_OR_UPDATE` - server returns an existing **version** that matches the
     * provided content if such a version exists, otherwise a new version is created
     *
     * This operation may fail for one of the following reasons:
     *
     * * An invalid `ArtifactType` was indicated (HTTP error `400`)
     * * No `ArtifactType` was indicated and the server could not determine one from the content (HTTP error `400`)
     * * Provided content (request body) was empty (HTTP error `400`)
     * * An artifact with the provided ID already exists (HTTP error `409`)
     * * The content violates one of the configured global rules (HTTP error `409`)
     * * A server error occurred (HTTP error `500`)
     *
    **/
    Artifacts.prototype.createArtifact = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateArtifactRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/artifacts";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._defaultClient;
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .request(__assign({ url: url, method: "post", headers: headers, data: body }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.artifactMetaData = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 409:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteArtifact - Delete artifact
     *
     * Deletes an artifact completely, resulting in all versions of the artifact also being
     * deleted.  This may fail for one of the following reasons:
     *
     * * No artifact with the `artifactId` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
    **/
    Artifacts.prototype.deleteArtifact = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteArtifactRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/artifacts/{artifactId}", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getArtifactByGlobalId - Get artifact by global ID
     *
     * Gets the content for an artifact version in the registry using its globally unique
     * identifier.
     *
     * This operation may fail for one of the following reasons:
     *
     * * No artifact version with this `globalId` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     *
    **/
    Artifacts.prototype.getArtifactByGlobalId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetArtifactByGlobalIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/ids/{globalId}", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getLatestArtifact - Get latest artifact
     *
     * Returns the latest version of the artifact in its raw form.  The `Content-Type` of the
     * response depends on the artifact type.  In most cases, this is `application/json`, but
     * for some types it may be different (for example, `PROTOBUF`).
     *
     * This operation may fail for one of the following reasons:
     *
     * * No artifact with this `artifactId` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     *
    **/
    Artifacts.prototype.getLatestArtifact = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetLatestArtifactRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/artifacts/{artifactId}", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * listArtifacts - List all artifact IDs
     *
     * Returns a list of IDs of all artifacts in the registry as a flat list.  Typically the
     * server is configured to limit the number of artifact IDs returned when a large number
     * of artifacts exist. In this case, the result of this call may be non-deterministic. The
     * default limit is typically 1000 artifacts.
    **/
    Artifacts.prototype.listArtifacts = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/artifacts";
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.listArtifacts200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * searchArtifacts - Search for artifacts
     *
     * Returns a paginated list of all artifacts that match the provided search criteria.
     *
    **/
    Artifacts.prototype.searchArtifacts = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.SearchArtifactsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/search/artifacts";
        var client = this._defaultClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.artifactSearchResults = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * updateArtifact - Update artifact
     *
     * Updates an artifact by uploading new content.  The body of the request should
     * be the raw content of the artifact.  This is typically in JSON format for *most*
     * of the supported types, but may be in another format for a few (for example, `PROTOBUF`).
     *
     * The registry attempts to figure out what kind of artifact is being added from the
     * following supported list:
     *
     * * Avro (`AVRO`)
     * * Protobuf (`PROTOBUF`)
     * * Protobuf File Descriptor (`PROTOBUF_FD`)
     * * JSON Schema (`JSON`)
     * * Kafka Connect (`KCONNECT`)
     * * OpenAPI (`OPENAPI`)
     * * AsyncAPI (`ASYNCAPI`)
     * * GraphQL (`GRAPHQL`)
     * * Web Services Description Language (`WSDL`)
     * * XML Schema (`XSD`)
     *
     * Alternatively, you can specify the artifact type using the `X-Registry-ArtifactType`
     * HTTP request header, or include a hint in the request's `Content-Type`.  For example:
     *
     * ```
     * Content-Type: application/json; artifactType=AVRO
     * ```
     *
     * The update could fail for a number of reasons including:
     *
     * * Provided content (request body) was empty (HTTP error `400`)
     * * No artifact with the `artifactId` exists (HTTP error `404`)
     * * The new content violates one of the rules configured for the artifact (HTTP error `409`)
     * * The provided artifact type is not recognized (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     *
     * When successful, this creates a new version of the artifact, making it the most recent
     * (and therefore official) version of the artifact.
    **/
    Artifacts.prototype.updateArtifact = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateArtifactRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/artifacts/{artifactId}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._defaultClient;
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .request(__assign({ url: url, method: "put", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.artifactMetaData = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 409:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * updateArtifactState - Update artifact state
     *
     * Updates the state of the artifact.  For example, you can use this to mark the latest
     * version of an artifact as `DEPRECATED`.  The operation changes the state of the latest
     * version of the artifact.  If multiple versions exist, only the most recent is changed.
     *
     * The following state changes are supported:
     *
     * * Enabled -> Disabled
     * * Enabled -> Deprecated
     * * Enabled -> Deleted
     * * Disabled -> Enabled
     * * Disabled -> Deleted
     * * Disabled -> Deprecated
     * * Deprecated -> Deleted
     *
     * This operation can fail for the following reasons:
     *
     * * No artifact with this `artifactId` exists (HTTP error `404`)
     * * Artifact cannot transition to the given state (HTTP error `400`)
     * * A server error occurred (HTTP error `500`)
     *
    **/
    Artifacts.prototype.updateArtifactState = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateArtifactStateRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/artifacts/{artifactId}/state", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._defaultClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .request(__assign({ url: url, method: "put", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.error = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return Artifacts;
}());
export { Artifacts };

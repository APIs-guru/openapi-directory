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
var ApiVersion = /** @class */ (function () {
    function ApiVersion(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * createApiVersion - Create API Version
     *
     * This call creates a new API version in the specified API.
     *
     * Request body should contain a `version` object which should have fields:
     *
     * <table>
     * <tr>
     * 	<td>name</td>
     * 	<td>Required. Name of the API Version</td>
     * </tr>
     * <tr>
     * 	<td>source</td>
     * 	<td>
     * 		If specified, it will copy the contents of the specified api version to create a new api verison.
     * 		<table>
     * 			<tr>
     * 				<td>id</td>
     * 				<td>Required. Id of the apiversion from where the details are to be copied</td>
     * 			</tr>
     * 			<tr>
     * 				<td>schema</td>
     * 				<td>Boolean. If true then copies the schema from the specified api version</td>
     * 			</tr>
     * 			<tr>
     * 				<td>relations</td>
     * 				<td>Object. {"&lt;relationType&gt;": true/false}.
     * 					Allowed relation types are `mock`, `monitor`, `documentation`, `contracttest`, `integrationtest`, `testsuite`, `environment`
     * 				Relation types which should be copied over to the new api verison</td>
     * 			</tr>
     * 		</table>
     * 	</td>
     * </tr>
     * </table>
     *
     * Response contains a `version` object with all the details related to the created API Version, namely, `id`, `name`, `api`.
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    ApiVersion.prototype.createApiVersion = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateApiVersionRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/apis/{apiId}/versions", req.pathParams);
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
        return client
            .request(__assign({ url: url, method: "post", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.createApiVersion200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteAnApiVersion - Delete an API Version
     *
     * This call deletes an existing API Version having the specified id.
     *
     * Response contains an `version` object with `id` of the API Version which was deleted.
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    ApiVersion.prototype.deleteAnApiVersion = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteAnApiVersionRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/apis/{apiId}/versions/{apiVersionId}", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.deleteAnApiVersion200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getAllApiVersions - Get All API Versions
     *
     * This call fetches details about the all the API Versions in the specified API.
     *
     * The response will contain an array `versions` object which would be a list of all the API Version along with their details.
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    ApiVersion.prototype.getAllApiVersions = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetAllApiVersionsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/apis/{apiId}/versions", req.pathParams);
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
                        res.getAllApiVersions200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getAnApiVersion - Get an API Version
     *
     * This call fetches details about the specified API Version.
     *
     * The response will contain a `version` object which would contain all the details of the API Version.
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    ApiVersion.prototype.getAnApiVersion = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetAnApiVersionRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/apis/{apiId}/versions/{apiVersionId}", req.pathParams);
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
                        res.getAnApiVersion200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * updateAnApiVersion - Update an API Version
     *
     * This call updates an existing API Version.
     *
     * Request body should contain a `version` object with the fields which need to be updated. Only field which can be updated is `name`.
     *
     * Response contains a `version` object with all the details related to the created API Version, namely, `id`, `name`, `api` etc.
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    ApiVersion.prototype.updateAnApiVersion = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateAnApiVersionRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/apis/{apiId}/versions/{apiVersionId}", req.pathParams);
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
                        res.updateAnApiVersion200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return ApiVersion;
}());
export { ApiVersion };

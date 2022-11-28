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
var Documents = /** @class */ (function () {
    function Documents(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * deleteDocumentResource - Delete the document
     *
     * Completely delete the document.
     *
     * **WARNING** This removes the document from our system: it will not be recoverable
     *
     *
     * **Permission required:** review
    **/
    Documents.prototype.deleteDocumentResource = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteDocumentResourceRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/documents/{document_id}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getDocumentOriginalFileResource - Get document original file
     *
     * Return the document original file, as attachment.
     *
     * **Permission required:** review
    **/
    Documents.prototype.getDocumentOriginalFileResource = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetDocumentOriginalFileResourceRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/documents/{document_id}/original_file", req.pathParams);
        var client = this._securityClient;
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    Documents.prototype.getDocumentPageImageResource = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetDocumentPageImageResourceRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/documents/{document_id}/page/{page_range}", req.pathParams);
        var client = this._securityClient;
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getDocumentResource - Get the document
     *
     * Simple endpoint that will fetch the given document
     *
     * **Permission required:** review
    **/
    Documents.prototype.getDocumentResource = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetDocumentResourceRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/documents/{document_id}", req.pathParams);
        var client = this._securityClient;
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.documentModelGet = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getDocumentTextResource - Get the document text
     *
     * Return the optimal text for the document; will either be the OCR text, the native text,
     * the raw text or a translated version.
     *
     * **Permission required:** review
    **/
    Documents.prototype.getDocumentTextResource = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetDocumentTextResourceRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/documents/{document_id}/text", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postDocumentsSimpleApiResource - Upload a new doc to the inbox
     *
     * This endpoint uploads a new file to the given inbox and will process the file.
     *
     * ## Upload mode: sync
     *
     * When sync=true (default), the call will block and wait for the processing to complete.
     *
     * If you have a custom output configured (this is set by Contract Fit team),
     * passing mimetype *application/vnd.cf.custom* will allow you to get the custom output formatted result
     *
     * Since it might yield inconsistent results if a timeout is raised while waiting,
     * it is recommended to use the **async** mode.
     *
     * ## Upload mode: async
     *
     * When sync=false, the call will schedule the processing and return without waiting for completion.
     * It will return the document ID, so that the processed document can be retrieved at a later date.
     *
     * **Permission required:** upload
    **/
    Documents.prototype.postDocumentsSimpleApiResource = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostDocumentsSimpleApiResourceRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/documents/{inbox_id}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .request(__assign({ url: url, method: "post", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 415:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postSimpleDocumentsResource - Upload a new document
     *
     * This endpoint is a simplified version of the upload document to inbox one - synchronous mode.
     *
     * The upload file will be upload to the given inbox if provided, else fallback to the **invoice** inbox.
     * The file will be processed synchronously, ie the request will blocks until the document was processed
     * *or* until it timeout; in this case the document might **not** be correctly processed.
     *
     *
     * For a more reliable processing use the /documents/{inbox_id} endpoint in async mode
     *
     *
     * **Permission required:** upload
    **/
    Documents.prototype.postSimpleDocumentsResource = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostSimpleDocumentsResourceRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/documents/";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .request(__assign({ url: url, method: "post", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return Documents;
}());
export { Documents };

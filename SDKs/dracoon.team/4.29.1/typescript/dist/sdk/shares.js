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
var Shares = /** @class */ (function () {
    function Shares(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * createDownloadShare - Create new Download Share
     *
     * ### Description:
     * Create a new Download Share.
     *
     * ### Precondition:
     * User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span> permissions on target node.
     *
     * ### Postcondition:
     * Download Share is created.
     *
     * ### Further Information:
     *
     * If the target node is a room: subordinary rooms are excluded from a Download Share.
     *
     * * `name` is limited to **150** characters.
     * * `notes` are limited to **255** characters.
     * * `password` is limited to **1024** characters.
     *
     * Use `POST /shares/downloads/{share_id}/email` API for sending emails.
     *
     * Forbidden characters in passwords: [`&`, `'`, `<`, `>`]
    **/
    Shares.prototype.createDownloadShare = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateDownloadShareRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v4/shares/downloads";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.downloadShare = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.createDownloadShare400ApplicationJsonOneOf = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 412:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 502:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * createUploadShare - Create new Upload Share
     *
     * ### Description:
     * Create a new Upload Share (aka File Request).
     *
     * ### Precondition:
     * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span> permissions on target container.
     *
     * ### Postcondition:
     * Upload Share is created.
     *
     * ### Further Information:
     *
     * * `name` is limited to **150** characters.
     * * `notes` are limited to **255** characters.
     * * `password` is limited to **1024** characters.
     *
     * Forbidden characters in passwords: [`&`, `'`, `<`, `>`]
     *
     * Use `POST /shares/uploads/{share_id}/email` API for sending emails.
     *
    **/
    Shares.prototype.createUploadShare = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateUploadShareRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v4/shares/uploads";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.uploadShare = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.createUploadShare400ApplicationJsonOneOf = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 412:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 502:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteDownloadShares - Remove Download Shares
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.21.0</h3>
     *
     * ### Functional Description:
     * Delete multiple Download Shares.
     *
     * ### Precondition:
     * User with _"manage download share"_ permissions on target nodes.
     *
     * ### Postcondition:
     * Download Shares are deleted.
     *
     * ### Further Information:
     * Only the Download Shares are removed; the referenced files or containers persists.
    **/
    Shares.prototype.deleteDownloadShares = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteDownloadSharesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v4/shares/downloads";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .request(__assign({ url: url, method: "delete", headers: headers, data: body }, config)).then(function (httpRes) {
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
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 412:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * deleteUploadShares - Remove Upload Shares
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.21.0</h3>
     *
     * ### Functional Description:
     * Delete multiple Upload Shares (aka Upload Accounts).
     *
     * ### Precondition:
     * User has _"manage upload share"_ permissions on target containers.
     *
     * ### Postcondition:
     * Upload Shares are deleted.
     *
     * ### Further Information:
     * Only the Upload Shares are removed; already uploaded files and the target container persist.
    **/
    Shares.prototype.deleteUploadShares = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteUploadSharesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v4/shares/uploads";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .request(__assign({ url: url, method: "delete", headers: headers, data: body }, config)).then(function (httpRes) {
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
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 412:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * removeDownloadShare - Remove Download Share
     *
     * ### Description:
     * Delete a Download Share.
     *
     * ### Precondition:
     * User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span> permissions on target node.
     *
     * ### Postcondition:
     * Download Share is deleted.
     *
     * ### Further Information:
     * Only the Download Share is removed; the referenced file or container persists.
    **/
    Shares.prototype.removeDownloadShare = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.RemoveDownloadShareRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/v4/shares/downloads/{share_id}", req.pathParams);
        var client = this._securityClient;
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "delete", headers: headers }, config)).then(function (httpRes) {
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
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 412:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * removeUploadShare - Remove Upload Share
     *
     * ### Description:
     * Delete an Upload Share (aka File Request).
     *
     * ### Precondition:
     * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span> permissions on target container.
     *
     * ### Postcondition:
     * Upload Share is deleted.
     *
     * ### Further Information:
     * Only the Upload Share is removed; already uploaded files and the target container persist.
    **/
    Shares.prototype.removeUploadShare = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.RemoveUploadShareRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/v4/shares/uploads/{share_id}", req.pathParams);
        var client = this._securityClient;
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "delete", headers: headers }, config)).then(function (httpRes) {
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
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 412:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * requestDownloadShare - Request Download Share
     *
     * ### Description:
     * Retrieve detailed information about one Download Share.
     *
     * ### Precondition:
     * User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span> permissions on target node.
     *
     * ### Postcondition:
     * Download Share is returned
     *
     * ### Further Information:
     * None.
    **/
    Shares.prototype.requestDownloadShare = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.RequestDownloadShareRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/v4/shares/downloads/{share_id}", req.pathParams);
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
                        res.downloadShare = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 412:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * requestDownloadShareQr - Request Download Share via QR Code
     *
     * ### Description:
     * Retrieve detailed information about one Download Share.
     *
     * ### Precondition:
     * User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span> permissions on target node.
     *
     * ### Postcondition:
     * Download Share is returned
     *
     * ### Further Information:
     * None.
    **/
    Shares.prototype.requestDownloadShareQr = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.RequestDownloadShareQrRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/v4/shares/downloads/{share_id}/qr", req.pathParams);
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
                        res.downloadShare = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 412:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * requestDownloadShares - Request list of Download Shares
     *
     * ### Description:
     * Retrieve a list of Download Shares.
     *
     * ### Precondition:
     * Authenticated user.
     *
     * ### Postcondition:
     * List of available Download Shares is returned.
     *
     * ### Further Information:
     *
     * ### Filtering:
     * All filter fields are connected via logical (**AND**). createdBy and updatedBy searches several user-related attributes.
     *
     * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`
     *
     * <details style="padding-left: 10px">
     * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
     *
     * `name:cn:searchString_1|createdBy:cn:searchString_2`
     * Filter by file name contains `searchString_1` **AND** creator info (`firstName` **OR** `lastName` **OR** `email` **OR** `username`) contains `searchString_2`.
     *
     * </details>
     *
     * ### Filtering options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
     * | :--- | :--- | :--- | :--- | :--- |
     * | `name` | Alias or node name filter | `cn` | Alias or node name contains value. | `search String` |
     * | `createdAt` | Creation date filter | `ge, le` | Creation date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `createdAt:ge:2016-12-31`&#124;`createdAt:le:2018-01-01` | `Date (yyyy-MM-dd)` |
     * | `createdBy` | Creator info filter | `cn, eq` | Creator info (`firstName` **OR** `lastName` **OR** `email` **OR** `username`) contains value. | `search String` |
     * | `createdById` | Creator ID filter | `eq` | Creator ID equals value. | `positive Integer` |
     * | `accessKey` | Share access key filter | `cn` | Share access key contains values. | `search String` |
     * | `nodeId` | Source node ID | `eq` | Source node (room, folder, file) ID equals value. | `positive Integer` |
     * | `updatedBy` | Modifier info filter | `cn, eq` | Modifier info (`firstName` **OR** `lastName` **OR** `email` **OR** `username`) contains value. | `search String` |
     * | `updatedById` | Modifier ID filter | `eq` | Modifier ID equals value. | `positive Integer` |
     *
     * </details>
     * ### Deprecated filtering options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
     * | :--- | :--- | :--- | :--- | :--- |
     * | <del>`userId`</del>  | Creator user ID | `eq` | Creator user ID equals value. Use `createdById` instead | `positive Integer` |
     *
     * </details>
     *
     * ---
     *
     * ### Sorting:
     * Sort string syntax: `FIELD_NAME:ORDER`
     * `ORDER` can be `asc` or `desc`.
     * Multiple sort fields are supported.
     *
     * <details style="padding-left: 10px">
     * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
     *
     * `name:asc|expireAt:desc`
     * Sort by `name` ascending **AND** by `expireAt` descending.
     *
     * </details>
     *
     * ### Sorting options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Description |
     * | :--- | :--- |
     * | `name` | Alias or node name |
     * | `notifyCreator` | Notify creator on every download |
     * | `expireAt` | Expiration date |
     * | `createdAt` | Creation date |
     * | `createdBy` | Creator first name, last name |
     *
     * </details>
     *
     * ### Deprecated sorting options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Description |
     * | :--- | :--- |
     * | <del>`classification`</del> | Classification ID:<ul><li>1 - public</li><li>2 - internal</li><li>3 - confidential</li><li>4 - strictly confidential</li></ul> |
     *
     * </details>
    **/
    Shares.prototype.requestDownloadShares = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.RequestDownloadSharesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v4/shares/downloads";
        var client = this._securityClient;
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.downloadShareList = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 412:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * requestUploadShare - Request Upload Share
     *
     * ### Description:
     * Retrieve detailed information about one Upload Share (aka File Request).
     *
     * ### Precondition:
     * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span> permissions on target container.
     *
     * ### Postcondition:
     * Upload Share is returned.
     *
     * ### Further Information:
     * None.
    **/
    Shares.prototype.requestUploadShare = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.RequestUploadShareRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/v4/shares/uploads/{share_id}", req.pathParams);
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
                        res.uploadShare = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 412:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * requestUploadShareQr - Request Upload Share via QR Code
     *
     * ### Description:
     * Retrieve detailed information about one Upload Share (aka File Request).
     *
     * ### Precondition:
     * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span> permissions on target container.
     *
     * ### Postcondition:
     * Upload Share is returned.
     *
     * ### Further Information:
     * None.
    **/
    Shares.prototype.requestUploadShareQr = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.RequestUploadShareQrRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/v4/shares/uploads/{share_id}/qr", req.pathParams);
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
                        res.uploadShare = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 412:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * requestUploadShares - Request list of Upload Shares
     *
     * ### Description:
     * Retrieve a list of Upload Shares (aka File Requests).
     *
     * ### Precondition:
     * Authenticated user.
     *
     * ### Postcondition:
     * List of available Upload Shares is returned.
     *
     * ### Further Information:
     *
     * ### Filtering:
     * All filter fields are connected via logical (**AND**). createdBy and updatedBy searches several user-related attributes.
     * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`
     *
     * <details style="padding-left: 10px">
     * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
     *
     * `name:cn:searchString_1|createdBy:cn:searchString_2`
     * Filter by alias name contains `searchString_1` **AND** creator info (`firstName` **OR** `lastName` **OR** `email` **OR** `username`) contains `searchString_2`.
     *
     * </details>
     *
     * ### Filtering options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
     * | :--- | :--- | :--- | :--- | :--- |
     * | `name` | Alias name filter | `cn` | Alias name contains value. | `search String` |
     * | `createdAt` | Creation date filter | `ge, le` | Creation date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `createdAt:ge:2016-12-31`&#124;`createdAt:le:2018-01-01` | `Date (yyyy-MM-dd)` |
     * | `createdBy` | Creator info filter | `cn, eq` | Creator info (`firstName` **OR** `lastName` **OR** `email` **OR** `username`) contains value. | `search String` |
     * | `createdById` | Creator ID filter | `eq` | Creator ID equals value. | `positive Integer` |
     * | `accessKey` | Share access key filter | `cn` | Share access key contains values. | `search String` |
     * | `userId` | Creator user ID | `eq` | Creator user ID equals value. | `positive Integer` |
     * | `targetId` | Target node ID | `eq` | Target node (room, folder) ID equals value. | `positive Integer` |
     * | `updatedBy` | Modifier info filter | `cn, eq` | Modifier info (`firstName` **OR** `lastName` **OR** `email` **OR** `username`) contains value. | `search String` |
     * | `updatedById` | Modifier ID filter | `eq` | Modifier ID equals value. | `positive Integer` |
     *
     * </details>
     *
     * ### Deprecated filtering options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
     * | :--- | :--- | :--- | :--- | :--- |
     * | <del>`targetId`</del> | Target node ID | `cn` | Target node (room, folder) ID equals value. | `positive Integer` |
     * | <del>`userId` </del>| Creator user ID | `eq` | Creator user ID equals value. Use `createdById` instead. | `positive Integer` |
     *
     * </details>
     *
     * ---
     *
     * Sort string syntax: `FIELD_NAME:ORDER`
     * `ORDER` can be `asc` or `desc`.
     * Multiple sort fields are supported.
     *
     * <details style="padding-left: 10px">
     * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
     *
     * `name:asc|expireAt:desc`
     * Sort by `name` ascending **AND** by `expireAt` descending.
     *
     * </details>
     *
     * ### Sorting options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Description |
     * | :--- | :--- |
     * | `name` | Alias name |
     * | `notifyCreator` | Notify creator on every upload |
     * | `expireAt` | Expiration date |
     * | `createdAt` | Creation date |
     * | `createdBy` | Creator first name, last name |
     *
     * </details>
    **/
    Shares.prototype.requestUploadShares = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.RequestUploadSharesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v4/shares/uploads";
        var client = this._securityClient;
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.uploadShareList = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 412:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * sendDownloadShareLinkViaEmail - Send an existing Download Share link via email
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.11.0</h3>
     *
     * ### Description:
     * Send an email to specific recipients for existing Download Share.
     *
     * ### Precondition:
     * User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span> permissions on target node.
     *
     * ### Postcondition:
     * Download Share link successfully sent.
     *
     * ### Further Information:
     * None.
    **/
    Shares.prototype.sendDownloadShareLinkViaEmail = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.SendDownloadShareLinkViaEmailRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/v4/shares/downloads/{share_id}/email", req.pathParams);
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 412:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * sendUploadShareLinkViaEmail - Send an existing Upload Share link via email
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.11.0</h3>
     *
     * ### Description:
     * Send an email to specific recipients for existing Upload Share.
     *
     * ### Precondition:
     * User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span> permissions on target container.
     *
     * ### Postcondition:
     * Upload Share link successfully sent.
     *
     * ### Further Information:
     * None.
    **/
    Shares.prototype.sendUploadShareLinkViaEmail = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.SendUploadShareLinkViaEmailRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/v4/shares/uploads/{share_id}/email", req.pathParams);
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 412:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * updateDownloadShare - Update Download Share
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.11.0</h3>
     *
     * ### Description:
     * Update an existing Download Share.
     *
     * ### Precondition:
     * User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span> permissions on target node.
     *
     * ### Postcondition:
     * Download Share is successfully updated.
     *
     * ### Further Information:
     * * `name` is limited to **150** characters.
     * * `notes` are limited to **255** characters.
     * * `password` is limited to **1024** characters.
     *
     * Forbidden characters in passwords: [`&`, `'`, `<`, `>`]
    **/
    Shares.prototype.updateDownloadShare = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateDownloadShareRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/v4/shares/downloads/{share_id}", req.pathParams);
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
                        res.downloadShare = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.updateDownloadShare400ApplicationJsonOneOf = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 412:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 502:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * updateDownloadShares - Update a list of Download Shares
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.25.0</h3>
     *
     * ### Description:
     * Update a list of existing Download Shares.
     *
     * ### Precondition:
     * User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span> permissions on target node.
     *
     * ### Postcondition:
     * Download Shares are successfully updated.
     *
     * ### Further Information:
     * Maximum number of shares is 200
    **/
    Shares.prototype.updateDownloadShares = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateDownloadSharesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v4/shares/downloads";
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
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    if (utils.MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 412:
                    if (utils.MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 502:
                    if (utils.MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * updateUploadShare - Update Upload Share
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.11.0</h3>
     *
     * ### Description:
     * Update existing Upload Share (aka File Request).
     *
     * ### Precondition:
     * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span> permissions on target container.
     *
     * ### Postcondition:
     * Upload Share successfully updated.
     *
     * ### Further Information:
     *
     * * `name` is limited to **150** characters.
     * * `notes` are limited to **255** characters.
     * * `password` is limited to **1024** characters.
     *
     * Forbidden characters in passwords: [`&`, `'`, `<`, `>`]
    **/
    Shares.prototype.updateUploadShare = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateUploadShareRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/v4/shares/uploads/{share_id}", req.pathParams);
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
                        res.uploadShare = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.updateUploadShare400ApplicationJsonOneOf = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 412:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 502:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * updateUploadShares - Update List of Upload Shares
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.25.0</h3>
     *
     * ### Description:
     * Update a list of existing Upload Shares (aka File Request).
     *
     * ### Precondition:
     * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span> permissions on target container.
     *
     * ### Postcondition:
     * Upload Shares successfully updated.
     *
     * ### Further Information:
     * Maximum number of shares is 200
    **/
    Shares.prototype.updateUploadShares = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateUploadSharesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v4/shares/uploads";
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
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    if (utils.MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 412:
                    if (utils.MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 502:
                    if (utils.MatchContentType(contentType, "*/*")) {
                        var resBody = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, null, 0);
                        var out = new Uint8Array(resBody.length);
                        for (var i = 0; i < resBody.length; i++)
                            out[i] = resBody.charCodeAt(i);
                        res.body = out;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return Shares;
}());
export { Shares };

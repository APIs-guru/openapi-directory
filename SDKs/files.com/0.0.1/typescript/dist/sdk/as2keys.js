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
var As2Keys = /** @class */ (function () {
    function As2Keys(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * deleteAs2KeysId - Delete As2 Key
     *
     * Delete As2 Key
    **/
    As2Keys.prototype.deleteAs2KeysId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteAs2KeysIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/as2_keys/{id}", req.pathParams);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 405:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 409:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 412:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 422:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 423:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getAs2Keys - List As2 Keys
     *
     * List As2 Keys
    **/
    As2Keys.prototype.getAs2Keys = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetAs2KeysRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/as2_keys";
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
                        res.as2KeyEntities = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 405:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 409:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 412:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 422:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 423:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getAs2KeysId - Show As2 Key
     *
     * Show As2 Key
    **/
    As2Keys.prototype.getAs2KeysId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetAs2KeysIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/as2_keys/{id}", req.pathParams);
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
                        res.as2KeyEntity = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 405:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 409:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 412:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 422:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 423:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * patchAs2KeysId - Update As2 Key
     *
     * Update As2 Key
    **/
    As2Keys.prototype.patchAs2KeysId = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PatchAs2KeysIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/as2_keys/{id}", req.pathParams);
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
            .request(__assign({ url: url, method: "patch", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.as2KeyEntity = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 405:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 409:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 412:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 422:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 423:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postAs2Keys - Create As2 Key
     *
     * Create As2 Key
    **/
    As2Keys.prototype.postAs2Keys = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostAs2KeysRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/as2_keys";
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.as2KeyEntity = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 405:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 409:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 412:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 422:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 423:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return As2Keys;
}());
export { As2Keys };

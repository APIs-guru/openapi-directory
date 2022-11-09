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
import axios from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import { GetHeadersFromRequest } from "../internal/utils/headers";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";
import { Security } from "./models/shared";
var Servers = [
    "https://api.configcat.com",
];
export function WithServerURL(serverURL, params) {
    return function (sdk) {
        if (params != null) {
            serverURL = utils.ReplaceParameters(serverURL, params);
        }
        sdk.serverURL = serverURL;
    };
}
export function WithClient(client) {
    return function (sdk) {
        sdk.defaultClient = client;
    };
}
export function WithSecurity(security) {
    if (!(security instanceof utils.SpeakeasyBase)) {
        security = new Security(security);
    }
    return function (sdk) {
        sdk.security = security;
    };
}
var SDK = /** @class */ (function () {
    function SDK() {
        var opts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            opts[_i] = arguments[_i];
        }
        var _this = this;
        opts.forEach(function (o) { return o(_this); });
        if (this.serverURL == "") {
            this.serverURL = Servers[0];
        }
        if (!this.defaultClient) {
            this.defaultClient = axios.create({ baseURL: this.serverURL });
        }
        if (!this.securityClient) {
            if (this.security) {
                this.securityClient = CreateSecurityClient(this.defaultClient, this.security);
            }
            else {
                this.securityClient = this.defaultClient;
            }
        }
    }
    // AddOrUpdateIntegrationLink - Add or update Integration link
    SDK.prototype.AddOrUpdateIntegrationLink = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.AddOrUpdateIntegrationLinkRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/environments/{environmentId}/settings/{settingId}/integrationLinks/{integrationLinkType}/{key}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .post(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/hal+json")) {
                        res.integrationLinkModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (MatchContentType(contentType, "application/json")) {
                        res.integrationLinkModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // CreateConfig - Create Config
    /**
     * This endpoint creates a new Config in a specified Product
     * identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
    **/
    SDK.prototype.CreateConfig = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateConfigRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/products/{productId}/configs", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .post(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 201:
                    if (MatchContentType(contentType, "application/hal+json")) {
                        res.configModelHaljson = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (MatchContentType(contentType, "application/json")) {
                        res.configModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // CreateEnvironment - Create Environment
    /**
     * This endpoint creates a new Environment in a specified Product
     * identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
    **/
    SDK.prototype.CreateEnvironment = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateEnvironmentRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/products/{productId}/environments", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .post(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 201:
                    if (MatchContentType(contentType, "application/hal+json")) {
                        res.environmentModelHaljson = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (MatchContentType(contentType, "application/json")) {
                        res.environmentModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // CreatePermissionGroup - Create Permission Group
    /**
     * This endpoint creates a new Permission Group in a specified Product
     * identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
    **/
    SDK.prototype.CreatePermissionGroup = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreatePermissionGroupRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/products/{productId}/permissions", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .post(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 201:
                    if (MatchContentType(contentType, "application/hal+json")) {
                        res.permissionGroupModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (MatchContentType(contentType, "application/json")) {
                        res.permissionGroupModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // CreateProduct - Create Product
    /**
     * This endpoint creates a new Product in a specified Organization
     * identified by the `organizationId` parameter, which can be obtained from the [List Organizations](#operation/get-organizations) endpoint.
    **/
    SDK.prototype.CreateProduct = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateProductRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/organizations/{organizationId}/products", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .post(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 201:
                    if (MatchContentType(contentType, "application/hal+json")) {
                        res.productModelHaljson = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (MatchContentType(contentType, "application/json")) {
                        res.productModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // CreateSetting - Create Flag
    /**
     * This endpoint creates a new Feature Flag or Setting in a specified Config
     * identified by the `configId` parameter.
     *
     * **Important:** The `key` attribute must be unique within the given Config.
    **/
    SDK.prototype.CreateSetting = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateSettingRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/configs/{configId}/settings", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .post(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 201:
                    if (MatchContentType(contentType, "application/hal+json")) {
                        res.settingModelHaljson = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (MatchContentType(contentType, "application/json")) {
                        res.settingModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // CreateTag - Create Tag
    /**
     * This endpoint creates a new Tag in a specified Product
     * identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
    **/
    SDK.prototype.CreateTag = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateTagRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/products/{productId}/tags", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .post(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 201:
                    if (MatchContentType(contentType, "application/hal+json")) {
                        res.tagModelHaljson = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (MatchContentType(contentType, "application/json")) {
                        res.tagModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // DeleteConfig - Delete Config
    /**
     * This endpoint removes a Config identified by the `configId` parameter.
    **/
    SDK.prototype.DeleteConfig = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteConfigRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/configs/{configId}", req.pathParams);
        var client = this.securityClient;
        return client
            .delete(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 204:
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // DeleteEnvironment - Delete Environment
    /**
     * This endpoint removes an Environment identified by the `environmentId` parameter.
    **/
    SDK.prototype.DeleteEnvironment = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteEnvironmentRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/environments/{environmentId}", req.pathParams);
        var client = this.securityClient;
        return client
            .delete(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 204:
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // DeleteIntegrationLink - Delete Integration link
    SDK.prototype.DeleteIntegrationLink = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteIntegrationLinkRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/environments/{environmentId}/settings/{settingId}/integrationLinks/{integrationLinkType}/{key}", req.pathParams);
        var client = this.securityClient;
        return client
            .delete(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/hal+json")) {
                        res.deleteIntegrationLinkModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (MatchContentType(contentType, "application/json")) {
                        res.deleteIntegrationLinkModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // DeleteOrganizationMember - Delete Member from Organization
    /**
     * This endpoint removes a Member identified by the `userId` from the
     * given Organization identified by the `organizationId` parameter.
    **/
    SDK.prototype.DeleteOrganizationMember = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteOrganizationMemberRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/organizations/{organizationId}/members/{userId}", req.pathParams);
        var client = this.securityClient;
        return client
            .delete(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 204:
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // DeletePermissionGroup - Delete Permission Group
    /**
     * This endpoint removes a Permission Group identified by the `permissionGroupId` parameter.
    **/
    SDK.prototype.DeletePermissionGroup = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeletePermissionGroupRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/permissions/{permissionGroupId}", req.pathParams);
        var client = this.securityClient;
        return client
            .delete(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 204:
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // DeleteProduct - Delete Product
    /**
     * This endpoint removes a Product identified by the `productId` parameter.
    **/
    SDK.prototype.DeleteProduct = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteProductRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/products/{productId}", req.pathParams);
        var client = this.securityClient;
        return client
            .delete(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 204:
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // DeleteProductMember - Delete Member from Product
    /**
     * This endpoint removes a Member identified by the `userId` from the
     * given Product identified by the `productId` parameter.
    **/
    SDK.prototype.DeleteProductMember = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteProductMemberRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/products/{productId}/members/{userId}", req.pathParams);
        var client = this.securityClient;
        return client
            .delete(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 204:
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // DeleteSetting - Delete Flag
    /**
     * This endpoint removes a Feature Flag or Setting from a specified Config,
     * identified by the `configId` parameter.
    **/
    SDK.prototype.DeleteSetting = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteSettingRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/settings/{settingId}", req.pathParams);
        var client = this.securityClient;
        return client
            .delete(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 204:
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // DeleteTag - Delete Tag
    /**
     * This endpoint deletes a Tag identified by the `tagId` parameter. To remove a Tag from a Feature Flag or Setting use the [Update Flag](#operation/update-setting) endpoint.
    **/
    SDK.prototype.DeleteTag = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteTagRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/tags/{tagId}", req.pathParams);
        var client = this.securityClient;
        return client
            .delete(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 204:
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetAuditlogs - List Audit log items for Product
    /**
     * This endpoint returns the list of Audit log items for a given Product
     * and the result can be optionally filtered by Config and/or Environment.
    **/
    SDK.prototype.GetAuditlogs = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetAuditlogsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/products/{productId}/auditlogs", req.pathParams);
        var client = this.securityClient;
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/hal+json")) {
                        res.auditLogItemModels = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (MatchContentType(contentType, "application/json")) {
                        res.auditLogItemModels = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetConfig - Get Config
    /**
     * This endpoint returns the metadata of a Config
     * identified by the `configId`.
    **/
    SDK.prototype.GetConfig = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConfigRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/configs/{configId}", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/hal+json")) {
                        res.configModelHaljson = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (MatchContentType(contentType, "application/json")) {
                        res.configModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetConfigs - List Configs
    /**
     * This endpoint returns the list of the Configs that belongs to the given Product identified by the
     * `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
    **/
    SDK.prototype.GetConfigs = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConfigsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/products/{productId}/configs", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/hal+json")) {
                        res.configModelHaljsons = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (MatchContentType(contentType, "application/json")) {
                        res.configModels = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetDeletedSettings - List Deleted Settings
    /**
     * This endpoint returns the list of Feature Flags and Settings that were deleted from the given Config.
    **/
    SDK.prototype.GetDeletedSettings = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetDeletedSettingsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/configs/{configId}/deleted-settings", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/hal+json")) {
                        res.settingModelHaljsons = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (MatchContentType(contentType, "application/json")) {
                        res.settingModels = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetEnvironment - Get Environment
    /**
     * This endpoint returns the metadata of an Environment
     * identified by the `environmentId`.
    **/
    SDK.prototype.GetEnvironment = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetEnvironmentRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/environments/{environmentId}", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/hal+json")) {
                        res.environmentModelHaljson = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (MatchContentType(contentType, "application/json")) {
                        res.environmentModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetEnvironments - List Environments
    /**
     * This endpoint returns the list of the Environments that belongs to the given Product identified by the
     * `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
    **/
    SDK.prototype.GetEnvironments = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetEnvironmentsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/products/{productId}/environments", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/hal+json")) {
                        res.environmentModelHaljsons = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (MatchContentType(contentType, "application/json")) {
                        res.environmentModels = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetIntegrationLinkDetails - Get Integration link
    SDK.prototype.GetIntegrationLinkDetails = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetIntegrationLinkDetailsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/integrationLink/{integrationLinkType}/{key}/details", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/hal+json")) {
                        res.integrationLinkDetailsModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (MatchContentType(contentType, "application/json")) {
                        res.integrationLinkDetailsModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetMe - Get authenticated user details
    SDK.prototype.GetMe = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v1/me";
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/hal+json")) {
                        res.meModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (MatchContentType(contentType, "application/json")) {
                        res.meModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetOrganizationAuditlogs - List Audit log items for Organization
    /**
     * This endpoint returns the list of Audit log items for a given Organization
     * and the result can be optionally filtered by Product and/or Config and/or Environment.
    **/
    SDK.prototype.GetOrganizationAuditlogs = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetOrganizationAuditlogsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/organizations/{organizationId}/auditlogs", req.pathParams);
        var client = this.securityClient;
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/hal+json")) {
                        res.auditLogItemModels = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (MatchContentType(contentType, "application/json")) {
                        res.auditLogItemModels = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetOrganizationMembers - List Organization Members
    /**
     * This endpoint returns the list of Members that belongs
     * to the given Organization, identified by the `organizationId` parameter.
    **/
    SDK.prototype.GetOrganizationMembers = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetOrganizationMembersRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/organizations/{organizationId}/members", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/hal+json")) {
                        res.userModels = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (MatchContentType(contentType, "application/json")) {
                        res.userModels = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetOrganizations - List Organizations
    /**
     * This endpoint returns the list of the Organizations that belongs to the user.
    **/
    SDK.prototype.GetOrganizations = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v1/organizations";
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/hal+json")) {
                        res.organizationModelHaljsons = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (MatchContentType(contentType, "application/json")) {
                        res.organizationModels = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetPermissionGroup - Get Permission Group
    /**
     * This endpoint returns the metadata of a Permission Group
     * identified by the `permissionGroupId`.
    **/
    SDK.prototype.GetPermissionGroup = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetPermissionGroupRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/permissions/{permissionGroupId}", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/hal+json")) {
                        res.permissionGroupModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (MatchContentType(contentType, "application/json")) {
                        res.permissionGroupModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetPermissionGroups - List Permission Groups
    /**
     * This endpoint returns the list of the Permission Groups that belongs to the given Product identified by the
     * `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
    **/
    SDK.prototype.GetPermissionGroups = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetPermissionGroupsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/products/{productId}/permissions", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/hal+json")) {
                        res.permissionGroupModels = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (MatchContentType(contentType, "application/json")) {
                        res.permissionGroupModels = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetProduct - Get Product
    /**
     * This endpoint returns the metadata of a Product
     * identified by the `productId`.
    **/
    SDK.prototype.GetProduct = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetProductRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/products/{productId}", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/hal+json")) {
                        res.productModelHaljson = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (MatchContentType(contentType, "application/json")) {
                        res.productModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetProductMembers - List Product Members
    /**
     * This endpoint returns the list of Members that belongs
     * to the given Product, identified by the `productId` parameter.
    **/
    SDK.prototype.GetProductMembers = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetProductMembersRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/products/{productId}/members", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/hal+json")) {
                        res.memberModels = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (MatchContentType(contentType, "application/json")) {
                        res.memberModels = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetProducts - List Products
    /**
     * This endpoint returns the list of the Products that belongs to the user.
    **/
    SDK.prototype.GetProducts = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v1/products";
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/hal+json")) {
                        res.productModelHaljsons = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (MatchContentType(contentType, "application/json")) {
                        res.productModels = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetSdkKeys - Get SDK Key
    /**
     * This endpoint returns the SDK Key for your Config in a specified Environment.
    **/
    SDK.prototype.GetSdkKeys = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetSdkKeysRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/configs/{configId}/environments/{environmentId}", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/hal+json")) {
                        res.sdkKeysModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (MatchContentType(contentType, "application/json")) {
                        res.sdkKeysModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetSetting - Get Flag
    /**
     * This endpoint returns the metadata attributes of a Feature Flag or Setting
     * identified by the `settingId` parameter.
    **/
    SDK.prototype.GetSetting = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetSettingRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/settings/{settingId}", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/hal+json")) {
                        res.settingModelHaljson = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (MatchContentType(contentType, "application/json")) {
                        res.settingModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetSettingValue - Get value
    /**
     * This endpoint returns the value of a Feature Flag or Setting
     * in a specified Environment identified by the `environmentId` parameter.
     *
     * The most important attributes in the response are the `value`, `rolloutRules` and `percentageRules`.
     * The `value` represents what the clients will get when the evaluation requests of our SDKs
     * are not matching to any of the defined Targeting or Percentage Rules, or when there are no additional rules to evaluate.
     *
     * The `rolloutRules` and `percentageRules` attributes are representing the current
     * Targeting and Percentage Rules configuration of the actual Feature Flag or Setting
     * in an **ordered** collection, which means the order of the returned rules is matching to the
     * evaluation order. You can read more about these rules [here](https://configcat.com/docs/advanced/targeting/).
    **/
    SDK.prototype.GetSettingValue = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetSettingValueRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/environments/{environmentId}/settings/{settingId}/value", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/hal+json")) {
                        res.settingValueModelHaljson = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (MatchContentType(contentType, "application/json")) {
                        res.settingValueModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetSettingValueBySdkkey - Get value
    /**
     * This endpoint returns the value of a Feature Flag or Setting
     * in a specified Environment identified by the <a target="_blank" rel="noopener noreferrer" href="https://app.configcat.com/sdkkey">SDK key</a> passed in the `X-CONFIGCAT-SDKKEY` header.
     *
     * The most important attributes in the response are the `value`, `rolloutRules` and `percentageRules`.
     * The `value` represents what the clients will get when the evaluation requests of our SDKs
     * are not matching to any of the defined Targeting or Percentage Rules, or when there are no additional rules to evaluate.
     *
     * The `rolloutRules` and `percentageRules` attributes are representing the current
     * Targeting and Percentage Rules configuration of the actual Feature Flag or Setting
     * in an **ordered** collection, which means the order of the returned rules is matching to the
     * evaluation order. You can read more about these rules [here](https://configcat.com/docs/advanced/targeting/).
    **/
    SDK.prototype.GetSettingValueBySdkkey = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetSettingValueBySdkkeyRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/settings/{settingKeyOrId}/value", req.pathParams);
        var client = this.securityClient;
        var headers = __assign(__assign({}, GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/hal+json")) {
                        res.settingValueModelHaljson = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (MatchContentType(contentType, "application/json")) {
                        res.settingValueModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetSettingValues - Get values
    /**
     * This endpoint returns the value of a specified Config's Feature Flags or Settings identified by the `configId` parameter
     * in a specified Environment identified by the `environmentId` parameter.
     *
     * The most important attributes in the response are the `value`, `rolloutRules` and `percentageRules`.
     * The `value` represents what the clients will get when the evaluation requests of our SDKs
     * are not matching to any of the defined Targeting or Percentage Rules, or when there are no additional rules to evaluate.
     *
     * The `rolloutRules` and `percentageRules` attributes are representing the current
     * Targeting and Percentage Rules configuration of the actual Feature Flag or Setting
     * in an **ordered** collection, which means the order of the returned rules is matching to the
     * evaluation order. You can read more about these rules [here](https://configcat.com/docs/advanced/targeting/).
    **/
    SDK.prototype.GetSettingValues = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetSettingValuesRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/configs/{configId}/environments/{environmentId}/values", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/hal+json")) {
                        res.configSettingValuesModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (MatchContentType(contentType, "application/json")) {
                        res.configSettingValuesModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetSettings - List Flags
    /**
     * This endpoint returns the list of the Feature Flags and Settings defined in a
     * specified Config, identified by the `configId` parameter.
    **/
    SDK.prototype.GetSettings = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetSettingsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/configs/{configId}/settings", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/hal+json")) {
                        res.settingModelHaljsons = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (MatchContentType(contentType, "application/json")) {
                        res.settingModels = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetSettingsByTag - List Settings by Tag
    /**
     * This endpoint returns the list of the Settings that
     * has the specified Tag, identified by the `tagId` parameter.
    **/
    SDK.prototype.GetSettingsByTag = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetSettingsByTagRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/tags/{tagId}/settings", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/hal+json")) {
                        res.settingModelHaljsons = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (MatchContentType(contentType, "application/json")) {
                        res.settingModels = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetTag - Get Tag
    /**
     * This endpoint returns the metadata of a Tag
     * identified by the `tagId`.
    **/
    SDK.prototype.GetTag = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetTagRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/tags/{tagId}", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/hal+json")) {
                        res.tagModelHaljson = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (MatchContentType(contentType, "application/json")) {
                        res.tagModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetTags - List Tags
    /**
     * This endpoint returns the list of the Tags in a
     * specified Product, identified by the `productId` parameter.
    **/
    SDK.prototype.GetTags = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetTagsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/products/{productId}/tags", req.pathParams);
        var client = this.securityClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/hal+json")) {
                        res.tagModelHaljsons = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (MatchContentType(contentType, "application/json")) {
                        res.tagModels = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // InviteMember - Invite Member
    /**
     * This endpoint invites a Member into the given Product identified by the `productId` parameter.
    **/
    SDK.prototype.InviteMember = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.InviteMemberRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/products/{productId}/members/invite", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .post(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ReplaceSettingValue - Replace value
    /**
     * This endpoint replaces the whole value of a Feature Flag or Setting in a specified Environment.
     *
     * Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.
     *
     * **Important:** As this endpoint is doing a complete replace, it's important to set every other attribute that you don't
     * want to change in its original state. Not listing one means that it will reset.
     *
     * For example: We have the following resource.
     * ```
     * {
     * 	"rolloutPercentageItems": [
     * 		{
     * 			"percentage": 30,
     * 			"value": true
     * 		},
     * 		{
     * 			"percentage": 70,
     * 			"value": false
     * 		}
     * 	],
     * 	"rolloutRules": [],
     * 	"value": false
     * }
     * ```
     * If we send a replace request body as below:
     * ```
     * {
     * 	"value": true
     * }
     * ```
     * Then besides that the default value is set to `true`, all the Percentage Rules are deleted.
     * So we get a response like this:
     * ```
     * {
     * 	"rolloutPercentageItems": [],
     * 	"rolloutRules": [],
     * 	"value": true
     * }
     * ```
    **/
    SDK.prototype.ReplaceSettingValue = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ReplaceSettingValueRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/environments/{environmentId}/settings/{settingId}/value", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .put(url, body, __assign({ headers: headers }, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/hal+json")) {
                        res.settingValueModelHaljson = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (MatchContentType(contentType, "application/json")) {
                        res.settingValueModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ReplaceSettingValueBySdkkey - Replace value
    /**
     * This endpoint replaces the value of a Feature Flag or Setting
     * in a specified Environment identified by the <a target="_blank" rel="noopener noreferrer" href="https://app.configcat.com/sdkkey">SDK key</a> passed in the `X-CONFIGCAT-SDKKEY` header.
     *
     * Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.
     *
     * **Important:** As this endpoint is doing a complete replace, it's important to set every other attribute that you don't
     * want to change to its original state. Not listing one means that it will reset.
     *
     * For example: We have the following resource.
     * ```
     * {
     * 	"rolloutPercentageItems": [
     * 		{
     * 			"percentage": 30,
     * 			"value": true
     * 		},
     * 		{
     * 			"percentage": 70,
     * 			"value": false
     * 		}
     * 	],
     * 	"rolloutRules": [],
     * 	"value": false
     * }
     * ```
     * If we send a replace request body as below:
     * ```
     * {
     * 	"value": true
     * }
     * ```
     * Then besides that the default served value is set to `true`, all the Percentage Rules are deleted.
     * So we get a response like this:
     * ```
     * {
     * 	"rolloutPercentageItems": [],
     * 	"rolloutRules": [],
     * 	"value": true
     * }
     * ```
    **/
    SDK.prototype.ReplaceSettingValueBySdkkey = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ReplaceSettingValueBySdkkeyRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/settings/{settingKeyOrId}/value", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign(__assign({}, GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .put(url, body, __assign({ headers: headers }, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/hal+json")) {
                        res.settingValueModelHaljson = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (MatchContentType(contentType, "application/json")) {
                        res.settingValueModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // UpdateConfig - Update Config
    /**
     * This endpoint updates a Config identified by the `configId` parameter.
    **/
    SDK.prototype.UpdateConfig = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateConfigRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/configs/{configId}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .put(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/hal+json")) {
                        res.configModelHaljson = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (MatchContentType(contentType, "application/json")) {
                        res.configModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // UpdateEnvironment - Update Environment
    /**
     * This endpoint updates an Environment identified by the `environmentId` parameter.
    **/
    SDK.prototype.UpdateEnvironment = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateEnvironmentRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/environments/{environmentId}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .put(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/hal+json")) {
                        res.environmentModelHaljson = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (MatchContentType(contentType, "application/json")) {
                        res.environmentModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // UpdatePermissionGroup - Update Permission Group
    /**
     * This endpoint updates a Permission Group identified by the `permissionGroupId` parameter.
    **/
    SDK.prototype.UpdatePermissionGroup = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdatePermissionGroupRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/permissions/{permissionGroupId}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .put(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/hal+json")) {
                        res.permissionGroupModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (MatchContentType(contentType, "application/json")) {
                        res.permissionGroupModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // UpdateProduct - Update Product
    /**
     * This endpoint updates a Product identified by the `productId` parameter.
    **/
    SDK.prototype.UpdateProduct = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateProductRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/products/{productId}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .put(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/hal+json")) {
                        res.productModelHaljson = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (MatchContentType(contentType, "application/json")) {
                        res.productModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // UpdateSetting - Update Flag
    /**
     * This endpoint updates the metadata of a Feature Flag or Setting
     * with a collection of [JSON Patch](http://jsonpatch.com) operations in a specified Config.
     *
     * Only the `name`, `hint` and `tags` attributes are modifiable by this endpoint.
     * The `tags` attribute is a simple collection of the [tag IDs](#operation/get-tags) attached to the given setting.
     *
     * The advantage of using JSON Patch is that you can describe individual update operations on a resource
     * without touching attributes that you don't want to change.
     *
     * For example: We have the following resource.
     * ```
     * {
     * 	"settingId": 5345,
     * 	"key": "myGrandFeature",
     * 	"name": "Tihs is a naem with soem typos.",
     * 	"hint": "This flag controls my grandioso feature.",
     * 	"settingType": "boolean",
     * 	"tags": [
     * 		{
     * 			"tagId": 0,
     * 			"name": "sample tag",
     * 			"color": "whale"
     * 		}
     * 	]
     * }
     * ```
     * If we send an update request body as below (it changes the name and adds the already existing tag with the id 2):
     * ```
     * [
     * 	{
     * 		"op": "replace",
     * 		"path": "/name",
     * 		"value": "This is the name without typos."
     * 	},
     * 	{
     * 		"op": "add",
     * 		"path": "/tags/-",
     * 		"value": 2
     * 	}
     * ]
     * ```
     * Only the `name` and `tags` are going to be updated and all the other attributes are remaining unchanged.
     * So we get a response like this:
     * ```
     * {
     * 	"settingId": 5345,
     * 	"key": "myGrandFeature",
     * 	"name": "This is the name without typos.",
     * 	"hint": "This flag controls my grandioso feature.",
     * 	"settingType": "boolean",
     * 	"tags": [
     * 		{
     * 			"tagId": 0,
     * 			"name": "sample tag",
     * 			"color": "whale"
     * 		},
     * 		{
     * 			"tagId": 2,
     * 			"name": "another tag",
     * 			"color": "koala"
     * 		}
     * 	]
     * }
     * ```
    **/
    SDK.prototype.UpdateSetting = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateSettingRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/settings/{settingId}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .patch(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/hal+json")) {
                        res.settingModelHaljson = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (MatchContentType(contentType, "application/json")) {
                        res.settingModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // UpdateSettingValue - Update value
    /**
     * This endpoint updates the value of a Feature Flag or Setting
     * with a collection of [JSON Patch](http://jsonpatch.com) operations in a specified Environment.
     *
     * Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.
     *
     * The advantage of using JSON Patch is that you can describe individual update operations on a resource
     * without touching attributes that you don't want to change. It supports collection reordering, so it also
     * can be used for reordering the targeting rules of a Feature Flag or Setting.
     *
     * For example: We have the following resource.
     * ```
     * {
     * 	"rolloutPercentageItems": [
     * 		{
     * 			"percentage": 30,
     * 			"value": true
     * 		},
     * 		{
     * 			"percentage": 70,
     * 			"value": false
     * 		}
     * 	],
     * 	"rolloutRules": [],
     * 	"value": false
     * }
     * ```
     * If we send an update request body as below:
     * ```
     * [
     * 	{
     * 		"op": "replace",
     * 		"path": "/value",
     * 		"value": true
     * 	}
     * ]
     * ```
     * Only the default value is going to be set to `true` and all the Percentage Rules are remaining unchanged.
     * So we get a response like this:
     * ```
     * {
     * 	"rolloutPercentageItems": [
     * 		{
     * 			"percentage": 30,
     * 			"value": true
     * 		},
     * 		{
     * 			"percentage": 70,
     * 			"value": false
     * 		}
     * 	],
     * 	"rolloutRules": [],
     * 	"value": true
     * }
     * ```
    **/
    SDK.prototype.UpdateSettingValue = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateSettingValueRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/environments/{environmentId}/settings/{settingId}/value", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .patch(url, body, __assign({ headers: headers }, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/hal+json")) {
                        res.settingValueModelHaljson = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (MatchContentType(contentType, "application/json")) {
                        res.settingValueModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 204:
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // UpdateSettingValueBySdkkey - Update value
    /**
     * This endpoint updates the value of a Feature Flag or Setting
     * with a collection of [JSON Patch](http://jsonpatch.com) operations in a specified Environment
     * identified by the <a target="_blank" rel="noopener noreferrer" href="https://app.configcat.com/sdkkey">SDK key</a> passed in the `X-CONFIGCAT-SDKKEY` header.
     *
     * Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.
     *
     * The advantage of using JSON Patch is that you can describe individual update operations on a resource
     * without touching attributes that you don't want to change. It supports collection reordering, so it also
     * can be used for reordering the targeting rules of a Feature Flag or Setting.
     *
     * For example: We have the following resource.
     * ```
     * {
     * 	"rolloutPercentageItems": [
     * 		{
     * 			"percentage": 30,
     * 			"value": true
     * 		},
     * 		{
     * 			"percentage": 70,
     * 			"value": false
     * 		}
     * 	],
     * 	"rolloutRules": [],
     * 	"value": false
     * }
     * ```
     * If we send an update request body as below:
     * ```
     * [
     * 	{
     * 		"op": "replace",
     * 		"path": "/value",
     * 		"value": true
     * 	}
     * ]
     * ```
     * Only the default served value is going to be set to `true` and all the Percentage Rules are remaining unchanged.
     * So we get a response like this:
     * ```
     * {
     * 	"rolloutPercentageItems": [
     * 		{
     * 			"percentage": 30,
     * 			"value": true
     * 		},
     * 		{
     * 			"percentage": 70,
     * 			"value": false
     * 		}
     * 	],
     * 	"rolloutRules": [],
     * 	"value": true
     * }
     * ```
    **/
    SDK.prototype.UpdateSettingValueBySdkkey = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateSettingValueBySdkkeyRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/settings/{settingKeyOrId}/value", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign(__assign({}, GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .patch(url, body, __assign({ headers: headers }, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/hal+json")) {
                        res.settingValueModelHaljson = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (MatchContentType(contentType, "application/json")) {
                        res.settingValueModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 204:
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // UpdateTag - Update Tag
    /**
     * This endpoint updates a Tag identified by the `tagId` parameter.
    **/
    SDK.prototype.UpdateTag = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateTagRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v1/tags/{tagId}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .put(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/hal+json")) {
                        res.tagModelHaljson = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (MatchContentType(contentType, "application/json")) {
                        res.tagModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
                case 429:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return SDK;
}());
export { SDK };

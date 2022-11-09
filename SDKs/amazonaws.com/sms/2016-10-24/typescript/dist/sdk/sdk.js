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
    "http://sms.{region}.amazonaws.com",
    "https://sms.{region}.amazonaws.com",
    "http://sms.{region}.amazonaws.com.cn",
    "https://sms.{region}.amazonaws.com.cn",
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
// SDK Documentation: https://docs.aws.amazon.com/sms/ - Amazon Web Services documentation
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
    // CreateApp - Creates an application. An application consists of one or more server groups. Each server group contain one or more servers.
    SDK.prototype.CreateApp = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateAppRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.CreateApp";
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
                    if (MatchContentType(contentType, "application/json")) {
                        res.createAppResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.unauthorizedOperationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.invalidParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.missingRequiredParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.operationNotPermittedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // CreateReplicationJob - Creates a replication job. The replication job schedules periodic replication runs to replicate your server to AWS. Each replication run creates an Amazon Machine Image (AMI).
    SDK.prototype.CreateReplicationJob = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateReplicationJobRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.CreateReplicationJob";
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
                    if (MatchContentType(contentType, "application/json")) {
                        res.createReplicationJobResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.invalidParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.missingRequiredParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.unauthorizedOperationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.operationNotPermittedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.serverCannotBeReplicatedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 485:
                    if (MatchContentType(contentType, "application/json")) {
                        res.replicationJobAlreadyExistsException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 486:
                    if (MatchContentType(contentType, "application/json")) {
                        res.noConnectorsAvailableException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 487:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 488:
                    if (MatchContentType(contentType, "application/json")) {
                        res.temporarilyUnavailableException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // DeleteApp - Deletes the specified application. Optionally deletes the launched stack associated with the application and all AWS SMS replication jobs for servers in the application.
    SDK.prototype.DeleteApp = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteAppRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteApp";
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
                    if (MatchContentType(contentType, "application/json")) {
                        res.deleteAppResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.unauthorizedOperationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.invalidParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.missingRequiredParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.operationNotPermittedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // DeleteAppLaunchConfiguration - Deletes the launch configuration for the specified application.
    SDK.prototype.DeleteAppLaunchConfiguration = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteAppLaunchConfigurationRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppLaunchConfiguration";
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
                    if (MatchContentType(contentType, "application/json")) {
                        res.deleteAppLaunchConfigurationResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.unauthorizedOperationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.invalidParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.missingRequiredParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.operationNotPermittedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // DeleteAppReplicationConfiguration - Deletes the replication configuration for the specified application.
    SDK.prototype.DeleteAppReplicationConfiguration = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteAppReplicationConfigurationRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppReplicationConfiguration";
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
                    if (MatchContentType(contentType, "application/json")) {
                        res.deleteAppReplicationConfigurationResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.unauthorizedOperationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.invalidParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.missingRequiredParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.operationNotPermittedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // DeleteAppValidationConfiguration - Deletes the validation configuration for the specified application.
    SDK.prototype.DeleteAppValidationConfiguration = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteAppValidationConfigurationRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppValidationConfiguration";
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
                    if (MatchContentType(contentType, "application/json")) {
                        res.deleteAppValidationConfigurationResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.unauthorizedOperationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.invalidParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.missingRequiredParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.operationNotPermittedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // DeleteReplicationJob - <p>Deletes the specified replication job.</p> <p>After you delete a replication job, there are no further replication runs. AWS deletes the contents of the Amazon S3 bucket used to store AWS SMS artifacts. The AMIs created by the replication runs are not deleted.</p>
    SDK.prototype.DeleteReplicationJob = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteReplicationJobRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteReplicationJob";
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
                    if (MatchContentType(contentType, "application/json")) {
                        res.deleteReplicationJobResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.invalidParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.missingRequiredParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.unauthorizedOperationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.operationNotPermittedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.replicationJobNotFoundException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // DeleteServerCatalog - Deletes all servers from your server catalog.
    SDK.prototype.DeleteServerCatalog = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteServerCatalogRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteServerCatalog";
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
                    if (MatchContentType(contentType, "application/json")) {
                        res.deleteServerCatalogResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.unauthorizedOperationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.operationNotPermittedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.invalidParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.missingRequiredParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // DisassociateConnector - <p>Disassociates the specified connector from AWS SMS.</p> <p>After you disassociate a connector, it is no longer available to support replication jobs.</p>
    SDK.prototype.DisassociateConnector = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DisassociateConnectorRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DisassociateConnector";
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
                    if (MatchContentType(contentType, "application/json")) {
                        res.disassociateConnectorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.missingRequiredParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.unauthorizedOperationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.operationNotPermittedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.invalidParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GenerateChangeSet - Generates a target change set for a currently launched stack and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.
    SDK.prototype.GenerateChangeSet = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GenerateChangeSetRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GenerateChangeSet";
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
                    if (MatchContentType(contentType, "application/json")) {
                        res.generateChangeSetResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.unauthorizedOperationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.invalidParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.missingRequiredParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.operationNotPermittedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GenerateTemplate - Generates an AWS CloudFormation template based on the current launch configuration and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.
    SDK.prototype.GenerateTemplate = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GenerateTemplateRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GenerateTemplate";
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
                    if (MatchContentType(contentType, "application/json")) {
                        res.generateTemplateResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.unauthorizedOperationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.invalidParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.missingRequiredParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.operationNotPermittedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetApp - Retrieve information about the specified application.
    SDK.prototype.GetApp = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetAppRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetApp";
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
                    if (MatchContentType(contentType, "application/json")) {
                        res.getAppResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.unauthorizedOperationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.invalidParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.missingRequiredParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.operationNotPermittedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetAppLaunchConfiguration - Retrieves the application launch configuration associated with the specified application.
    SDK.prototype.GetAppLaunchConfiguration = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetAppLaunchConfigurationRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppLaunchConfiguration";
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
                    if (MatchContentType(contentType, "application/json")) {
                        res.getAppLaunchConfigurationResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.unauthorizedOperationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.invalidParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.missingRequiredParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.operationNotPermittedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetAppReplicationConfiguration - Retrieves the application replication configuration associated with the specified application.
    SDK.prototype.GetAppReplicationConfiguration = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetAppReplicationConfigurationRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppReplicationConfiguration";
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
                    if (MatchContentType(contentType, "application/json")) {
                        res.getAppReplicationConfigurationResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.unauthorizedOperationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.invalidParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.missingRequiredParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.operationNotPermittedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetAppValidationConfiguration - Retrieves information about a configuration for validating an application.
    SDK.prototype.GetAppValidationConfiguration = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetAppValidationConfigurationRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppValidationConfiguration";
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
                    if (MatchContentType(contentType, "application/json")) {
                        res.getAppValidationConfigurationResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.unauthorizedOperationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.invalidParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.missingRequiredParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.operationNotPermittedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetAppValidationOutput - Retrieves output from validating an application.
    SDK.prototype.GetAppValidationOutput = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetAppValidationOutputRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppValidationOutput";
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
                    if (MatchContentType(contentType, "application/json")) {
                        res.getAppValidationOutputResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.unauthorizedOperationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.invalidParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.missingRequiredParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.operationNotPermittedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetConnectors - Describes the connectors registered with the AWS SMS.
    SDK.prototype.GetConnectors = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConnectorsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetConnectors";
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
            .post(url, body, __assign({ headers: headers }, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getConnectorsResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.unauthorizedOperationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetReplicationJobs - Describes the specified replication job or all of your replication jobs.
    SDK.prototype.GetReplicationJobs = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetReplicationJobsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetReplicationJobs";
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
            .post(url, body, __assign({ headers: headers }, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getReplicationJobsResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.invalidParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.missingRequiredParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.unauthorizedOperationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetReplicationRuns - Describes the replication runs for the specified replication job.
    SDK.prototype.GetReplicationRuns = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetReplicationRunsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetReplicationRuns";
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
            .post(url, body, __assign({ headers: headers }, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getReplicationRunsResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.invalidParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.missingRequiredParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.unauthorizedOperationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetServers - <p>Describes the servers in your server catalog.</p> <p>Before you can describe your servers, you must import them using <a>ImportServerCatalog</a>.</p>
    SDK.prototype.GetServers = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetServersRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetServers";
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
            .post(url, body, __assign({ headers: headers }, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getServersResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.unauthorizedOperationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.invalidParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.missingRequiredParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ImportAppCatalog - Allows application import from AWS Migration Hub.
    SDK.prototype.ImportAppCatalog = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ImportAppCatalogRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ImportAppCatalog";
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
                    if (MatchContentType(contentType, "application/json")) {
                        res.importAppCatalogResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.unauthorizedOperationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.invalidParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.missingRequiredParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.operationNotPermittedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ImportServerCatalog - <p>Gathers a complete list of on-premises servers. Connectors must be installed and monitoring all servers to import.</p> <p>This call returns immediately, but might take additional time to retrieve all the servers.</p>
    SDK.prototype.ImportServerCatalog = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ImportServerCatalogRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ImportServerCatalog";
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
                    if (MatchContentType(contentType, "application/json")) {
                        res.importServerCatalogResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.unauthorizedOperationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.operationNotPermittedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.invalidParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.missingRequiredParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.noConnectorsAvailableException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // LaunchApp - Launches the specified application as a stack in AWS CloudFormation.
    SDK.prototype.LaunchApp = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.LaunchAppRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.LaunchApp";
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
                    if (MatchContentType(contentType, "application/json")) {
                        res.launchAppResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.unauthorizedOperationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.invalidParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.missingRequiredParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.operationNotPermittedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ListApps - Retrieves summaries for all applications.
    SDK.prototype.ListApps = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListAppsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ListApps";
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
                    if (MatchContentType(contentType, "application/json")) {
                        res.listAppsResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.unauthorizedOperationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.invalidParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.missingRequiredParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.operationNotPermittedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // NotifyAppValidationOutput - Provides information to AWS SMS about whether application validation is successful.
    SDK.prototype.NotifyAppValidationOutput = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.NotifyAppValidationOutputRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.NotifyAppValidationOutput";
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
                    if (MatchContentType(contentType, "application/json")) {
                        res.notifyAppValidationOutputResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.unauthorizedOperationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.invalidParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.missingRequiredParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.operationNotPermittedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // PutAppLaunchConfiguration - Creates or updates the launch configuration for the specified application.
    SDK.prototype.PutAppLaunchConfiguration = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutAppLaunchConfigurationRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppLaunchConfiguration";
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
                    if (MatchContentType(contentType, "application/json")) {
                        res.putAppLaunchConfigurationResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.unauthorizedOperationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.invalidParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.missingRequiredParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.operationNotPermittedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // PutAppReplicationConfiguration - Creates or updates the replication configuration for the specified application.
    SDK.prototype.PutAppReplicationConfiguration = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutAppReplicationConfigurationRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppReplicationConfiguration";
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
                    if (MatchContentType(contentType, "application/json")) {
                        res.putAppReplicationConfigurationResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.unauthorizedOperationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.invalidParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.missingRequiredParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.operationNotPermittedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // PutAppValidationConfiguration - Creates or updates a validation configuration for the specified application.
    SDK.prototype.PutAppValidationConfiguration = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutAppValidationConfigurationRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppValidationConfiguration";
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
                    if (MatchContentType(contentType, "application/json")) {
                        res.putAppValidationConfigurationResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.unauthorizedOperationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.invalidParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.missingRequiredParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.operationNotPermittedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // StartAppReplication - Starts replicating the specified application by creating replication jobs for each server in the application.
    SDK.prototype.StartAppReplication = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.StartAppReplicationRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartAppReplication";
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
                    if (MatchContentType(contentType, "application/json")) {
                        res.startAppReplicationResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.unauthorizedOperationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.invalidParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.missingRequiredParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.operationNotPermittedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // StartOnDemandAppReplication - Starts an on-demand replication run for the specified application.
    SDK.prototype.StartOnDemandAppReplication = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.StartOnDemandAppReplicationRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartOnDemandAppReplication";
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
                    if (MatchContentType(contentType, "application/json")) {
                        res.startOnDemandAppReplicationResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.unauthorizedOperationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.invalidParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.missingRequiredParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.operationNotPermittedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // StartOnDemandReplicationRun - <p>Starts an on-demand replication run for the specified replication job. This replication run starts immediately. This replication run is in addition to the ones already scheduled.</p> <p>There is a limit on the number of on-demand replications runs that you can request in a 24-hour period.</p>
    SDK.prototype.StartOnDemandReplicationRun = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.StartOnDemandReplicationRunRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartOnDemandReplicationRun";
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
                    if (MatchContentType(contentType, "application/json")) {
                        res.startOnDemandReplicationRunResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.invalidParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.missingRequiredParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.unauthorizedOperationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.operationNotPermittedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.replicationRunLimitExceededException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 485:
                    if (MatchContentType(contentType, "application/json")) {
                        res.dryRunOperationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // StopAppReplication - Stops replicating the specified application by deleting the replication job for each server in the application.
    SDK.prototype.StopAppReplication = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.StopAppReplicationRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StopAppReplication";
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
                    if (MatchContentType(contentType, "application/json")) {
                        res.stopAppReplicationResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.unauthorizedOperationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.invalidParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.missingRequiredParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.operationNotPermittedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // TerminateApp - Terminates the stack for the specified application.
    SDK.prototype.TerminateApp = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.TerminateAppRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.TerminateApp";
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
                    if (MatchContentType(contentType, "application/json")) {
                        res.terminateAppResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.unauthorizedOperationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.invalidParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.missingRequiredParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.operationNotPermittedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // UpdateApp - Updates the specified application.
    SDK.prototype.UpdateApp = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateAppRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.UpdateApp";
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
                    if (MatchContentType(contentType, "application/json")) {
                        res.updateAppResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.unauthorizedOperationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.invalidParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.missingRequiredParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.operationNotPermittedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // UpdateReplicationJob - Updates the specified settings for the specified replication job.
    SDK.prototype.UpdateReplicationJob = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateReplicationJobRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.UpdateReplicationJob";
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
                    if (MatchContentType(contentType, "application/json")) {
                        res.updateReplicationJobResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.invalidParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.missingRequiredParameterException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.operationNotPermittedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.unauthorizedOperationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.serverCannotBeReplicatedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 485:
                    if (MatchContentType(contentType, "application/json")) {
                        res.replicationJobNotFoundException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 486:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 487:
                    if (MatchContentType(contentType, "application/json")) {
                        res.temporarilyUnavailableException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return SDK;
}());
export { SDK };

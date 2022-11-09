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
    "http://lookoutequipment.{region}.amazonaws.com",
    "https://lookoutequipment.{region}.amazonaws.com",
    "http://lookoutequipment.{region}.amazonaws.com.cn",
    "https://lookoutequipment.{region}.amazonaws.com.cn",
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
// SDK Documentation: https://docs.aws.amazon.com/lookoutequipment/ - Amazon Web Services documentation
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
    // CreateDataset - Creates a container for a collection of data being ingested for analysis. The dataset contains the metadata describing where the data is and what the data actually looks like. In other words, it contains the location of the data source, the data schema, and other information. A dataset also contains any tags associated with the ingested data. 
    SDK.prototype.CreateDataset = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateDatasetRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateDataset";
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
                        res.createDatasetResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.validationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.conflictException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.throttlingException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.serviceQuotaExceededException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessDeniedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 485:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalServerException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // CreateInferenceScheduler -  Creates a scheduled inference. Scheduling an inference is setting up a continuous real-time inference plan to analyze new measurement data. When setting up the schedule, you provide an S3 bucket location for the input data, assign it a delimiter between separate entries in the data, set an offset delay if desired, and set the frequency of inferencing. You must also provide an S3 bucket location for the output data. 
    SDK.prototype.CreateInferenceScheduler = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateInferenceSchedulerRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateInferenceScheduler";
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
                        res.createInferenceSchedulerResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.conflictException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.resourceNotFoundException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.validationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.serviceQuotaExceededException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.throttlingException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 485:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessDeniedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 486:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalServerException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // CreateModel - <p>Creates an ML model for data inference. </p> <p>A machine-learning (ML) model is a mathematical model that finds patterns in your data. In Amazon Lookout for Equipment, the model learns the patterns of normal behavior and detects abnormal behavior that could be potential equipment failure (or maintenance events). The models are made by analyzing normal data and abnormalities in machine behavior that have already occurred.</p> <p>Your model is trained using a portion of the data from your dataset and uses that data to learn patterns of normal behavior and abnormal patterns that lead to equipment failure. Another portion of the data is used to evaluate the model's accuracy. </p>
    SDK.prototype.CreateModel = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateModelRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateModel";
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
                        res.createModelResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.validationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.conflictException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.throttlingException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.serviceQuotaExceededException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalServerException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 485:
                    if (MatchContentType(contentType, "application/json")) {
                        res.resourceNotFoundException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 486:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessDeniedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // DeleteDataset -  Deletes a dataset and associated artifacts. The operation will check to see if any inference scheduler or data ingestion job is currently using the dataset, and if there isn't, the dataset, its metadata, and any associated data stored in S3 will be deleted. This does not affect any models that used this dataset for training and evaluation, but does prevent it from being used in the future. 
    SDK.prototype.DeleteDataset = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteDatasetRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteDataset";
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
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.resourceNotFoundException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.throttlingException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalServerException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessDeniedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.conflictException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // DeleteInferenceScheduler - Deletes an inference scheduler that has been set up. Already processed output results are not affected. 
    SDK.prototype.DeleteInferenceScheduler = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteInferenceSchedulerRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteInferenceScheduler";
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
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.validationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.resourceNotFoundException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.conflictException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.throttlingException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessDeniedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 485:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalServerException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // DeleteModel - Deletes an ML model currently available for Amazon Lookout for Equipment. This will prevent it from being used with an inference scheduler, even one that is already set up. 
    SDK.prototype.DeleteModel = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteModelRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteModel";
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
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.resourceNotFoundException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.throttlingException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalServerException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.conflictException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessDeniedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // DescribeDataIngestionJob - Provides information on a specific data ingestion job such as creation time, dataset ARN, status, and so on. 
    SDK.prototype.DescribeDataIngestionJob = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DescribeDataIngestionJobRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeDataIngestionJob";
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
                        res.describeDataIngestionJobResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.validationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.resourceNotFoundException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.throttlingException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessDeniedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalServerException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // DescribeDataset - Provides a JSON description of the data that is in each time series dataset, including names, column names, and data types.
    SDK.prototype.DescribeDataset = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DescribeDatasetRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeDataset";
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
                        res.describeDatasetResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.validationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.resourceNotFoundException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.throttlingException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessDeniedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalServerException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // DescribeInferenceScheduler -  Specifies information about the inference scheduler being used, including name, model, status, and associated metadata 
    SDK.prototype.DescribeInferenceScheduler = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DescribeInferenceSchedulerRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeInferenceScheduler";
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
                        res.describeInferenceSchedulerResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.validationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.resourceNotFoundException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.throttlingException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessDeniedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalServerException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // DescribeModel - Provides a JSON containing the overall information about a specific ML model, including model name and ARN, dataset, training and evaluation information, status, and so on. 
    SDK.prototype.DescribeModel = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DescribeModelRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeModel";
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
                        res.describeModelResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.validationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.resourceNotFoundException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.throttlingException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessDeniedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalServerException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ListDataIngestionJobs - Provides a list of all data ingestion jobs, including dataset name and ARN, S3 location of the input data, status, and so on. 
    SDK.prototype.ListDataIngestionJobs = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListDataIngestionJobsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListDataIngestionJobs";
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
                        res.listDataIngestionJobsResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.validationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.throttlingException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessDeniedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalServerException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ListDatasets - Lists all datasets currently available in your account, filtering on the dataset name. 
    SDK.prototype.ListDatasets = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListDatasetsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListDatasets";
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
                        res.listDatasetsResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.validationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.throttlingException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessDeniedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalServerException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ListInferenceExecutions -  Lists all inference executions that have been performed by the specified inference scheduler. 
    SDK.prototype.ListInferenceExecutions = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListInferenceExecutionsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceExecutions";
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
                        res.listInferenceExecutionsResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.validationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.throttlingException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.resourceNotFoundException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessDeniedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalServerException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ListInferenceSchedulers - Retrieves a list of all inference schedulers currently available for your account. 
    SDK.prototype.ListInferenceSchedulers = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListInferenceSchedulersRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceSchedulers";
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
                        res.listInferenceSchedulersResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.validationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.throttlingException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessDeniedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalServerException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ListModels - Generates a list of all models in the account, including model name and ARN, dataset, and status. 
    SDK.prototype.ListModels = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListModelsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListModels";
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
                        res.listModelsResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.validationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.throttlingException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessDeniedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalServerException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ListTagsForResource - Lists all the tags for a specified resource, including key and value. 
    SDK.prototype.ListTagsForResource = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListTagsForResourceRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListTagsForResource";
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
                        res.listTagsForResourceResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.validationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.resourceNotFoundException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.throttlingException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessDeniedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalServerException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // StartDataIngestionJob - Starts a data ingestion job. Amazon Lookout for Equipment returns the job status. 
    SDK.prototype.StartDataIngestionJob = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.StartDataIngestionJobRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSLookoutEquipmentFrontendService.StartDataIngestionJob";
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
                        res.startDataIngestionJobResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.validationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.resourceNotFoundException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.conflictException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.throttlingException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.serviceQuotaExceededException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 485:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessDeniedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 486:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalServerException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // StartInferenceScheduler - Starts an inference scheduler. 
    SDK.prototype.StartInferenceScheduler = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.StartInferenceSchedulerRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSLookoutEquipmentFrontendService.StartInferenceScheduler";
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
                        res.startInferenceSchedulerResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.validationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.conflictException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.resourceNotFoundException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.throttlingException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessDeniedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 485:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalServerException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // StopInferenceScheduler - Stops an inference scheduler. 
    SDK.prototype.StopInferenceScheduler = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.StopInferenceSchedulerRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSLookoutEquipmentFrontendService.StopInferenceScheduler";
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
                        res.stopInferenceSchedulerResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.validationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.conflictException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.resourceNotFoundException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.throttlingException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessDeniedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 485:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalServerException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // TagResource - Associates a given tag to a resource in your account. A tag is a key-value pair which can be added to an Amazon Lookout for Equipment resource as metadata. Tags can be used for organizing your resources as well as helping you to search and filter by tag. Multiple tags can be added to a resource, either when you create it, or later. Up to 50 tags can be associated with each resource. 
    SDK.prototype.TagResource = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.TagResourceRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSLookoutEquipmentFrontendService.TagResource";
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
                        res.tagResourceResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.validationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.resourceNotFoundException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.serviceQuotaExceededException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.throttlingException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessDeniedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 485:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalServerException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // UntagResource - Removes a specific tag from a given resource. The tag is specified by its key. 
    SDK.prototype.UntagResource = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UntagResourceRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSLookoutEquipmentFrontendService.UntagResource";
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
                        res.untagResourceResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.validationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.resourceNotFoundException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.throttlingException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessDeniedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalServerException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // UpdateInferenceScheduler - Updates an inference scheduler. 
    SDK.prototype.UpdateInferenceScheduler = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateInferenceSchedulerRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSLookoutEquipmentFrontendService.UpdateInferenceScheduler";
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
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.conflictException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.resourceNotFoundException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.validationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.throttlingException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessDeniedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 485:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalServerException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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

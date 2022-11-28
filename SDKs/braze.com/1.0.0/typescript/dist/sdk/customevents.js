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
import * as operations from "./models/operations";
import * as utils from "../internal/utils";
var CustomEvents = /** @class */ (function () {
    function CustomEvents(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * customEventsAnalytics - Custom Events Analytics
     *
     * This endpoint allows you to retrieve a series of the number of occurrences of a custom event in your app over a designated time period.
     *
     * ### Components Used
     * -[Segment Identifier](https://www.braze.com/docs/api/identifier_types/)
     *
     *
     * ## Response
     *
     * ```json
     * Content-Type: application/json
     * Authorization: Bearer YOUR-REST-API-KEY
     * {
     *     "message": (required, string) the status of the export, returns 'success' when completed without errors,
     *     "data" : [
     *         {
     *             "time" : (string) point in time - as ISO 8601 extended when unit is "hour" and as ISO 8601 date when unit is "day",
     *             "count" : (int)
     *         },
     *         ...
     *     ]
     * }
     * ```
     *
     * ### Fatal Error Response Codes
     * The following status codes and associated error messages will be returned if your request encounters a fatal error. Any of these error codes indicate that no data will be processed.
     *
     * | Error Code       | Reason / Cause                                                   |
     * | ---------------- | ---------------------------------------------------------------- |
     * | 400 Bad Request  | Bad Syntax                                                       |
     * | 401 Unauthorized | Unknown or missing REST API Key                                  |
     * | 429 Rate Limited | Over rate limit                                                  |
     * | 5XX              | Internal server error, you should retry with exponential backoff |
    **/
    CustomEvents.prototype.customEventsAnalytics = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CustomEventsAnalyticsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/events/data_series";
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
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * customEventsList - Custom Events List
     *
     * This endpoint allows you to export a list of custom events that have been recorded for your app. The event names are returned in groups of 250, sorted alphabetically.
     *
     *
     * ## Response
     *
     * ```json
     * Content-Type: application/json
     * Authorization: Bearer YOUR-REST-API-KEY
     * {
     *     "message": (required, string) the status of the export, returns 'success' when completed without errors,
     *     "events" : [
     *         "Event A",
     *         "Event B",
     *         "Event C",
     *         ...
     *     ]
     * }
     * ```
     *
     * ### Fatal Error Response Codes
     *
     * The following status codes and associated error messages will be returned if your request encounters a fatal error. Any of these error codes indicate that no data will be processed.
     *
     * | Error Code       | Reason / Cause                                                   |
     * | ---------------- | ---------------------------------------------------------------- |
     * | 400 Bad Request  | Bad Syntax                                                       |
     * | 401 Unauthorized | Unknown or missing REST API Key                                  |
     * | 429 Rate Limited | Over rate limit                                                  |
     * | 5XX              | Internal server error, you should retry with exponential backoff |
    **/
    CustomEvents.prototype.customEventsList = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CustomEventsListRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/events/list";
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
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return CustomEvents;
}());
export { CustomEvents };

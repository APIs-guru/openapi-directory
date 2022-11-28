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
var Segment = /** @class */ (function () {
    function Segment(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * segmentAnalytics - Segment Analytics
     *
     * This endpoint allows you to retrieve a daily series of the size of a segment over time for a segment.
     *
     * ### Request Components
     * - [Segment Identifier](https://www.braze.com/docs/api/identifier_types/)
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
     *             "time" : (string) date as ISO 8601 date,
     *             "size" : (int) size of the segment on that date
     *         },
     *         ...
     *     ]
     * }
     * ```
    **/
    Segment.prototype.segmentAnalytics = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.SegmentAnalyticsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/segments/data_series";
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
     * segmentDetails - Segment Details
     *
     * This endpoint allows you to retrieve relevant information on the segment, which can be identified by the `segment_id`.
     *
     * ### Request Components
     * - [Segment Identifier](https://www.braze.com/docs/api/identifier_types/)
     *
     * ## Response
     *
     * ```json
     * Content-Type: application/json
     * Authorization: Bearer YOUR-REST-API-KEY
     * {
     *       "message": (required, string) the status of the export, returns 'success' when completed without errors,
     *       "created_at" : (string) date created as ISO 8601 date,
     *       "updated_at" : (string) date last updated as ISO 8601 date,
     *       "name" : (string) segment name,
     *       "description" : (string) human-readable description of filters,
     *       "text_description" : (string) segment description,
     *       "tags" : (array) tag names associated with the segment
     * }
     * ```
    **/
    Segment.prototype.segmentDetails = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.SegmentDetailsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/segments/details";
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
     * segmentList - Segment List
     *
     * This endpoint allows you to export a list of segments, each of which will include its name, Segment API Identifier, and whether it has analytics tracking enabled. The segments are returned in groups of 100 sorted by time of creation (oldest to newest by default). Archived segments are not included.
     *
     * ### Request Components
     * - [Segment Identifier](https://www.braze.com/docs/api/identifier_types/)
     *
     *
     * ## Response
     *
     * ```json
     * Content-Type: application/json
     * Authorization: Bearer YOUR-REST-API-KEY
     * {
     *     "message": (required, string) the status of the export, returns 'success' when completed without errors,
     *     "segments" : [
     *         {
     *             "id" : (string) Segment API Identifier,
     *             "name" : (string) segment name,
     *             "analytics_tracking_enabled" : (boolean) whether the segment has analytics tracking enabled,
     *             "tags" : (array) tag names associated with the segment
     *         },
     *         ...
     *     ]
     * }
     * ```
    **/
    Segment.prototype.segmentList = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.SegmentListRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/segments/list";
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
    return Segment;
}());
export { Segment };

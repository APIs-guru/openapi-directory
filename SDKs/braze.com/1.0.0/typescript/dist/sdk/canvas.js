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
var Canvas = /** @class */ (function () {
    function Canvas(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * canvasDataAnalyticsSummary - Canvas Data Analytics Summary
     *
     * This endpoint allows you to export rollups of time series data for a Canvas, providing a concise summary of a Canvas' results.
     *
     * ### Components Used
     * - [Canvas Identifier](https://www.braze.com/docs/api/identifier_types/)
     *
     * ## Response
     *
     * ```json
     * Content-Type: application/json
     * Authorization: Bearer YOUR-REST-API-KEY
     * {
     *   "data": {
     *     "name": (string) Canvas name,
     *     "total_stats": {
     *       "revenue": (float),
     *       "conversions": (int),
     *       "conversions_by_entry_time": (int),
     *       "entries": (int)
     *     },
     *     "variant_stats": (optional) {
     *       "00000000-0000-0000-0000-0000000000000": (API identifier for variant) {
     *         "name": (string) name of variant,
     *         "revenue": (float),
     *         "conversions": (int),
     *         "entries": (int)
     *       },
     *       ... (more variants)
     *     },
     *     "step_stats": (optional) {
     *       "00000000-0000-0000-0000-0000000000000": (API identifier for step) {
     *         "name": (string) name of step,
     *         "revenue": (float),
     *         "conversions": (int),
     *         "conversions_by_entry_time": (int),
     *         "messages": {
     *           "android_push": (name of channel) [
     *             {
     *               "sent": (int),
     *               "opens": (int),
     *               "influenced_opens": (int),
     *               "bounces": (int)
     *               ... (more stats for channel)
     *             }
     *           ],
     *           ... (more channels)
     *         }
     *       },
     *       ... (more steps)
     *     }
     *   },
     *   "message": (required, string) the status of the export, returns 'success' when completed without errors
     * }
     * ```
    **/
    Canvas.prototype.canvasDataAnalyticsSummary = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CanvasDataAnalyticsSummaryRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/canvas/data_summary";
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
     * canvasDataSeriesAnalytics - Canvas Data Series Analytics
     *
     * This endpoint allows you to export time series data for a Canvas.
     *
     * ### Components Used
     * - [Canvas Identifier](https://www.braze.com/docs/api/identifier_types/)
     *
     * ## Response
     * ```json
     * Content-Type: application/json
     * Authorization: Bearer YOUR-REST-API-KEY
     * {
     *   "data": {
     *     "name": (string) Canvas name,
     *     "stats": [
     *       {
     *         "time": (string) date as ISO 8601 date,
     *         "total_stats": {
     *           "revenue": (float),
     *           "conversions": (int),
     *           "conversions_by_entry_time": (int),
     *           "entries": (int)
     *         },
     *         "variant_stats": (optional) {
     *           "00000000-0000-0000-0000-0000000000000": (API identifier for variant) {
     *             "name": (string) name of variant,
     *             "revenue": (int),
     *             "conversions": (int),
     *             "conversions_by_entry_time": (int),
     *             "entries": (int)
     *           },
     *           ... (more variants)
     *         },
     *         "step_stats": (optional) {
     *           "00000000-0000-0000-0000-0000000000000": (API identifier for step) {
     *             "name": (string) name of step,
     *             "revenue": (float),
     *             "conversions": (int),
     *             "conversions_by_entry_time": (int),
     *             "messages": {
     *               "email": [
     *                 {
     *                   "sent": (int),
     *                   "opens": (int),
     *                   "unique_opens": (int),
     *                   "clicks": (int),
     *                   ... (more stats)
     *                 }
     *               ],
     *               ... (more channels)
     *             }
     *           },
     *           ... (more steps)
     *         }
     *       },
     *       ... (more stats by time)
     *     ]
     *   },
     *   "message": (required, string) the status of the export, returns 'success' when completed without errors
     * }
     * ```
    **/
    Canvas.prototype.canvasDataSeriesAnalytics = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CanvasDataSeriesAnalyticsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/canvas/data_series";
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
     * canvasDetails - Canvas Details
     *
     * This endpoint allows you to export metadata about a Canvas, such as its name, when it was created, its current status, and more.
     *
     * ### Components Used
     * - [Canvas Identifier](https://www.braze.com/docs/api/identifier_types/)
     *
     * ## Response
     *
     * ```json
     * Content-Type: application/json
     * Authorization: Bearer YOUR-REST-API-KEY
     * {
     *   "created_at": (string) date created as ISO 8601 date,
     *   "updated_at": (string) date updated as ISO 8601 date,
     *   "name": (string) Canvas name,
     *   "description": (string) Canvas description,
     *   "archived": (boolean) whether this Canvas is archived,
     *   "draft": (boolean) whether this Canvas is a draft,
     *   "schedule_type": (string) type of scheduling action,
     *   "first_entry": (string) date of first entry as ISO 8601 date,
     *   "last_entry": (string) date of last entry as ISO 8601 date,
     *   "channels": (array of strings) step channels used with Canvas,
     *   "variants": [
     *     {
     *       "name": (string) name of variant,
     *       "id": (string) API identifier of the variant,
     *       "first_step_ids": (array of strings) API identifiers for first steps in variant,
     *       "first_step_id": (string) API identifier of first step in variant (deprecated in November 2017, only included if the variant has only one first step)
     *     },
     *     ... (more variations)
     *   ],
     *   "tags": (array of strings) tag names associated with the Canvas,
     *   "steps": [
     *     {
     *       "name": (string) name of step,
     *       "id": (string) API identifier of the step,
     *       "next_step_ids": (array of strings) API identifiers of steps following step,
     *       "channels": (array of strings) channels used in step,
     *       "messages": {
     *           "message_variation_id": (string) {  // <=This is the actual id
     *               "channel": (string) channel type of the message (eg., "email"),
     *               ... channel-specific fields for this message, see Campaign Details Endpoint API Response for example message responses ...
     *           }
     *       }
     *     },
     *     ... (more steps)
     *   ],
     *   "message": (required, string) the status of the export, returns 'success' when completed without errors
     * }
     * ```
    **/
    Canvas.prototype.canvasDetails = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CanvasDetailsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/canvas/details";
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
     * canvasList - Canvas List
     *
     * This endpoint allows you to export a list of Canvases, including the name, Canvas API Identifier and associated Tags. The Canvases are returned in groups of 100 sorted by time of creation (oldest to newest by default).
     *
     * > Archived Canvases will not be included in the API response unless the `include_archived` field is specified. Canvases that are stopped but not archived, however, will be returned by default.
     *
     *
     * ## Response
     *
     * ```json
     * Content-Type: application/json
     * Authorization: Bearer YOUR-REST-API-KEY
     * {
     *   "canvases" : [
     *   	{
     *   		"id" : (string) Canvas API Identifier,
     *   		"last_edited": (ISO 8601 string) the last edited time for the message,
     *   		"name" : (string) Canvas name,
     *   		"tags" : (array) tag names associated with the Canvas,
     *   	},
     *     ... (more Canvases)
     *   ],
     *   "message": (required, string) the status of the export, returns 'success' when completed without errors
     * }
     * ```
    **/
    Canvas.prototype.canvasList = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CanvasListRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/canvas/list";
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
    return Canvas;
}());
export { Canvas };

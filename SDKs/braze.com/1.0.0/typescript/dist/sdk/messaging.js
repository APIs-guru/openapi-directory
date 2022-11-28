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
var Messaging = /** @class */ (function () {
    function Messaging(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * getUpcomingScheduledCampaignsAndCanvases - Get Upcoming Scheduled Campaigns and Canvases
     *
     * You can view a JSON list of upcoming and scheduled Campaigns and Canvases using the following information and parameters. The endpoint will return information about scheduled Campaigns and entry Canvases between now and the designated end_time (ISO 8601 format) specified in the request. Daily, recurring messages will only appear once with their next occurrence. Results returned in this endpoint are only for Campaigns and Canvases created and scheduled in Braze.
     *
     * ## Response
     *
     * ```json
     * Content-Type: application/json
     * Authorization: Bearer YOUR-REST-API-KEY
     * {
     *     "scheduled_broadcasts": [
     *       # Example Canvas
     *       {
     *         "name" => String,
     *         "id" => String,
     *         "type" => "Canvas",
     *         "tags" => [String tag names],
     *         "next_send_time" => "YYYY-MM-DD HH:mm:ss" (may also include time zone if not local/intelligent delivery)
     *         "schedule_type" => one of "local_time_zones", "intelligent_delivery", or the name of your company's time zone
     *       },
     *       # Example Campaign
     *       {
     *         "name" => String,
     *         "id" => String,
     *         "type" => "Campaign",
     *         "tags" => [String tag names],
     *         "next_send_time" => "YYYY-MM-DD HH:mm:ss" (may also include time zone if not local/intelligent delivery)
     *         "schedule_type" => one of "local_time_zones", "intelligent_delivery", or the name of your company's time zone
     *       },
     *     ]
     * }
     * ```
    **/
    Messaging.prototype.getUpcomingScheduledCampaignsAndCanvases = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetUpcomingScheduledCampaignsAndCanvasesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/messages/scheduled_broadcasts";
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
     * scheduleApiTriggeredCanvases - Schedule API Triggered Canvases
     *
     * Use this endpoint to trigger API Triggered Canvases, which are created on the Dashboard and initiated via the API. You can pass in `canvas_entry_properties` that will be templated into the messages sent by the first steps of the Canvas.
     *
     * This endpoint allows you to schedule Canvas messages (up to 90 days in advance) via API Triggered delivery, allowing you to decide what action should trigger the message to be sent. Please note that to send messages with this endpoint, you must have a Canvas ID, created when you build a Canvas.
     *
     * ### Request Parameters
     *
     * | Parameter | Required | Data Type | Description |
     * | --------- | ---------| --------- | ----------- |
     * |`canvas_id`|Required|String| See canvas identifier|
     * |`send_id` | Optional | String | See send identifier |
     * |`recipients` | Optional | Array of recipient objects | See recipients object |
     * |`audience` | Optional | Connected audience object | See connected audience |
     * |`broadcast` | Optional | Boolean | See broadcast -- defaults to false on 8/31/17, must be set to true if "recipients" object is omitted |
     * | `trigger_properties` | Optional | Object | Personalization key value pairs for all users in this send; see trigger properties |
     * | `schedule` | Required | Schedule object | See schedule object |
     *
     * ## Request Components
     * - [Canvas Identifier](https://www.braze.com/docs/api/identifier_types/)
     * - [Recipients](https://www.braze.com/docs/api/objects_filters/recipient_object/)
     * - [Connected Audience](https://www.braze.com/docs/api/objects_filters/connected_audience/)
     * - [Broadcast](https://www.braze.com/docs/api/parameters/#broadcast)
     * - [Trigger Properties](https://www.braze.com/docs/api/objects_filters/trigger_properties_object/)
     * - [Schedule Object](https://www.braze.com/docs/api/objects_filters/schedule_object/)
    **/
    Messaging.prototype.scheduleApiTriggeredCanvases = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ScheduleApiTriggeredCanvasesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/canvas/trigger/schedule/create";
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
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return Messaging;
}());
export { Messaging };

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
var Sms = /** @class */ (function () {
    function Sms(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * listUserSSubscriptionGroupSms - List User's Subscription Group - SMS
     *
     * Use the endpoint below to list and get the subscription groups of a certain user.
     *
     * > If there are multiple users (multiple external ids) who share the same email address, all users will be returned as a separate user (even if they have the same email address or subscription group).
    **/
    Sms.prototype.listUserSSubscriptionGroupSms = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListUserSSubscriptionGroupSmsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/subscription/user/status";
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
     * listUserSSubscriptionGroupStatusSms - List User's  Subscription Group Status - SMS
     *
     * Use the endpoint below to get the subscription state of a user in a subscription group. The response from this endpoint will include the external ID and either subscribed, unsubscribed, or unknown for the specific subscription group requested in the API call. This can be used to update the subscription group state in subsequent API calls or to be displayed on a hosted web page.
     *
     * > *Either `external_id` or `email` are required.
     *
     * ## Response
     *
     * All successful responses will return `subscribed`, `unsubscribed`, or `unknown` depending on status and user history with the subscription group.
     *
     * ```json
     * Content-Type: application/json
     * Authorization: Bearer YOUR-REST-API-KEY
     * {
     *   "status": {
     *     "1": "Unsubscribed",
     *     "2": "Subscribed"
     *   },
     *   "message": "success"
     * }
     * ```
    **/
    Sms.prototype.listUserSSubscriptionGroupStatusSms = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListUserSSubscriptionGroupStatusSmsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/subscription/status/get";
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
    return Sms;
}());
export { Sms };

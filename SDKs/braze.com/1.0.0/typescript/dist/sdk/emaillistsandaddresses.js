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
var EmailListsAndAddresses = /** @class */ (function () {
    function EmailListsAndAddresses(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * queryHardBouncedEmails - Query Hard Bounced Emails
     *
     * This endpoint allows you to pull a list of email addresses that have “hard bounced” your email messages within a certain time frame.
     *
     * > You must provide an `end_date`, as well as either an `email` or a `start_date`.<br><br>If your date range has more than `limit` number of hard bounces, you will need to make multiple API calls, each time increasing the `offset` until a call returns either fewer than `limit` or zero results.
     *
     * ## Response
     *
     * Entries are listed in descending order.
     *
     * ```json
     * Content-Type: application/json
     * Authorization: Bearer YOUR-REST-API-KEY
     * {
     *   "emails": [
     *     {
     *       "email": "example1@braze.com",
     *       "hard_bounced_at": "2016-08-25 15:24:32 +0000"
     *     },
     *     {
     *       "email": "example2@braze.com",
     *       "hard_bounced_at": "2016-08-24 17:41:58 +0000"
     *     },
     *     {
     *       "email": "example3@braze.com",
     *       "hard_bounced_at": "2016-08-24 12:01:13 +0000"
     *     }
     *   ],
     *   "message": "success"
     * }
     * ```
    **/
    EmailListsAndAddresses.prototype.queryHardBouncedEmails = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.QueryHardBouncedEmailsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/email/hard_bounces";
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
     * queryListOfUnsubscribedEmailAddresses - Query List of Unsubscribed Email Addresses
     *
     * Use the /email/unsubscribes endpoint to return emails that have unsubscribed during the time period from `start_date` to `end_date`. You can use this endpoint to set up a bi-directional sync between Braze and other email systems or your own database.
     *
     * > You must provide either an email or a start_date and an end_date. <br><br>If your date range has more than `limit` number of unsubscribes, you will need to make multiple API calls, each time increasing the `offset` until a call returns either fewer than `limit` or zero results.
    **/
    EmailListsAndAddresses.prototype.queryListOfUnsubscribedEmailAddresses = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.QueryListOfUnsubscribedEmailAddressesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/email/unsubscribes";
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
    return EmailListsAndAddresses;
}());
export { EmailListsAndAddresses };

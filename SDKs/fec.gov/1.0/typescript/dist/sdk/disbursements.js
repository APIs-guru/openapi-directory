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
var Disbursements = /** @class */ (function () {
    function Disbursements(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * getSchedulesScheduleB -
     * Schedule B filings describe itemized disbursements. This data
     * explains how committees and other filers spend their money. These figures are
     * reported as part of forms F3, F3X and F3P.
     *
     * The data is divided in two-year periods, called `two_year_transaction_period`, which
     * is derived from the `report_year` submitted of the corresponding form. If no value is supplied, the results will
     * default to the most recent two-year period that is named after the ending,
     * even-numbered year.
     *
     * Due to the large quantity of Schedule B filings, this endpoint is not paginated by
     * page number. Instead, you can request the next page of results by adding the values in
     * the `last_indexes` object from `pagination` to the URL of your last request. For
     * example, when sorting by `disbursement_date`, you might receive a page of
     * results with the following pagination information:
     *
     * ```
     * pagination: {
     *     pages: 965191,
     *     per_page: 20,
     *     count: 19303814,
     *     last_indexes: {
     *         last_index: "230906248",
     *         last_disbursement_date: "2014-07-04"
     *     }
     * }
     * ```
     *
     * To fetch the next page of sorted results, append `last_index=230906248` and
     * `last_disbursement_date=2014-07-04` to the URL.  We strongly advise paging through
     * these results by using the sort indices (defaults to sort by disbursement date, e.g.
     * `last_disbursement_date`), otherwise some resources may be unintentionally filtered out.
     * This resource uses keyset pagination to improve query performance
     * and these indices are required to properly page through this large dataset.
     *
     * Note: because the Schedule B data includes many records, counts for
     * large result sets are approximate; you will want to page through the records until no records are returned.
     *
    **/
    Disbursements.prototype.getSchedulesScheduleB = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetSchedulesScheduleBRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/schedules/schedule_b/";
        var client = this._securityClient;
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
                default:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.scheduleBPage = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getSchedulesScheduleBByPurpose -
     * Schedule B disbursements aggregated by disbursement purpose category. To avoid double counting,
     * memoed items are not included.
     * Purpose is a combination of transaction codes, category codes and disbursement description.
     * Inspect the `disbursement_purpose` sql function within the migrations for more details.
     *
    **/
    Disbursements.prototype.getSchedulesScheduleBByPurpose = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetSchedulesScheduleBByPurposeRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/schedules/schedule_b/by_purpose/";
        var client = this._securityClient;
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
                default:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.scheduleBByPurposePage = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getSchedulesScheduleBByRecipient -
     * Schedule B disbursements aggregated by recipient name. To avoid double counting,
     * memoed items are not included.
     *
    **/
    Disbursements.prototype.getSchedulesScheduleBByRecipient = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetSchedulesScheduleBByRecipientRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/schedules/schedule_b/by_recipient/";
        var client = this._securityClient;
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
                default:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.scheduleBByRecipientPage = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getSchedulesScheduleBByRecipientId -
     * Schedule B disbursements aggregated by recipient committee ID, if applicable.
     * To avoid double counting, memoed items are not included.
     *
    **/
    Disbursements.prototype.getSchedulesScheduleBByRecipientId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetSchedulesScheduleBByRecipientIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/schedules/schedule_b/by_recipient_id/";
        var client = this._securityClient;
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
                default:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.scheduleBByRecipientIdPage = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getSchedulesScheduleBEfile -
     * Efiling endpoints provide real-time campaign finance data received from electronic filers. Efiling endpoints only contain the most recent four months of data and don't contain the processed and coded data that you can find on other endpoints.
     *
    **/
    Disbursements.prototype.getSchedulesScheduleBEfile = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetSchedulesScheduleBEfileRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/schedules/schedule_b/efile/";
        var client = this._securityClient;
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
                default:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.scheduleBEfilePage = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getSchedulesScheduleBSubId -
     * Schedule B filings describe itemized disbursements. This data
     * explains how committees and other filers spend their money. These figures are
     * reported as part of forms F3, F3X and F3P.
     *
     * The data is divided in two-year periods, called `two_year_transaction_period`, which
     * is derived from the `report_year` submitted of the corresponding form. If no value is supplied, the results will
     * default to the most recent two-year period that is named after the ending,
     * even-numbered year.
     *
     * Due to the large quantity of Schedule B filings, this endpoint is not paginated by
     * page number. Instead, you can request the next page of results by adding the values in
     * the `last_indexes` object from `pagination` to the URL of your last request. For
     * example, when sorting by `disbursement_date`, you might receive a page of
     * results with the following pagination information:
     *
     * ```
     * pagination: {
     *     pages: 965191,
     *     per_page: 20,
     *     count: 19303814,
     *     last_indexes: {
     *         last_index: "230906248",
     *         last_disbursement_date: "2014-07-04"
     *     }
     * }
     * ```
     *
     * To fetch the next page of sorted results, append `last_index=230906248` and
     * `last_disbursement_date=2014-07-04` to the URL.  We strongly advise paging through
     * these results by using the sort indices (defaults to sort by disbursement date, e.g.
     * `last_disbursement_date`), otherwise some resources may be unintentionally filtered out.
     * This resource uses keyset pagination to improve query performance
     * and these indices are required to properly page through this large dataset.
     *
     * Note: because the Schedule B data includes many records, counts for
     * large result sets are approximate; you will want to page through the records until no records are returned.
     *
    **/
    Disbursements.prototype.getSchedulesScheduleBSubId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetSchedulesScheduleBSubIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/schedules/schedule_b/{sub_id}/", req.pathParams);
        var client = this._securityClient;
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
                default:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.scheduleBPage = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return Disbursements;
}());
export { Disbursements };

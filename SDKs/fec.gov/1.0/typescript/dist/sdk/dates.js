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
var Dates = /** @class */ (function () {
    function Dates(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * getCalendarDates -
     * Combines the election and reporting dates with Commission meetings, conferences, outreach, Advisory Opinions, rules, litigation dates and other
     * events into one calendar.
     *
     * State and report type filtering is no longer available.
     *
    **/
    Dates.prototype.getCalendarDates = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetCalendarDatesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/calendar-dates/";
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
                        res.calendarDatePage = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getCalendarDatesExport -
     * Returns CSV or ICS for downloading directly into calendar applications like Google, Outlook or other applications.
     *
     * Combines the election and reporting dates with Commission meetings, conferences, outreach, Advisory Opinions, rules, litigation dates and other
     * events into one calendar.
     *
     * State filtering now applies to elections, reports and reporting periods.
     *
     * Presidential pre-primary report due dates are not shown on even years.
     * Filers generally opt to file monthly rather than submit over 50 pre-primary election
     * reports. All reporting deadlines are available at /reporting-dates/ for reference.
     *
     * This is [the sql function](https://github.com/fecgov/openFEC/blob/develop/data/migrations/V40__omnibus_dates.sql)
     * that creates the calendar.
     *
     *
    **/
    Dates.prototype.getCalendarDatesExport = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetCalendarDatesExportRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/calendar-dates/export/";
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
                        res.calendarDatePage = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getElectionDates -
     * FEC election dates since 1995.
     *
    **/
    Dates.prototype.getElectionDates = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetElectionDatesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/election-dates/";
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
                        res.getElectionDatesDefaultApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getReportingDates -
     * FEC election dates since 1995.
     *
    **/
    Dates.prototype.getReportingDates = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetReportingDatesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/reporting-dates/";
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
                        res.getReportingDatesDefaultApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return Dates;
}());
export { Dates };

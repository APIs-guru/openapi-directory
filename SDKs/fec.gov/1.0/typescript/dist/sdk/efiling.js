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
var Efiling = /** @class */ (function () {
    function Efiling(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * getEfileFilings - Basic information about electronic files coming into the FEC, posted as they are received.
    **/
    Efiling.prototype.getEfileFilings = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetEfileFilingsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/efile/filings/";
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
                        res.eFilingsPage = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getEfileReportsHouseSenate -
     * Key financial data reported periodically by committees as they are reported. This feed includes summary
     * information from the the House F3 reports, the presidential F3p reports and the PAC and party
     * F3x reports.
     *
     * Generally, committees file reports on a quarterly or monthly basis, but
     * some must also submit a report 12 days before primary elections. Therefore, during the primary
     * season, the period covered by this file may be different for different committees. These totals
     * also incorporate any changes made by committees, if any report covering the period is amended.
     *
     * DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
     * label these fields while conveying clear meaning to ensure accessibility for all users.
     *
    **/
    Efiling.prototype.getEfileReportsHouseSenate = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetEfileReportsHouseSenateRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/efile/reports/house-senate/";
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
                        res.baseF3FilingPage = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getEfileReportsPacParty -
     * Key financial data reported periodically by committees as they are reported. This feed includes summary
     * information from the the House F3 reports, the presidential F3p reports and the PAC and party
     * F3x reports.
     *
     * Generally, committees file reports on a quarterly or monthly basis, but
     * some must also submit a report 12 days before primary elections. Therefore, during the primary
     * season, the period covered by this file may be different for different committees. These totals
     * also incorporate any changes made by committees, if any report covering the period is amended.
     *
     * DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
     * label these fields while conveying clear meaning to ensure accessibility for all users.
     *
    **/
    Efiling.prototype.getEfileReportsPacParty = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetEfileReportsPacPartyRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/efile/reports/pac-party/";
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
                        res.baseF3XFilingPage = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getEfileReportsPresidential -
     * Key financial data reported periodically by committees as they are reported. This feed includes summary
     * information from the the House F3 reports, the presidential F3p reports and the PAC and party
     * F3x reports.
     *
     * Generally, committees file reports on a quarterly or monthly basis, but
     * some must also submit a report 12 days before primary elections. Therefore, during the primary
     * season, the period covered by this file may be different for different committees. These totals
     * also incorporate any changes made by committees, if any report covering the period is amended.
     *
     * DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
     * label these fields while conveying clear meaning to ensure accessibility for all users.
     *
    **/
    Efiling.prototype.getEfileReportsPresidential = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetEfileReportsPresidentialRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/efile/reports/presidential/";
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
                        res.baseF3PFilingPage = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return Efiling;
}());
export { Efiling };

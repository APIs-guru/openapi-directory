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
var Financial = /** @class */ (function () {
    function Financial(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * getCommitteeCommitteeIdReports -
     * Each report represents the summary information from Form 3, Form 3X and Form 3P.
     * These reports have key statistics that illuminate the financial status of a given committee.
     * Things like cash on hand, debts owed by committee, total receipts, and total disbursements
     * are especially helpful for understanding a committee's financial dealings.
     *
     * By default, this endpoint includes both amended and final versions of each report. To restrict
     * to only the final versions of each report, use `is_amended=false`; to retrieve only reports that
     * have been amended, use `is_amended=true`.
     *
     * Several different reporting structures exist, depending on the type of organization that
     * submits financial information. To see an example of these reporting requirements,
     * look at the summary and detailed summary pages of Form 3, Form 3X, and Form 3P.
     *
     * DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
     * label these fields while conveying clear meaning to ensure accessibility for all users.
     *
    **/
    Financial.prototype.getCommitteeCommitteeIdReports = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetCommitteeCommitteeIdReportsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/committee/{committee_id}/reports/", req.pathParams);
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
                        res.committeeReportsPage = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getCommitteeCommitteeIdTotals -
     * This endpoint provides information about a committee's Form 3, Form 3X, or Form 3P financial reports,
     * which are aggregated by two-year period. We refer to two-year periods as a `cycle`.
     *
     * The cycle is named after the even-numbered year and includes the year before it. To obtain
     * totals from 2013 and 2014, you would use 2014. In odd-numbered years, the current cycle
     * is the next year — for example, in 2015, the current cycle is 2016.
     *
     * For presidential and Senate candidates, multiple two-year cycles exist between elections.
     *
     *
    **/
    Financial.prototype.getCommitteeCommitteeIdTotals = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetCommitteeCommitteeIdTotalsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/committee/{committee_id}/totals/", req.pathParams);
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
                        res.committeeTotalsPage = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getElections -
     * Look at the top-level financial information for all candidates running for the same
     * office.
     *
     * Choose a 2-year cycle, and `house`, `senate` or `presidential`.
     *
     * If you are looking for a Senate seat, you will need to select the state using a two-letter
     * abbreviation.
     *
     * House races require state and a two-digit district number.
     *
     * Since this endpoint reflects financial information, it will only have candidates once they file
     * financial reporting forms. Query the `/candidates` endpoint to retrieve an-up-to-date list of all the
     * candidates that filed to run for a particular seat.
     *
    **/
    Financial.prototype.getElections = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetElectionsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/elections/";
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
                        res.electionPage = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getElectionsSearch -
     * List elections by cycle, office, state, and district.
     *
    **/
    Financial.prototype.getElectionsSearch = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetElectionsSearchRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/elections/search/";
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
                        res.electionsListPage = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getElectionsSummary -
     * List elections by cycle, office, state, and district.
     *
    **/
    Financial.prototype.getElectionsSummary = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetElectionsSummaryRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/elections/summary/";
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
                        res.electionSummary = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getReportsEntityType -
     * Each report represents the summary information from Form 3, Form 3X and Form 3P.
     * These reports have key statistics that illuminate the financial status of a given committee.
     * Things like cash on hand, debts owed by committee, total receipts, and total disbursements
     * are especially helpful for understanding a committee's financial dealings.
     *
     * By default, this endpoint includes both amended and final versions of each report. To restrict
     * to only the final versions of each report, use `is_amended=false`; to retrieve only reports that
     * have been amended, use `is_amended=true`.
     *
     * Several different reporting structures exist, depending on the type of organization that
     * submits financial information. To see an example of these reporting requirements,
     * look at the summary and detailed summary pages of Form 3, Form 3X, and Form 3P.
     *
     * DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
     * label these fields while conveying clear meaning to ensure accessibility for all users.
     *
    **/
    Financial.prototype.getReportsEntityType = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetReportsEntityTypeRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/reports/{entity_type}/", req.pathParams);
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
                        res.committeeReportsPage = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getTotalsByEntity -
     * Provides cumulative receipt totals by entity type, over a two year cycle. Totals are adjusted to avoid double counting.
     *
     * This is [the sql](https://github.com/fecgov/openFEC/blob/develop/data/migrations/V41__large_aggregates.sql) that creates these calculations.
     *
    **/
    Financial.prototype.getTotalsByEntity = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetTotalsByEntityRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/totals/by_entity/";
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
                        res.entityReceiptDisbursementTotalsPage = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getTotalsEntityType -
     * This endpoint provides information about a committee's Form 3, Form 3X, or Form 3P financial reports,
     * which are aggregated by two-year period. We refer to two-year periods as a `cycle`.
     *
     * The cycle is named after the even-numbered year and includes the year before it. To obtain
     * totals from 2013 and 2014, you would use 2014. In odd-numbered years, the current cycle
     * is the next year — for example, in 2015, the current cycle is 2016.
     *
     * For presidential and Senate candidates, multiple two-year cycles exist between elections.
     *
     *
    **/
    Financial.prototype.getTotalsEntityType = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetTotalsEntityTypeRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/totals/{entity_type}/", req.pathParams);
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
                        res.committeeTotalsPage = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return Financial;
}());
export { Financial };

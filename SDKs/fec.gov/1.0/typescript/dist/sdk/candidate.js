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
var Candidate = /** @class */ (function () {
    function Candidate(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * getCandidateCandidateId -
     * This endpoint is useful for finding detailed information about a particular candidate. Use the
     * `candidate_id` to find the most recent information about that candidate.
     *
    **/
    Candidate.prototype.getCandidateCandidateId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetCandidateCandidateIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/candidate/{candidate_id}/", req.pathParams);
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
                        res.candidateDetailPage = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getCandidateCandidateIdHistory -
     * Find out a candidate's characteristics over time. This is particularly useful if the
     * candidate runs for the same office in different districts or you want to know more about a candidate's
     * previous races.
     *
     * This information is organized by `candidate_id`, so it won't help you find a candidate
     * who ran for different offices over time; candidates get a new ID for each office.
     *
    **/
    Candidate.prototype.getCandidateCandidateIdHistory = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetCandidateCandidateIdHistoryRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/candidate/{candidate_id}/history/", req.pathParams);
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
                        res.candidateHistoryPage = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getCandidateCandidateIdHistoryCycle -
     * Find out a candidate's characteristics over time. This is particularly useful if the
     * candidate runs for the same office in different districts or you want to know more about a candidate's
     * previous races.
     *
     * This information is organized by `candidate_id`, so it won't help you find a candidate
     * who ran for different offices over time; candidates get a new ID for each office.
     *
    **/
    Candidate.prototype.getCandidateCandidateIdHistoryCycle = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetCandidateCandidateIdHistoryCycleRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/candidate/{candidate_id}/history/{cycle}/", req.pathParams);
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
                        res.candidateHistoryPage = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getCandidateCandidateIdTotals -
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
    Candidate.prototype.getCandidateCandidateIdTotals = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetCandidateCandidateIdTotalsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/candidate/{candidate_id}/totals/", req.pathParams);
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
     * getCandidates -
     * Fetch basic information about candidates, and use parameters to filter results to the
     * candidates you're looking for.
     *
     * Each result reflects a unique FEC candidate ID. That ID is particular to the candidate for a
     * particular office sought. If a candidate runs for the same office multiple times, the ID
     * stays the same. If the same person runs for another office — for example, a House
     * candidate runs for a Senate office — that candidate will get a unique ID for each office.
     *
    **/
    Candidate.prototype.getCandidates = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetCandidatesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/candidates/";
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
                        res.candidatePage = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getCandidatesSearch -
     * Fetch basic information about candidates and their principal committees.
     *
     * Each result reflects a unique FEC candidate ID. That ID is assigned to the candidate for a
     * particular office sought. If a candidate runs for the same office over time, that ID
     * stays the same. If the same person runs for multiple offices — for example, a House
     * candidate runs for a Senate office — that candidate will get a unique ID for each office.
     *
     * The candidate endpoints primarily use data from FEC registration
     * [Form 1](http://www.fec.gov/pdf/forms/fecfrm1.pdf) for committee information and
     * [Form 2](http://www.fec.gov/pdf/forms/fecfrm2.pdf) for candidate information.
     *
    **/
    Candidate.prototype.getCandidatesSearch = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetCandidatesSearchRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/candidates/search/";
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
                        res.candidatePage = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getCandidatesTotals -
     * Aggregated candidate receipts and disbursements grouped by cycle.
     *
    **/
    Candidate.prototype.getCandidatesTotals = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetCandidatesTotalsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/candidates/totals/";
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
                        res.candidateHistoryTotalPage = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getCandidatesTotalsByOffice -  Aggregated candidate receipts and disbursements grouped by office by cycle.
     *
    **/
    Candidate.prototype.getCandidatesTotalsByOffice = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetCandidatesTotalsByOfficeRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/candidates/totals/by_office/";
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
                        res.totalByOfficePage = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getCandidatesTotalsByOfficeByParty -  Aggregated candidate receipts and disbursements grouped by office by party by cycle.
     *
    **/
    Candidate.prototype.getCandidatesTotalsByOfficeByParty = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetCandidatesTotalsByOfficeByPartyRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/candidates/totals/by_office/by_party/";
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
                        res.totalByOfficeByPartyPage = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getCommitteeCommitteeIdCandidates -
     * This endpoint is useful for finding detailed information about a particular candidate. Use the
     * `candidate_id` to find the most recent information about that candidate.
     *
    **/
    Candidate.prototype.getCommitteeCommitteeIdCandidates = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetCommitteeCommitteeIdCandidatesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/committee/{committee_id}/candidates/", req.pathParams);
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
                        res.candidateDetailPage = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getCommitteeCommitteeIdCandidatesHistory -
     * Find out a candidate's characteristics over time. This is particularly useful if the
     * candidate runs for the same office in different districts or you want to know more about a candidate's
     * previous races.
     *
     * This information is organized by `candidate_id`, so it won't help you find a candidate
     * who ran for different offices over time; candidates get a new ID for each office.
     *
    **/
    Candidate.prototype.getCommitteeCommitteeIdCandidatesHistory = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetCommitteeCommitteeIdCandidatesHistoryRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/committee/{committee_id}/candidates/history/", req.pathParams);
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
                        res.candidateHistoryPage = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getCommitteeCommitteeIdCandidatesHistoryCycle -
     * Find out a candidate's characteristics over time. This is particularly useful if the
     * candidate runs for the same office in different districts or you want to know more about a candidate's
     * previous races.
     *
     * This information is organized by `candidate_id`, so it won't help you find a candidate
     * who ran for different offices over time; candidates get a new ID for each office.
     *
    **/
    Candidate.prototype.getCommitteeCommitteeIdCandidatesHistoryCycle = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetCommitteeCommitteeIdCandidatesHistoryCycleRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/committee/{committee_id}/candidates/history/{cycle}/", req.pathParams);
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
                        res.candidateHistoryPage = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return Candidate;
}());
export { Candidate };

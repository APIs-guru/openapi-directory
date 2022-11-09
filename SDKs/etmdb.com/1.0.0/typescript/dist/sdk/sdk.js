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
import axios from "axios";
import * as operations from "./models/operations";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";
var Servers = [
    "https://etmdb.com",
];
export function WithServerURL(serverURL, params) {
    return function (sdk) {
        if (params != null) {
            serverURL = utils.ReplaceParameters(serverURL, params);
        }
        sdk.serverURL = serverURL;
    };
}
export function WithClient(client) {
    return function (sdk) {
        sdk.defaultClient = client;
    };
}
var SDK = /** @class */ (function () {
    function SDK() {
        var opts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            opts[_i] = arguments[_i];
        }
        var _this = this;
        opts.forEach(function (o) { return o(_this); });
        if (this.serverURL == "") {
            this.serverURL = Servers[0];
        }
        if (!this.defaultClient) {
            this.defaultClient = axios.create({ baseURL: this.serverURL });
        }
        if (!this.securityClient) {
            if (this.security) {
                this.securityClient = CreateSecurityClient(this.defaultClient, this.security);
            }
            else {
                this.securityClient = this.defaultClient;
            }
        }
    }
    // CinemaDetailSearchRead - Return cinema details search result
    /**
     * Return cinema details search result
     *
     * ### Response Class (Status 200)
     *
     * * __{cinema_name}__: Used as a key word to search cinemas,
     *
     * For more details on how cinemas are listed [see here][ref].
     * [ref]: https://etmdb.com/en/cinema-list/-updated_date
    **/
    SDK.prototype.CinemaDetailSearchRead = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CinemaDetailSearchReadRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/api/v1/cinema-detail/search/{cinema_name}", req.pathParams);
        var client = this.defaultClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // CinemaScheduleSearchRead - Return cinema schedule search result
    /**
     * Return cinema schedule search result
     *
     * ### Response Class (Status 200)
     *
     * * __{movie_title}__: Used as a key word to search movie cast
     * * You can use both Amharic or English charset/font to search
     *
     * For more details about cinema schedule, check each cinema from the cinema list [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
    **/
    SDK.prototype.CinemaScheduleSearchRead = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CinemaScheduleSearchReadRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/api/v1/cinema-schedule/search/{movie_title}", req.pathParams);
        var client = this.defaultClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // CinemaScheduleSearchallRead - Return cinema schedule search result
    /**
     * Return cinema schedule search result
     *
     * ### Response Class (Status 200)
     * __{param}__ argument can be
     * * movie title
     * * cinema name
     * * cinema hall name or
     * * cinema technology
     *
     * For more details about cinema schedule, check each cinema from the cinema list [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
    **/
    SDK.prototype.CinemaScheduleSearchallRead = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CinemaScheduleSearchallReadRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/api/v1/cinema-schedule/searchall/{param}", req.pathParams);
        var client = this.defaultClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // CinemaSheduleShowtimeSearchRead - Return cinema schedule and showtime search result
    /**
     * Return cinema schedule and showtime search result
     *
     * ### Response Class (Status 200)
     * * __{movie_title}__: Used as a key word to search movie cast
     * * You can use both Amharic or English charset/font to search
     *
     * For more details about cinema schedule showtime, check each cinema from the cinema list [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
    **/
    SDK.prototype.CinemaSheduleShowtimeSearchRead = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CinemaSheduleShowtimeSearchReadRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/api/v1/cinema-shedule-showtime/search/{movie_title}", req.pathParams);
        var client = this.defaultClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // CinemaSheduleShowtimeSearchallRead - Return cinema schedule and showtime search result
    /**
     * Return cinema schedule and showtime search result
     *
     * ### Response Class (Status 200)
     * __{param}__ argument can be
     * * movie title
     * * cinema name
     * * cinema hall name
     * * showtime starting date
     * * showtime ending date or
     * * cinema technology
     *
     * For more details about cinema schedule, check each cinema from the cinema list [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
    **/
    SDK.prototype.CinemaSheduleShowtimeSearchallRead = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CinemaSheduleShowtimeSearchallReadRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/api/v1/cinema-shedule-showtime/searchall/{param}", req.pathParams);
        var client = this.defaultClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // CinemaSearchRead - Return cinema search result
    /**
     * Return cinema search result
     *
     * ### Response Class (Status 200)
     *
     * * __{id}__: Used as a key to search cinemas,
     *
     * For more details on how cinemas are listed [see here][ref].
     * [ref]: https://etmdb.com/en/cinema-list/-updated_date
    **/
    SDK.prototype.CinemaSearchRead = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CinemaSearchReadRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/api/v1/cinema/search/{id}", req.pathParams);
        var client = this.defaultClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // CompanyCreditsSearchRead - Return company credits search result
    /**
     * Return company credits search result
     *
     * ### Response Class (Status 200)
     *
     * * __{movie_title}__: Used as a key word to search company credits for the movie
     * * You can use both Amharic or English charset/font to search
     *
     * For more details on how company credits are listed [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
    **/
    SDK.prototype.CompanyCreditsSearchRead = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CompanyCreditsSearchReadRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/api/v1/company-credits/search/{movie_title}", req.pathParams);
        var client = this.defaultClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // CompanyCreditsSearchallRead - Return company credits search result
    /**
     * Return company credits search result
     *
     * ### Response Class (Status 200)
     * __{param}__ argument can be
     * * company name
     * * movie title or
     * * company credit description (such as production, cinematography, etc)
     *
     * For more details on how company credits are listed [see here][ref].
     * [ref]: https://etmdb.com/en/company-list/company_name
    **/
    SDK.prototype.CompanyCreditsSearchallRead = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CompanyCreditsSearchallReadRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/api/v1/company-credits/searchall/{param}", req.pathParams);
        var client = this.defaultClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // CompanySearchRead - Return company search result
    /**
     * Return company search result
     *
     * ### Response Class (Status 200)
     *
     * * __{company_name}__: Used as a key word to search companies,
     *
     * For more details on how companies are listed [see here][ref].
     * [ref]: https://etmdb.com/en/company-list/-updated_date
    **/
    SDK.prototype.CompanySearchRead = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CompanySearchReadRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/api/v1/company/search/{company_name}", req.pathParams);
        var client = this.defaultClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // FilmographyTypeSearchRead - Return filmography type search result
    /**
     * Return filmography type search result
     *
     * ### Response Class (Status 200)
     *
     * * __{filmography_description}__: Used as a key word to search filmography types
     *
     * For more details on how filmography types are listed [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
    **/
    SDK.prototype.FilmographyTypeSearchRead = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FilmographyTypeSearchReadRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/api/v1/filmography-type/search/{filmography_description}", req.pathParams);
        var client = this.defaultClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // FilmographySearchRead - Return filmography search result
    /**
     * Return filmography search result
     *
     * ### Response Class (Status 200)
     *
     * * __{movie_title}__: Used as a key word to search movies
     * * You can use both Amharic or English charset/font to search
     *
     * For more details on how filmographies are listed [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
    **/
    SDK.prototype.FilmographySearchRead = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FilmographySearchReadRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/api/v1/filmography/search/{movie_title}", req.pathParams);
        var client = this.defaultClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // FilmographySearchallRead - Return filmography search result
    /**
     * Return filmography search result
     *
     * ### Response Class (Status 200)
     * __{param}__ argument can be
     * * artist first name
     * * artist last name
     * * artist username
     * * movie title or
     * * filmography description (such as director, actor, producer, etc)
     *
     * For more details on how filmographies are listed [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
    **/
    SDK.prototype.FilmographySearchallRead = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FilmographySearchallReadRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/api/v1/filmography/searchall/{param}", req.pathParams);
        var client = this.defaultClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GenreTypeSearchRead - Return genre type search result
    /**
     * Return genre type search result
     *
     * ### Response Class (Status 200)
     *
     * * __{genre_description}__: Used as a key word to search genre types
     *
     * For more details on how genre types are listed [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
    **/
    SDK.prototype.GenreTypeSearchRead = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GenreTypeSearchReadRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/api/v1/genre-type/search/{genre_description}", req.pathParams);
        var client = this.defaultClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GenreSearchRead - Return movie genre search result
    /**
     * Return movie genre search result
     *
     * ### Response Class (Status 200)
     *
     * * __{movie_title}__: Used as a key word to search movie genres
     * * You can use both Amharic or English charset/font to search
     *
     * For more details on how movies are listed [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
    **/
    SDK.prototype.GenreSearchRead = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GenreSearchReadRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/api/v1/genre/search/{movie_title}", req.pathParams);
        var client = this.defaultClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GenreSearchallRead - Return movie genre search result
    /**
     * Return movie genre search result
     *
     * ### Response Class (Status 200)
     *
     * * __{movie_genre_type}__: Used as a key word to search movie genres
     *
     * For more details on how movies are listed [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
    **/
    SDK.prototype.GenreSearchallRead = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GenreSearchallReadRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/api/v1/genre/searchall/{movie_genre_type}", req.pathParams);
        var client = this.defaultClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // JobSearchRead - Return job details search result
    /**
     * Return job details search result
     *
     * ### Response Class (Status 200)
     *
     * * __{job_title}__: Used as a key word to search jobs,
     *
     * For more details on how job are listed [see here][ref].
     * [ref]: https://etmdb.com/en/job-list/-updated_date
    **/
    SDK.prototype.JobSearchRead = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.JobSearchReadRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/api/v1/job/search/{job_title}", req.pathParams);
        var client = this.defaultClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // JobSearchallRead - Return job details search result
    /**
     * Return job details search result
     *
     * ### Response Class (Status 200)
     *
     * * __{company_name}__: Used as a key word to search jobs,
     *
     * For more details on how job are listed [see here][ref].
     * [ref]: https://etmdb.com/en/job-list/-updated_date
    **/
    SDK.prototype.JobSearchallRead = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.JobSearchallReadRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/api/v1/job/searchall/{company_name}", req.pathParams);
        var client = this.defaultClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // MediaSearchRead - Return movie media search result
    /**
     * Return movie media search result
     *
     * ### Response Class (Status 200)
     *
     * * __{movie_title}__: Used as a key word to search media for movies
     * * You can use both Amharic or English charset/font to search
     *
     * For more details on how media is listed [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
    **/
    SDK.prototype.MediaSearchRead = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.MediaSearchReadRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/api/v1/media/search/{movie_title}", req.pathParams);
        var client = this.defaultClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // MediaSearchallRead - Return cast media search result
    /**
     * Return cast media search result
     *
     * ### Response Class (Status 200)
     * __{user}__ argument can be
     * * artist first name
     * * artist last name
     * * artist username
     *
     * For more details on how cast media is listed [see here][ref].
     * [ref]: https://etmdb.com/en/cast-list/-updated_date
    **/
    SDK.prototype.MediaSearchallRead = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.MediaSearchallReadRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/api/v1/media/searchall/{user}", req.pathParams);
        var client = this.defaultClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // MovieCastSearchRead - Return movie cast search result
    /**
     * Return movie cast search result
     *
     * ### Response Class (Status 200)
     *
     * * __{movie_title}__: Used as a key word to search movie cast
     * * You can use both Amharic or English charset/font to search
     *
     * For more details on how movie casts are listed [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
    **/
    SDK.prototype.MovieCastSearchRead = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.MovieCastSearchReadRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/api/v1/movie-cast/search/{movie_title}", req.pathParams);
        var client = this.defaultClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // MovieCastSearchallRead - Return movie cast search result
    /**
     * Return movie cast search result
     *
     * ### Response Class (Status 200)
     * __{param}__ argument can be
     * * artist first name
     * * artist last name
     * * artist username
     * * movie title or
     * * character name
     *
     * For more details on how movie casts are listed [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
    **/
    SDK.prototype.MovieCastSearchallRead = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.MovieCastSearchallReadRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/api/v1/movie-cast/searchall/{param}", req.pathParams);
        var client = this.defaultClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // MovieSearchRead - Return movie search result
    /**
     * Return movie search result
     *
     * ### Response Class (Status 200)
     *
     * * __{movie_title}__: Used as a key word to search movies
     * * You can use both Amharic or English charset/font to search
     *
     * For more details on how movies are listed [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
    **/
    SDK.prototype.MovieSearchRead = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.MovieSearchReadRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/api/v1/movie/search/{movie_title}", req.pathParams);
        var client = this.defaultClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // NewsSearchRead - Return news or article search result
    /**
     * Return news or article search result
     *
     * ### Response Class (Status 200)
     *
     * * __{title}__: Used as a key word to search news and articles,
     *
     * For more details on how news & articles are listed [see here][ref].
     * [ref]: https://etmdb.com/en/news-list/-updated_date
    **/
    SDK.prototype.NewsSearchRead = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.NewsSearchReadRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/api/v1/news/search/{title}", req.pathParams);
        var client = this.defaultClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // PeopleSearchRead - Return cast search result
    /**
     * Return cast search result
     *
     * ### Response Class (Status 200)
     * __{param}__ argument can be
     * * artist first name
     * * artist last name
     * * artist username
     *
     * For more details on how cast are listed [see here][ref].
     * [ref]: https://etmdb.com/en/cast-list/-updated_date
    **/
    SDK.prototype.PeopleSearchRead = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PeopleSearchReadRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/api/v1/people/search/{user}", req.pathParams);
        var client = this.defaultClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ShowtimeSearchallRead - Return showtime search result
    /**
     * Return showtime search result
     *
     * ### Response Class (Status 200)
     * __{param}__ argument can be
     * * show time or
     * * day of the week [Mon=1, Tue=2, Wed=3, Thu=4, Fri=5, Sat=6, Sun=7]
     *
     * For more details about showtime, check each cinema from the cinema list [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
    **/
    SDK.prototype.ShowtimeSearchallRead = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ShowtimeSearchallReadRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/api/v1/showtime/searchall/{param}", req.pathParams);
        var client = this.defaultClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // WatchlistSearchRead - Return watchlist search result
    /**
     * Return watchlist search result
     *
     * ### Response Class (Status 200)
     *
     * * __{movie_title}__: Used as a key word to search movies on watchlist
     * * You can use both Amharic or English charset/font to search
     *
     * For more details on how watchlist are listed [see here][ref].
     * [ref]: https://etmdb.com/en/movies/watchlist/id
    **/
    SDK.prototype.WatchlistSearchRead = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.WatchlistSearchReadRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/api/v1/watchlist/search/{movie_title}", req.pathParams);
        var client = this.defaultClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // WatchlistSearchallRead - Return watchlist search result
    /**
     * Return watchlist search result
     *
     * ### Response Class (Status 200)
     * __{param}__ argument can be
     * * artist first name
     * * artist last name
     * * artist username
     * * movie title or
     *
     * For more details on how watchlist are listed [see here][ref].
     * [ref]: https://etmdb.com/en/movies/watchlist/id
    **/
    SDK.prototype.WatchlistSearchallRead = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.WatchlistSearchallReadRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/api/v1/watchlist/searchall/{param}", req.pathParams);
        var client = this.defaultClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return SDK;
}());
export { SDK };

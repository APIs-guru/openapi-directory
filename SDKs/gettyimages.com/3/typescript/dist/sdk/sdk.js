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
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import { GetHeadersFromRequest } from "../internal/utils/headers";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";
import { Security } from "./models/shared";
var Servers = [
    "https://gettyimages.com",
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
export function WithSecurity(security) {
    if (!(security instanceof utils.SpeakeasyBase)) {
        security = new Security(security);
    }
    return function (sdk) {
        sdk.security = security;
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
    // DeleteV3AssetChangesChangeSetsChangeSetId - Confirm asset change notifications.
    /**
     * # Delete Asset Changes
     *
     * Confirm asset changes acknowledges receipt of asset changes (from the PUT asset changes endpoint).
     *
     * ##  Quickstart
     *
     * You'll need an API key and an access token to use this resource.
     *
    **/
    SDK.prototype.DeleteV3AssetChangesChangeSetsChangeSetId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteV3AssetChangesChangeSetsChangeSetIdRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v3/asset-changes/change-sets/{change-set-id}", req.pathParams);
        var client = this.securityClient;
        return client
            .delete(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
                case 400:
                    break;
                case 403:
                    break;
                case 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // DeleteV3BoardsBoardId - Delete a board
    SDK.prototype.DeleteV3BoardsBoardId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteV3BoardsBoardIdRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v3/boards/{board_id}", req.pathParams);
        var client = this.securityClient;
        return client
            .delete(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
                case 204:
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 403:
                    break;
                case 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // DeleteV3BoardsBoardIdAssets - Remove assets from a board
    SDK.prototype.DeleteV3BoardsBoardIdAssets = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteV3BoardsBoardIdAssetsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v3/boards/{board_id}/assets", req.pathParams);
        var client = this.securityClient;
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .delete(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 403:
                    break;
                case 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // DeleteV3BoardsBoardIdAssetsAssetId - Remove an asset from a board
    SDK.prototype.DeleteV3BoardsBoardIdAssetsAssetId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteV3BoardsBoardIdAssetsAssetIdRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v3/boards/{board_id}/assets/{asset_id}", req.pathParams);
        var client = this.securityClient;
        return client
            .delete(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 403:
                    break;
                case 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // DeleteV3BoardsBoardIdCommentsCommentId - Delete a comment from a board
    SDK.prototype.DeleteV3BoardsBoardIdCommentsCommentId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteV3BoardsBoardIdCommentsCommentIdRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v3/boards/{board_id}/comments/{comment_id}", req.pathParams);
        var client = this.securityClient;
        return client
            .delete(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
                case 204:
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 403:
                    break;
                case 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.GetV3AffiliatesSearchImages = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV3AffiliatesSearchImagesRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v3/affiliates/search/images";
        var client = this.securityClient;
        var headers = __assign(__assign({}, GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.affiliateImageSearchResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.GetV3AffiliatesSearchVideos = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV3AffiliatesSearchVideosRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v3/affiliates/search/videos";
        var client = this.securityClient;
        var headers = __assign(__assign({}, GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.affiliateVideoSearchResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetV3ArtistsImages - Search for images by a photographer
    SDK.prototype.GetV3ArtistsImages = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV3ArtistsImagesRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v3/artists/images";
        var client = this.securityClient;
        var headers = __assign(__assign({}, GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
                case 400:
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetV3ArtistsVideos - Search for videos by a photographer
    SDK.prototype.GetV3ArtistsVideos = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV3ArtistsVideosRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v3/artists/videos";
        var client = this.securityClient;
        var headers = __assign(__assign({}, GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
                case 400:
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetV3AssetChangesChannels - Get a list of asset change notification channels.
    /**
     * # Get Partner Channels
     *
     * Retrieves the channel data for the partner. This data can be used to populate the channel_id parameter in the Put Asset Changes query.
     *
     * ##  Quickstart
     *
     * You'll need an API key and an access token to use this resource.
     *
     * Partners who have a channel that has been removed should contact their sales representative to be set up again.
     *
     *
    **/
    SDK.prototype.GetV3AssetChangesChannels = function (config) {
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v3/asset-changes/channels";
        var client = this.securityClient;
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
                    if (MatchContentType(contentType, "application/json")) {
                        res.channels = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 403:
                    break;
                case 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetV3Boards - Get all boards that the user participates in
    SDK.prototype.GetV3Boards = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV3BoardsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v3/boards";
        var client = this.securityClient;
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.boardList = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetV3BoardsBoardId - Get assets and metadata for a specific board
    SDK.prototype.GetV3BoardsBoardId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV3BoardsBoardIdRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v3/boards/{board_id}", req.pathParams);
        var client = this.securityClient;
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
                    if (MatchContentType(contentType, "application/json")) {
                        res.boardDetail = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetV3BoardsBoardIdComments - Get comments from a board
    SDK.prototype.GetV3BoardsBoardIdComments = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV3BoardsBoardIdCommentsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v3/boards/{board_id}/comments", req.pathParams);
        var client = this.securityClient;
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
                    if (MatchContentType(contentType, "application/json")) {
                        res.commentsList = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetV3Collections - Gets collections applicable for the customer.
    /**
     * Use this endpoint to retrieve collections associated with your Getty Images account. To browse available collections see our [Image collections page]( http://www.gettyimages.com/creative-images/collections).
     *
     * You'll need an API key and access token to use this resource.
     *
    **/
    SDK.prototype.GetV3Collections = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV3CollectionsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v3/collections";
        var client = this.securityClient;
        var headers = __assign(__assign({}, GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
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
                    if (MatchContentType(contentType, "application/json")) {
                        res.collectionsList = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetV3Countries - Gets countries codes and names.
    /**
     * Returns a list of country objects that contains country name, two letter ISO abbreviation and three letter ISO abbreviation.
     *
     * You'll need an API key and access token to use this resource.
     *
    **/
    SDK.prototype.GetV3Countries = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV3CountriesRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v3/countries";
        var client = this.securityClient;
        var headers = __assign(__assign({}, GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
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
                    if (MatchContentType(contentType, "application/json")) {
                        res.countriesList = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetV3CustomersCurrent - Returns information about the current user.
    /**
     * Returns the first, middle and last name of the authenticated user.
     *
     * You'll need an API key and access token to use this resource.
     *
     * Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens.
     *
    **/
    SDK.prototype.GetV3CustomersCurrent = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV3CustomersCurrentRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v3/customers/current";
        var client = this.securityClient;
        var headers = __assign(__assign({}, GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
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
                    if (MatchContentType(contentType, "application/json")) {
                        res.customerInfoResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 503:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetV3Downloads - Returns information about a customer's downloaded assets.
    /**
     * Returns information about a customer's previously downloaded assets.
     *
     * You'll need an API key and access token to use this resource.
     *
     *
     * This endpoint requires being a Getty Images customer to limit your results to only assets that you have a license to use,
     * you need to also include an authorization token in the header of your request.
     * Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens.
     *
    **/
    SDK.prototype.GetV3Downloads = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV3DownloadsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v3/downloads";
        var client = this.securityClient;
        var headers = __assign(__assign({}, GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getDownloadsResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 403:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetV3Events - Get metadata for multiple events
    /**
     * This endpoint returns the detailed event metadata for all specified events. Getty Images news, sports and entertainment photographers and
     * videographers cover editorially relevant events occurring around the world.  All images or video clips produced in association with
     * an event, are assigned the same EventID. EventIDs are part of the meta-data returned in SearchForImages Results. Only content
     * produced under a Getty Images brand name (Getty Images News, Getty Images Sports, Getty Images Entertainment, Film Magic, Wire Image)
     * will be consistently assigned an EventID. The Event framework may also be used to group similar content, such as
     * "Hats from the Royal Wedding" or "Odd-ballOffbeat images of the week".
     *
     * You'll need an API key and access token to use this resource.
     *
    **/
    SDK.prototype.GetV3Events = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV3EventsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v3/events";
        var client = this.securityClient;
        var headers = __assign(__assign({}, GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetV3EventsId - Get metadata for a single event
    /**
     * This endpoint returns the detailed event metadata for a specified event. Getty Images news, sports and entertainment
     * photographers and videographers cover editorially relevant events occurring around the world.
     * All images or video clips produced in association with an event, are assigned the same EventID.
     * EventIDs are part of the meta-data returned in SearchForImages Results. Only content produced under a Getty Images
     * brand name (Getty Images News, Getty Images Sports, Getty Images Entertainment, Film Magic, Wire Image) will be
     * consistently assigned an EventID. The Event framework may also be used to group similar content, such as
     * "Hats from the Royal Wedding" or "Odd-ballOffbeat images of the week".
     *
     * You'll need an API key and access token to use this resource.
     *
    **/
    SDK.prototype.GetV3EventsId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV3EventsIdRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v3/events/{id}", req.pathParams);
        var client = this.securityClient;
        var headers = __assign(__assign({}, GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetV3Images - Get metadata for multiple images by supplying multiple image ids
    /**
     * This endpoint returns the detailed image metadata for all specified images.
     *
     * You'll need an API key and access token to use this resource.
     *
     * ## Working with Fields Sets
     *
     * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
     *
     * #### Summary Fields Set
     *
     * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build
     * search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
     *
     * ```
     * {
     *     "images":
     *     [
     *         "artist",
     *         "asset_family",
     *         "caption",
     *         "collection_code",
     *         "collection_id",
     *         "collection_name",
     *         "license_model",
     *         "max_dimensions",
     *         "title"
     *     ]
     * }
     * ```
     *
     * #### Detail Fields Set
     *
     * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a
     * detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.
     *
     * ```
     * {
     *     "images":
     *     [
     *         "allowed_use",
     *         "artist",
     *         "artist_title",
     *         "asset_family",
     *         "call_for_image",
     *         "caption",
     *         "city",
     *         "collection_code",
     *         "collection_id",
     *         "collection_name",
     *         "color_type",
     *         "copyright",
     *         "country",
     *         "credit_line",
     *         "date_created",
     *         "date_submitted",
     *         "download_sizes",
     *         "editorial_segments",
     *         "event_ids",
     *         "graphical_style",
     *         "license_model",
     *         "max_dimensions",
     *         "orientation",
     *         "product_types",
     *         "quality_rank",
     *         "referral_destinations",
     *         "state_province",
     *         "title"
     *     ]
     * }
     * ```
     *
     * #### Display Fields Set
     *
     * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution
     * files that are most frequently used to build a UI displaying search results. The following fields are provided for every image
     * in your result set when you include **display_set** in your request.
     *
     * ```
     * {
     *     "images":
     *     [
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "comp"
     *             },
     *             {
     *                 "name": "preview"
     *             },
     *             {
     *                 "name": "thumb"
     *             }
     *         ]
     *     ]
     * }
     * ```
     *
     * ## Request Usage Considerations
     *
     * - Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.
     *
    **/
    SDK.prototype.GetV3Images = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV3ImagesRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v3/images";
        var client = this.securityClient;
        var headers = __assign(__assign({}, GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.imagesDetailResults = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 403:
                    break;
                case 404:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetV3ImagesId - Get metadata for a single image by supplying one image id
    /**
     * This endpoint returns the detailed image metadata for a specified image.
     *
     * You'll need an API key and access token to use this resource.
     *
     * ## Working with Fields Sets
     *
     * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
     *
     * #### Summary Fields Set
     *
     * The **summary_set** query string parameter fields value represents a small batch of metadata fields that
     * are often used to build search response results. The following fields are provided for every image in your
     * result set when you include **summary_set** in your request.
     *
     * ```
     * {
     *     "images":
     *     [
     *         "artist",
     *         "asset_family",
     *         "caption",
     *         "collection_code",
     *         "collection_id",
     *         "collection_name",
     *         "license_model",
     *         "max_dimensions",
     *         "title"
     *     ]
     * }
     * ```
     *
     * #### Detail Fields Set
     *
     * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are
     * often used to build a detailed view of images. The following fields are provided for every image in your
     * result set when you include **detail_set** in your request.
     *
     * ```
     * {
     *     "images":
     *     [
     *         "allowed_use",
     *         "artist",
     *         "artist_title",
     *         "asset_family",
     *         "call_for_image",
     *         "caption",
     *         "city",
     *         "collection_code",
     *         "collection_id",
     *         "collection_name",
     *         "color_type",
     *         "copyright",
     *         "country",
     *         "credit_line",
     *         "date_created",
     *         "date_submitted",
     *         "download_sizes",
     *         "editorial_segments",
     *         "event_ids",
     *         "graphical_style",
     *         "license_model",
     *         "max_dimensions",
     *         "orientation",
     *         "product_types",
     *         "quality_rank",
     *         "referral_destinations",
     *         "state_province",
     *         "title"
     *     ]
     * }
     * ```
     *
     * #### Display Fields Set
     *
     * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low
     * resolution files that are most frequently used to build a UI displaying search results. The following fields are provided
     * for every image in your result set when you include **display_set** in your request.
     *
     * ```
     * {
     *     "images":
     *     [
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "comp"
     *             },
     *             {
     *                 "name": "preview"
     *             },
     *             {
     *                 "name": "thumb"
     *             }
     *         ]
     *     ]
     * }
     * ```
     *
     * ## Request Usage Considerations
     *
     * - Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.
     *
    **/
    SDK.prototype.GetV3ImagesId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV3ImagesIdRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v3/images/{id}", req.pathParams);
        var client = this.securityClient;
        var headers = __assign(__assign({}, GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.imagesDetailResults = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 403:
                    break;
                case 404:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetV3ImagesIdDownloadhistory - Returns information about a customer's download history for a specific asset
    SDK.prototype.GetV3ImagesIdDownloadhistory = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV3ImagesIdDownloadhistoryRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v3/images/{id}/downloadhistory", req.pathParams);
        var client = this.securityClient;
        var headers = __assign(__assign({}, GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.assetDownloadHistoryResults = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 403:
                    break;
                case 404:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetV3ImagesIdSameSeries - Retrieve creative images from the same series
    /**
     * This endpoint will provide the list of images, if any exist, from the same series as the specified creative asset id. These images are typically from the same photo shoot. This functionality will not work for editorial assets.
     *
     * You'll need an API key and access token to use this resource.
     *
     * ## Working with Fields Sets
     *
     * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
     *
     * #### Summary Fields Set
     *
     * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build
     * search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
     *
     * ```
     * {
     *     "images":
     *     [
     *         "asset_family",
     *         "caption",
     *         "collection_code",
     *         "collection_id",
     *         "collection_name",
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "thumb"
     *             }
     *         ]
     *         "license_model",
     *         "max_dimensions",
     *         "title"
     *     ]
     * }
     * ```
     *
     * #### Detail Fields Set
     *
     * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a
     * detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.
     *
     * ```
     * {
     *     "images":
     *     [
     *         "allowed_use",
     *         "artist",
     *         "asset_family",
     *         "call_for_image",
     *         "caption",
     *         "collection_code",
     *         "collection_id",
     *         "collection_name",
     *         "copyright",
     *         "date_created",
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "comp"
     *             },
     *             {
     *                 "name": "preview"
     *             },
     *             {
     *                 "name": "thumb"
     *             }
     *         ],
     *         "editorial_segments",
     *         "event_ids",
     *         "graphical_style",
     *         "license_model",
     *         "max_dimensions",
     *         "orientation",
     *         "product_types",
     *         "quality_rank",
     *         "referral_destinations",
     *         "title"
     *     ]
     * }
     * ```
     *
     * #### Display Fields Set
     *
     * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files
     * that are most frequently used to build a UI displaying search results. The following fields are provided for every image in your result
     * set when you include **display_set** in your request.
     *
     * ```
     * {
     *     "images":
     *     [
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "comp"
     *             },
     *             {
     *                 "name": "preview"
     *             },
     *             {
     *                 "name": "thumb"
     *             }
     *         ]
     *     ]
     * }
     * ```
    **/
    SDK.prototype.GetV3ImagesIdSameSeries = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV3ImagesIdSameSeriesRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v3/images/{id}/same-series", req.pathParams);
        var client = this.securityClient;
        var headers = __assign(__assign({}, GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.imageSearchItemSearchResults = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 403:
                    break;
                case 404:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetV3ImagesIdSimilar - Retrieve similar images
    /**
     * This endpoint will provide a list of images that are similar to the specified asset id.
     *
     * You'll need an API key and access token to use this resource.
     *
     * ## Working with Fields Sets
     *
     * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
     *
     * #### Summary Fields Set
     *
     * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build
     * search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
     *
     * ```
     * {
     *     "images":
     *     [
     *         "asset_family",
     *         "caption",
     *         "collection_code",
     *         "collection_id",
     *         "collection_name",
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "thumb"
     *             }
     *         ]
     *         "license_model",
     *         "max_dimensions",
     *         "title"
     *     ]
     * }
     * ```
     *
     * #### Detail Fields Set
     *
     * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a
     * detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.
     *
     * ```
     * {
     *     "images":
     *     [
     *         "allowed_use",
     *         "artist",
     *         "asset_family",
     *         "call_for_image",
     *         "caption",
     *         "collection_code",
     *         "collection_id",
     *         "collection_name",
     *         "copyright",
     *         "date_created",
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "comp"
     *             },
     *             {
     *                 "name": "preview"
     *             },
     *             {
     *                 "name": "thumb"
     *             }
     *         ],
     *         "editorial_segments",
     *         "event_ids",
     *         "graphical_style",
     *         "license_model",
     *         "max_dimensions",
     *         "orientation",
     *         "product_types",
     *         "quality_rank",
     *         "referral_destinations",
     *         "title"
     *     ]
     * }
     * ```
     *
     * #### Display Fields Set
     *
     * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files
     * that are most frequently used to build a UI displaying search results. The following fields are provided for every image in your result
     * set when you include **display_set** in your request.
     *
     * ```
     * {
     *     "images":
     *     [
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "comp"
     *             },
     *             {
     *                 "name": "preview"
     *             },
     *             {
     *                 "name": "thumb"
     *             }
     *         ]
     *     ]
     * }
     * ```
    **/
    SDK.prototype.GetV3ImagesIdSimilar = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV3ImagesIdSimilarRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v3/images/{id}/similar", req.pathParams);
        var client = this.securityClient;
        var headers = __assign(__assign({}, GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.imageSearchItemSearchResults = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 403:
                    break;
                case 404:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetV3OrdersId - Get order metadata
    /**
     * This endpoint returns detailed order metadata for a specified order.
     * Use of this endpoint requires configuration changes to your API key.
     *
     * You'll need an API key and access token to use this resource.
    **/
    SDK.prototype.GetV3OrdersId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV3OrdersIdRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v3/orders/{id}", req.pathParams);
        var client = this.securityClient;
        var headers = __assign(__assign({}, GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
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
                    if (MatchContentType(contentType, "application/json")) {
                        res.orderDetail = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    break;
                case 403:
                    break;
                case 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetV3Products - Get Products
    /**
     * This endpoint returns all products available to the username used during authentication. As such, this endpoint requires the use of
     * a fully authorized access_token. The product data can then be used as search filters, restricting results to images from a specific product.
     *
     * You'll need an API key and access token to use this resource.
     *
    **/
    SDK.prototype.GetV3Products = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV3ProductsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v3/products";
        var client = this.securityClient;
        var headers = __assign(__assign({}, GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.productsResult = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetV3PurchasedAssets - Get Previously Purchased Images and Video
    /**
     * This endpoint returns a list of all assets purchased on gettyimages.com by the username used for authentication.
     * Use of this endpoint requires configuration changes to your API key. Please contact your sales representative
     * to learn more.
     *
     * You'll need an API key and access token to use this resource.
     *
    **/
    SDK.prototype.GetV3PurchasedAssets = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV3PurchasedAssetsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v3/purchased-assets";
        var client = this.securityClient;
        var headers = __assign(__assign({}, GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.previousAssetPurchases = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 403:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetV3SearchEvents - Search for events
    /**
     * Use this endpoint to search Getty Images news, sports and entertainment events. Getty Images photographers and videographers cover editorially relevant events occurring around the world.  All images or video clips produced in association with an event, are assigned the same EventID. EventIDs are part of the meta-data returned in Search Results. Only content produced under a Getty Images brand name (Getty Images News, Getty Images Sports, Getty Images Entertainment, Film Magic, Wire Image) will be consistently assigned an EventID. The Event framework may also be used to group similar content, such as "Hats from the Royal Wedding" or "Odd-ballOffbeat images of the week".
     *
     * You'll need an API key and access token to use this resource.
     *
     *
     * You can show different information in the response by specifying values on the "fields" parameter (see details below).
     * You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.
     *
    **/
    SDK.prototype.GetV3SearchEvents = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV3SearchEventsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v3/search/events";
        var client = this.securityClient;
        var headers = __assign(__assign({}, GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.eventsSearchResult = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 403:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetV3SearchImages - Search for both creative and editorial images
    /**
     * Use this endpoint to search over a blend of our contemporary stock photos, illustrations, archival images, editorial photos, illustrations and archival images. Because this draws from such a large diversity of content, the results will not be as relevant as when the more specific Creative or Editorial endpoints are used. Additionally, the response time for this endpoint is slower compared to that for Creative and Editorial-specific endpoints. For these reasons, it is highly recommended that those endpoints are used instead of this blended endpoint.
     *
     * You'll need an API key and access token to use this resource.
     *
     * You can show different information in the response by specifying values on the "fields" parameter (see details below).
     * You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.<br>
     * To include your API token in the search request, add it to the headers as a Bearer token (example in curl):
     *
     * 	-H "Authorization: Bearer <your-token>"
     *
     * ## Working with Fields Sets
     *
     * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
     *
     * #### Summary Fields Set
     *
     * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
     *
     * ```
     * {
     *     "images":
     *     [
     *         "asset_family",
     *         "caption",
     *         "collection_code",
     *         "collection_id",
     *         "collection_name",
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "thumb"
     *             }
     *         ],
     *         "license_model",
     *         "max_dimensions",
     *         "title"
     *     ]
     * }
     * ```
     *
     * #### Detail Fields Set
     *
     * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of images.
     * The following fields are provided for every image in your result set when you include **detail_set** in your request.
     *
     * ```
     * {
     *     "images":
     *     [
     *         "allowed_use",
     *         "artist",
     *         "asset_family",
     *         "call_for_image",
     *         "caption",
     *         "collection_code",
     *         "collection_id",
     *         "collection_name",
     *         "copyright",
     *         "date_created",
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "comp"
     *             },
     *             {
     *                 "name": "preview"
     *             },
     *             {
     *                 "name": "thumb"
     *             }
     *         ],
     *         "editorial_segments",
     *         "event_ids",
     *         "graphical_style",
     *         "license_model",
     *         "max_dimensions",
     *         "orientation",
     *         "product_types",
     *         "quality_rank",
     *         "referral_destinations",
     *         "title"
     *     ]
     * ]
     * ```
     *
     * #### Display Fields Set
     *
     * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most
     * frequently used to build a UI displaying search results. The following fields are provided for every image in your result set when you include **display_set**
     * in your request.
     *
     * ```
     * {
     *     "images":
     *     [
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "comp"
     *             },
     *             {
     *                 "name": "preview"
     *             },
     *             {
     *                 "name": "thumb"
     *             }
     *         ]
     *     ]
     * }
     * ```
     *
     * ## Request Usage Considerations
     *
     * - Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.
     *
    **/
    SDK.prototype.GetV3SearchImages = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV3SearchImagesRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v3/search/images";
        var client = this.securityClient;
        var headers = __assign(__assign({}, GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.imageSearchItemSearchResults = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 403:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetV3SearchImagesCreative - Search for creative images only
    /**
     * Use this endpoint to search our contemporary stock photos, illustrations and archival images.
     *
     * You'll need an API key and access token to use this resource.
     *
     * You can show different information in the response by specifying values on the "fields" parameter (see details below).
     * You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.
     *
     * ## Working with Fields Sets
     *
     * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
     *
     * #### Summary Fields Set
     *
     * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to
     * build search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
     *
     * ```
     * {
     *     "images":
     *     [
     *         "asset_family",
     *         "caption",
     *         "collection_code",
     *         "collection_id",
     *         "collection_name",
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "thumb"
     *             }
     *         ],
     *         "license_model",
     *         "max_dimensions",
     *         "title"
     *     ]
     * }
     * ```
     *
     * #### Detail Fields Set
     *
     * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to
     * build a detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.
     *
     * ```
     * {
     *     "images":
     *     [
     *         "allowed_use",
     *         "artist",
     *         "asset_family",
     *         "call_for_image",
     *         "caption",
     *         "collection_code",
     *         "collection_id",
     *         "collection_name",
     *         "copyright",
     *         "date_created",
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "comp"
     *             },
     *             {
     *                 "name": "preview"
     *             },
     *             {
     *                 "name": "thumb"
     *             }
     *         ],
     *         "editorial_segments",
     *         "event_ids",
     *         "graphical_style",
     *         "license_model",
     *         "max_dimensions",
     *         "orientation",
     *         "product_types",
     *         "quality_rank",
     *         "referral_destinations",
     *         "title"
     *     ]
     * ]
     * ```
     *
     * #### Display Fields Set
     *
     * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution
     * files that are most frequently used to build a UI displaying search results. The following fields are provided for every image
     * in your result set when you include **display_set** in your request.
     *
     * ```Go
     * {
     *     "images":
     *     [
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "comp"
     *             },
     *             {
     *                 "name": "preview"
     *             },
     *             {
     *                 "name": "thumb"
     *             }
     *         ]
     *     ]
     * }
     * ```
     *
    **/
    SDK.prototype.GetV3SearchImagesCreative = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV3SearchImagesCreativeRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v3/search/images/creative";
        var client = this.securityClient;
        var headers = __assign(__assign({}, GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.creativeImageSearchResults = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 403:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetV3SearchImagesCreativeByImage - Search for creative images based on url
    /**
     * Allows searching for similar creative images by passing the URL to an existing image. All responses will have the exclude_nudity filter automatically applied.
     *
     * Before calling the search by image endpoint, an image must be uploaded to a specific AWS S3 bucket. The bucket name is `search-by-image.s3.amazonaws.com`.
     * For example, using cURL:
     * ```sh
     * curl -i -X PUT https://search-by-image.s3.amazonaws.com/my-test-image.jpg -H "Content-Type: image/jpeg" --data-binary "@testimage.jpg"
     * ```
     *
     * Uploads can be overwritten if the names are the same, so using a prefix like the API Key, application name or company name is recommended. Uploads will expire from the bucket after 24 hours.
     *
     * Once the image has been uploaded, use the full URL in the `image_url` parameter, e.g. `image_url=https://search-by-image.s3.amazonaws.com/my-test-image.jpg`.
     *
     * <!-- TODO/HACK from https://app.clickup.com/t/8mfmv3 - Uncomment this if image_fingerprint ever comes back to be useful -->
     * <!-- Subsequent searches for the same image can be executed using the `image_fingerprint` that is returned by the initial search. -->
     *
    **/
    SDK.prototype.GetV3SearchImagesCreativeByImage = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV3SearchImagesCreativeByImageRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v3/search/images/creative/by-image";
        var client = this.securityClient;
        var headers = __assign(__assign({}, GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.searchByImageResourceResults = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 403:
                    break;
                case 404:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetV3SearchImagesEditorial - Search for editorial images only
    /**
     * Use this endpoint to search our editorial stock photos, illustrations and archival images.  Editorial images represent newsworthy events or illustrate matters of general interest, such as news, sport and entertainment and are generally intended for editorial use.
     *
     * You'll need an API key and access token to use this resource.
     *
     * You can show different information in the response by specifying values on the "fields" parameter (see details below).
     * You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.
     * To include your API token in the search request, add it to the headers as a Bearer token (example in curl):
     *
     * 	-H "Authorization: Bearer <your-token>"
     *
     * ## Working with Fields Sets
     *
     * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
     *
     * #### Summary Fields Set
     *
     * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
     *
     * ```
     * {
     *     "images":
     *     [
     *         "asset_family",
     *         "caption",
     *         "collection_code",
     *         "collection_id",
     *         "collection_name",
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "thumb"
     *             }
     *         ],
     *         "license_model",
     *         "max_dimensions",
     *         "title"
     *     ]
     * }
     * ```
     *
     * #### Detail Fields Set
     *
     * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.
     *
     * ```
     * {
     *     "images":
     *     [
     *         "allowed_use",
     *         "artist",
     *         "asset_family",
     *         "call_for_image",
     *         "caption",
     *         "collection_code",
     *         "collection_id",
     *         "collection_name",
     *         "copyright",
     *         "date_created",
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "comp"
     *             },
     *             {
     *                 "name": "preview"
     *             },
     *             {
     *                 "name": "thumb"
     *             }
     *         ],
     *         "editorial_segments",
     *         "event_ids",
     *         "graphical_style",
     *         "license_model",
     *         "max_dimensions",
     *         "orientation",
     *         "product_types",
     *         "quality_rank",
     *         "referral_destinations",
     *         "title"
     *     ]
     * ]
     * ```
     *
     * #### Display Fields Set
     *
     * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every image in your result set when you include **display_set** in your request.
     *
     * ```
     * {
     *     "images":
     *     [
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "comp"
     *             },
     *             {
     *                 "name": "preview"
     *             },
     *             {
     *                 "name": "thumb"
     *             }
     *         ]
     *     ]
     * }
     * ```
     *
     * ## Request Usage Considerations
     *
     * - Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.
     *
    **/
    SDK.prototype.GetV3SearchImagesEditorial = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV3SearchImagesEditorialRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v3/search/images/editorial";
        var client = this.securityClient;
        var headers = __assign(__assign({}, GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.editorialImageSearchResults = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 403:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetV3SearchVideosCreative - Search for creative videos
    /**
     * Use this endpoint to search premium stock video, from archival film to contemporary 4K and HD footage.
     *
     * You'll need an API key and access token to use this resource.
     *
     * You can show different information in the response by specifying values on the "fields" parameter (see details below).
     * You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without
     * being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only
     * assets that you have a license to use, you need to also include an authorization token in the header of your request.
     * Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens.
     *
     * ## Working with Fields Sets
     *
     * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
     *
     * #### Summary Fields Set
     *
     * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search
     * response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.
     *
     * ```
     * {
     *     "videos":
     *     [
     *         "asset_family",
     *         "caption",
     *         "collection_code",
     *         "collection_name",
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "comp"
     *             },
     *             {
     *                 "name": "preview"
     *             },
     *             {
     *                 "name": "thumb"
     *             }
     *         ],
     *         "license_model",
     *         "title"
     *     ]
     * }
     * ```
     *
     * #### Detail Fields Set
     *
     * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a
     * detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.
     *
     * ```
     * {
     *     "videos":
     *     [
     *         "allowed_use",
     *         "artist",
     *         "asset_family",
     * 		"call_for_image",
     *         "caption",
     *         "clip_length",
     *         "collection_code",
     *         "collection_id",
     *         "collection_name",
     *         "color_type",
     *         "copyright",
     *         "date_created",
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "comp"
     *             },
     *             {
     *                 "name": "preview"
     *             },
     *             {
     *                 "name": "thumb"
     *             }
     *         ],
     *         "era",
     *         "license_model",
     *         "mastered_to",
     *         "originally_shot_on",
     *         "product_types",
     *         "quality_rank",
     *         "shot_speed",
     *         "source",
     *         "title"
     *     ]
     * }
     * ```
     *
     * #### Display Fields Set
     *
     * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files
     * that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result
     * set when you include **display_set** in your request.
     *
     * ```
     * {
     *     "videos":
     *     [
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "comp"
     *             },
     *             {
     *                 "name": "preview"
     *             },
     *             {
     *                 "name": "thumb"
     *             }
     *         ]
     *     ]
     * }
     * ```
    **/
    SDK.prototype.GetV3SearchVideosCreative = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV3SearchVideosCreativeRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v3/search/videos/creative";
        var client = this.securityClient;
        var headers = __assign(__assign({}, GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.creativeVideoSearchResults = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 403:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetV3SearchVideosCreativeByImage - Search for creative videos based on url
    /**
     * Search for **similar creative videos** by passing an `asset_id` to an asset in our catalog OR `image_url` to any image or a frame grab from a video. All responses will have the exclude_nudity filter automatically applied.
     *
     * ## Searching by URL
     *
     * When searching by `image_url`, an image or frame grab in JPEG format must be uploaded to a specific AWS S3 bucket. The bucket name is `search-by-image.s3.amazonaws.com`.
     * Example using cURL:
     * ```sh
     * curl -i -X PUT https://search-by-image.s3.amazonaws.com/my-test-image.jpg -H "Content-Type: image/jpeg" --data-binary "@testimage.jpg"
     * ```
     *
     * Uploads will be overwritten if the names are the same, so using a prefix like the API Key, application name or company name is recommended. Uploads will expire from the bucket after 24 hours.
     *
     * Once the JPEG has been uploaded, use the full URL in the `image_url` parameter, e.g. `image_url=https://search-by-image.s3.amazonaws.com/my-test-image.jpg`.
     *
     * ## Searching by asset id
     *
     * When searching by `asset_id`, any image or video asset id in the Getty/iStock catalog can be used.
    **/
    SDK.prototype.GetV3SearchVideosCreativeByImage = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV3SearchVideosCreativeByImageRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v3/search/videos/creative/by-image";
        var client = this.securityClient;
        var headers = __assign(__assign({}, GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.creativeVideoSearchResults = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 403:
                    break;
                case 404:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetV3SearchVideosEditorial - Search for editorial videos
    /**
     * Use this endpoint to search current and archival video clips of celebrities, newsmakers, and events.
     *
     * You'll need an API key and access token to use this resource.
     *
     * You can show different information in the response by specifying values on the "fields" parameter (see details below).
     * You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.
     *
     * ## Working with Fields Sets
     *
     * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
     *
     * #### Summary Fields Set
     *
     * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.
     *
     * ```
     * {
     *     "videos":
     *     [
     *         "asset_family",
     *         "caption",
     *         "collection_code",
     *         "collection_name",
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "comp"
     *             },
     *             {
     *                 "name": "preview"
     *             },
     *             {
     *                 "name": "thumb"
     *             }
     *         ],
     *         "license_model",
     *         "title"
     *     ]
     * }
     * ```
     *
     * #### Detail Fields Set
     *
     * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.
     *
     * ```
     * {
     *     "videos":
     *     [
     *         "allowed_use",
     *         "artist",
     *         "asset_family",
     * 		"call_for_image",
     *         "caption",
     *         "clip_length",
     *         "collection_code",
     *         "collection_id",
     *         "collection_name",
     *         "color_type",
     *         "copyright",
     *         "date_created",
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "comp"
     *             },
     *             {
     *                 "name": "preview"
     *             },
     *             {
     *                 "name": "thumb"
     *             }
     *         ],
     *         "era",
     *         "event_ids",
     *         "license_model",
     *         "mastered_to",
     *         "originally_shot_on",
     *         "product_types",
     *         "quality_rank",
     *         "shot_speed",
     *         "source",
     *         "title"
     *     ]
     * }
     * ```
     *
     * #### Display Fields Set
     *
     * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.
     *
     * ```
     * {
     *     "videos":
     *     [
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "comp"
     *             },
     *             {
     *                 "name": "preview"
     *             },
     *             {
     *                 "name": "thumb"
     *             }
     *         ]
     *     ]
     * }
     * ```
     *
     * ## Request Usage Considerations
     *
     * - Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.
     *
    **/
    SDK.prototype.GetV3SearchVideosEditorial = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV3SearchVideosEditorialRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v3/search/videos/editorial";
        var client = this.securityClient;
        var headers = __assign(__assign({}, GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.editorialVideoSearchResults = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 403:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetV3Videos - Get metadata for multiple videos by supplying multiple video ids
    /**
     * Use this endpoint to return detailed video metadata for all the specified video ids.
     *
     * You'll need an API key and access token to use this resource.
     *
     * You can show different information in the response by specifying values on the "fields" parameter (see details below).
     * You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.
     *
     * ## Working with Fields Sets
     *
     * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
     *
     * #### Summary Fields Set
     *
     * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.
     *
     * ```
     * {
     *     "videos":
     *     [
     *         "asset_family",
     *         "caption",
     *         "collection_code",
     *         "collection_name",
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "comp"
     *             },
     *             {
     *                 "name": "preview"
     *             },
     *             {
     *                 "name": "thumb"
     *             }
     *         ],
     *         "license_model",
     *         "title"
     *     ]
     * }
     * ```
     *
     * #### Detail Fields Set
     *
     * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.
     *
     * ```
     * {
     *     "videos":
     *     [
     *         "allowed_use",
     *         "artist",
     *         "asset_family",
     * 		"call_for_image",
     *         "caption",
     *         "clip_length",
     *         "collection_code",
     *         "collection_id",
     *         "collection_name",
     *         "color_type",
     *         "copyright",
     *         "date_created",
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "comp"
     *             },
     *             {
     *                 "name": "preview"
     *             },
     *             {
     *                 "name": "thumb"
     *             }
     *         ],
     *         "download_sizes",
     *         "era",
     *         "event_ids",
     *         "license_model",
     *         "mastered_to",
     *         "originally_shot_on",
     *         "product_types",
     *         "quality_rank",
     *         "shot_speed",
     *         "source",
     *         "title"
     *     ]
     * }
     * ```
     *
     * #### Display Fields Set
     *
     * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.
     *
     * ```
     * {
     *     "videos":
     *     [
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "comp"
     *             },
     *             {
     *                 "name": "preview"
     *             },
     *             {
     *                 "name": "thumb"
     *             }
     *         ]
     *     ]
     * }
     * ```
     *
     * ## Request Usage Considerations
     *
     * - Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.
     *
    **/
    SDK.prototype.GetV3Videos = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV3VideosRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v3/videos";
        var client = this.securityClient;
        var headers = __assign(__assign({}, GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 403:
                    break;
                case 404:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetV3VideosId - Get metadata for a single video by supplying one video id
    /**
     * Use this endpoint to return detailed video metadata for the specified video id.
     *
     * You'll need an API key and access token to use this resource.
     *
     * You can show different information in the response by specifying values on the "fields" parameter (see details below).
     * You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.
     *
     * ## Working with Fields Sets
     *
     * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
     *
     * #### Summary Fields Set
     *
     * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.
     *
     * ```
     * {
     *     "videos":
     *     [
     *         "asset_family",
     *         "caption",
     *         "collection_code",
     *         "collection_name",
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "comp"
     *             },
     *             {
     *                 "name": "preview"
     *             },
     *             {
     *                 "name": "thumb"
     *             }
     *         ],
     *         "license_model",
     *         "title"
     *     ]
     * }
     * ```
     *
     * #### Detail Fields Set
     *
     * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.
     *
     * ```
     * {
     *     "videos":
     *     [
     *         "allowed_use",
     *         "artist",
     *         "asset_family",
     * 		"call_for_image",
     *         "caption",
     *         "clip_length",
     *         "collection_code",
     *         "collection_id",
     *         "collection_name",
     *         "color_type",
     *         "copyright",
     *         "date_created",
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "comp"
     *             },
     *             {
     *                 "name": "preview"
     *             },
     *             {
     *                 "name": "thumb"
     *             }
     *         ],
     *         "download_sizes",
     *         "era",
     *         "event_ids",
     *         "license_model",
     *         "mastered_to",
     *         "originally_shot_on",
     *         "product_types",
     *         "quality_rank",
     *         "shot_speed",
     *         "source",
     *         "title"
     *     ]
     * }
     * ```
     *
     * #### Display Fields Set
     *
     * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.
     *
     * ```
     * {
     *     "videos":
     *     [
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "comp"
     *             },
     *             {
     *                 "name": "preview"
     *             },
     *             {
     *                 "name": "thumb"
     *             }
     *         ]
     *     ]
     * }
     * ```
     *
     * ## Request Usage Considerations
     *
     * - Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.
     *
    **/
    SDK.prototype.GetV3VideosId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV3VideosIdRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v3/videos/{id}", req.pathParams);
        var client = this.securityClient;
        var headers = __assign(__assign({}, GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 403:
                    break;
                case 404:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetV3VideosIdDownloadhistory - Returns information about a customer's download history for a specific asset
    SDK.prototype.GetV3VideosIdDownloadhistory = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV3VideosIdDownloadhistoryRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v3/videos/{id}/downloadhistory", req.pathParams);
        var client = this.securityClient;
        var headers = __assign(__assign({}, GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.assetDownloadHistoryResults = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 403:
                    break;
                case 404:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetV3VideosIdSameSeries - Retrieve creative videos from the same series
    /**
     * This endpoint will provide the list of videos, if any exist, from the same series as the specified creative asset id. These images are typically from the same photo shoot. This functionality will not work for editorial assets.
     *
     * You'll need an API key and access token to use this resource.
     *
     * ## Working with Fields Sets
     *
     * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
     *
     * #### Summary Fields Set
     *
     * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.
     *
     * ```
     * {
     *     "videos":
     *     [
     *         "asset_family",
     *         "caption",
     *         "collection_code",
     *         "collection_name",
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "comp"
     *             },
     *             {
     *                 "name": "preview"
     *             },
     *             {
     *                 "name": "thumb"
     *             }
     *         ],
     *         "license_model",
     *         "title"
     *     ]
     * }
     * ```
     *
     * #### Detail Fields Set
     *
     * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.
     *
     * ```
     * {
     *     "videos":
     *     [
     *         "allowed_use",
     *         "artist",
     *         "asset_family",
     * 		"call_for_image",
     *         "caption",
     *         "clip_length",
     *         "collection_code",
     *         "collection_id",
     *         "collection_name",
     *         "color_type",
     *         "copyright",
     *         "date_created",
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "comp"
     *             },
     *             {
     *                 "name": "preview"
     *             },
     *             {
     *                 "name": "thumb"
     *             }
     *         ],
     *         "download_sizes",
     *         "era",
     *         "license_model",
     *         "mastered_to",
     *         "originally_shot_on",
     *         "product_types",
     *         "quality_rank",
     *         "shot_speed",
     *         "source",
     *         "title"
     *     ]
     * }
     * ```
     *
     * #### Display Fields Set
     *
     * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.
     *
     * ```
     * {
     *     "videos":
     *     [
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "comp"
     *             },
     *             {
     *                 "name": "preview"
     *             },
     *             {
     *                 "name": "thumb"
     *             }
     *         ]
     *     ]
     * }
     * ```
    **/
    SDK.prototype.GetV3VideosIdSameSeries = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV3VideosIdSameSeriesRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v3/videos/{id}/same-series", req.pathParams);
        var client = this.securityClient;
        var headers = __assign(__assign({}, GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 403:
                    break;
                case 404:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetV3VideosIdSimilar - Retrieve similar videos
    /**
     * This endpoint will provide a list of videos that are similar to the specified asset id.
     *
     * You'll need an API key and access token to use this resource.
     *
     * ## Working with Fields Sets
     *
     * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
     *
     * #### Summary Fields Set
     *
     * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.
     *
     * ```
     * {
     *     "videos":
     *     [
     *         "asset_family",
     *         "caption",
     *         "collection_code",
     *         "collection_name",
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "comp"
     *             },
     *             {
     *                 "name": "preview"
     *             },
     *             {
     *                 "name": "thumb"
     *             }
     *         ],
     *         "license_model",
     *         "title"
     *     ]
     * }
     * ```
     *
     * #### Detail Fields Set
     *
     * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.
     *
     * ```
     * {
     *     "videos":
     *     [
     *         "allowed_use",
     *         "artist",
     *         "asset_family",
     * 		"call_for_image",
     *         "caption",
     *         "clip_length",
     *         "collection_code",
     *         "collection_id",
     *         "collection_name",
     *         "color_type",
     *         "copyright",
     *         "date_created",
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "comp"
     *             },
     *             {
     *                 "name": "preview"
     *             },
     *             {
     *                 "name": "thumb"
     *             }
     *         ],
     *         "download_sizes",
     *         "era",
     *         "event_ids",
     *         "license_model",
     *         "mastered_to",
     *         "originally_shot_on",
     *         "product_types",
     *         "quality_rank",
     *         "shot_speed",
     *         "source",
     *         "title"
     *     ]
     * }
     * ```
     *
     * #### Display Fields Set
     *
     * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.
     *
     * ```
     * {
     *     "videos":
     *     [
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "comp"
     *             },
     *             {
     *                 "name": "preview"
     *             },
     *             {
     *                 "name": "thumb"
     *             }
     *         ]
     *     ]
     * }
     * ```
    **/
    SDK.prototype.GetV3VideosIdSimilar = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetV3VideosIdSimilarRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v3/videos/{id}/similar", req.pathParams);
        var client = this.securityClient;
        var headers = __assign(__assign({}, GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 403:
                    break;
                case 404:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // PostV3AssetLicensingAssetId - Endpoint for acquiring extended licenses with iStock credits for an asset.
    SDK.prototype.PostV3AssetLicensingAssetId = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV3AssetLicensingAssetIdRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v3/asset-licensing/{assetId}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign(__assign({}, GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .post(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.assetLicensingResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 402:
                    break;
                case 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // PostV3Boards - Create a new board
    SDK.prototype.PostV3Boards = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV3BoardsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v3/boards";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .post(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 201:
                    if (MatchContentType(contentType, "application/json")) {
                        res.boardCreated = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // PostV3BoardsBoardIdComments - Add a comment to a board
    SDK.prototype.PostV3BoardsBoardIdComments = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV3BoardsBoardIdCommentsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v3/boards/{board_id}/comments", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .post(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 201:
                    if (MatchContentType(contentType, "application/json")) {
                        res.commentCreated = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 403:
                    break;
                case 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // PostV3DownloadsImagesId - Download an image
    /**
     * Use this endpoint to generate download URLs and related data for images you are authorized to download.
     *
     * Most product offerings have enforced periodic download limits such as monthly, weekly, and daily. When this operation executes, the count of allowed downloads is decremented by one for the product offering. Once the download limit is reached for a given product offering, no further downloads may be requested for that product offering until the next download period.
     *
     * The download limit for a given download period is covered in your product agreement established with Getty Images.
     *
     * You'll need an API key and a [Resource Owner Grant or Implicit Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource.
     *
     * ## Auto Downloads
     * The `auto_download` request query parameter specifies whether to automatically download the image.
     *
     * If the `auto_download` request query parameter is set to _true_, the API will return an HTTP status code 303 *See Other*. Your client code will need to process this response and redirect to the URI specified in the *Location* header to enable you to automatically download the file. The redirection workflow follows the [HTTP 1.1 protocol](https://tools.ietf.org/html/rfc7231#section-6.4.4).
     *
     * Client Request:
     *
     * ```
     * https://api.gettyimages.com/v3/downloads/images/[asset_id]?auto_download=true
     * ```
     *
     * Server Response:
     *
     * ```
     * HTTP/1.1 303 See Other
     * Location: https://delivery.gettyimages.com/...
     * ```
     *
     * If the `auto_download` request query parameter is set to false, the API will return a HTTP status code 200, along with the URI in the response body which can be used to download the image.
     *
     * Client Request:
     *
     * ```
     * https://api.gettyimages.com/v3/downloads/images/[asset_id]?auto_download=false
     * ```
     *
     * Server Response:
     *
     * ```
     * HTTP/1.1 200 OK
     * {
     * 	"uri": "https://delivery.gettyimages.com/..."
     * }
     * ```
     * ## Downloading Via the Returned URI
     *
     * The URI returned by this call should be considered opaque and the format could change at any time.
     * In order to get the filename, length or file type, the response headers must be inspected. An example
     * response follows:
     *
     * ```
     * content-length: 33959979
     * content-type: image/jpeg
     * content-disposition: attachment; filename=GettyImages-1167612765.jpg
     * ```
     *
     * The `content-disposition` header must be parsed to get a usable filename.
     *
     * ## Download URI expiration
     *
     * Download URIs are _**only valid for 24 hours**_, starting from the moment they are returned from this call.
     *
    **/
    SDK.prototype.PostV3DownloadsImagesId = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV3DownloadsImagesIdRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v3/downloads/images/{id}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign(__assign({}, GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .post(url, body, __assign({ headers: headers }, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
                case 303:
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // PostV3DownloadsVideosId - Download a video
    /**
     * Use this endpoint to generate download URLs and related data for videos you are authorized to download.
     *
     * Most product offerings have enforced periodic download limits such as monthly, weekly, and daily. When this operation executes, the count of allowed downloads is decremented by one for the product offering. Once the download limit is reached for a given product offering, no further downloads may be requested for that product offering until the next download period.
     *
     * The download limit for a given download period is covered in your product agreement established with Getty Images.
     *
     * You'll need an API key and a [Resource Owner Grant or Implicit Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource.
     *
     * ## Auto Downloads
     * The `auto_download` request query parameter specifies whether to automatically download the video.
     *
     * If the `auto_download` request query parameter is set to _true_, the API will return an HTTP status code 303 *See Other*. Your client code will need to process this response and redirect to the URI specified in the *Location* header to enable you to automatically download the file. The redirection workflow follows the [HTTP 1.1 protocol](https://tools.ietf.org/html/rfc7231#section-6.4.4).
     *
     * Client Request:
     *
     * ```
     * https://api.gettyimages.com/v3/downloads/videos/[asset_id]?auto_download=true
     * ```
     *
     * Server Response:
     *
     * ```
     * HTTP/1.1 303 See Other
     * Location: https://delivery.gettyimages.com/...
     * ```
     *
     * If the `auto_download` request query parameter is set to false, the API will return a HTTP status code 200, along with the URI in the response body which can be used to download the video.
     *
     * Client Request:
     *
     * ```
     * https://api.gettyimages.com/v3/downloads/videos/[asset_id]?auto_download=false
     * ```
     *
     * Server Response:
     *
     * ```
     * HTTP/1.1 200 OK
     * {
     * 	"uri": "https://delivery.gettyimages.com/..."
     * }
     * ```
     *
     * ## Downloading Via the Returned URI
     *
     * The URI returned by this call should be considered opaque and the format could change at any time.
     * In order to get the filename, length or file type, the response headers must be inspected. An example
     * response follows:
     *
     * ```
     * content-length: 283925783
     * content-type: video/quicktime
     * content-disposition: attachment; filename=GettyImages-690773579.mov
     * ```
     *
     * The `content-disposition` header must be parsed to get a usable filename.
     *
     * ## Download URI expiration
     *
     * Download URIs are _**only valid for 24 hours**_, starting from the moment they are returned from this call.
     *
    **/
    SDK.prototype.PostV3DownloadsVideosId = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostV3DownloadsVideosIdRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v3/downloads/videos/{id}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign(__assign({}, GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .post(url, body, __assign({ headers: headers }, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
                case 303:
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // PutV3AssetChangesChangeSets - Get asset change notifications.
    /**
     * # Asset Changes
     *
     * Get notifications about new, updated or deleted assets.
     *
     * ##  Quickstart
     *
     * You'll need an API key and an access token to use this resource.
     *
     * Notifications older than 60 days will be removed from partner channels.
     *
    **/
    SDK.prototype.PutV3AssetChangesChangeSets = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutV3AssetChangesChangeSetsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v3/asset-changes/change-sets";
        var client = this.securityClient;
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .put(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.assetChanges = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 201:
                    if (MatchContentType(contentType, "application/json")) {
                        res.assetChanges = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 403:
                    break;
                case 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // PutV3BoardsBoardId - Update a board
    SDK.prototype.PutV3BoardsBoardId = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutV3BoardsBoardIdRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v3/boards/{board_id}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .put(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    break;
                case 204:
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 403:
                    break;
                case 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // PutV3BoardsBoardIdAssets - Add assets to a board
    SDK.prototype.PutV3BoardsBoardIdAssets = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutV3BoardsBoardIdAssetsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v3/boards/{board_id}/assets", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .put(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 201:
                    if (MatchContentType(contentType, "application/json")) {
                        res.addBoardAssetsResult = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 403:
                    break;
                case 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // PutV3BoardsBoardIdAssetsAssetId - Add an asset to a board
    SDK.prototype.PutV3BoardsBoardIdAssetsAssetId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutV3BoardsBoardIdAssetsAssetIdRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v3/boards/{board_id}/assets/{asset_id}", req.pathParams);
        var client = this.securityClient;
        return client
            .put(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 201:
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 403:
                    break;
                case 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // PutV3UsageBatchesId - Report usage of assets via a batch format.
    /**
     * # Report Usage
     *
     * Use this endpoint to report the usages of a set of assets. The count of assets submitted in a single batch to this endpoint is limited to 1000. Note that all asset Ids specified must be valid or the operation will fail causing no usages to be recorded. In this case, you will need to remove the invalid asset Ids from the query request and re-submit the query.
     *
     * ##  Quickstart
     *
     * You'll need an API key and a [Resource Owner Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource.
     * Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key.
     *
     * _Note_: Date of use can be in any unambiguous date format.
     *
    **/
    SDK.prototype.PutV3UsageBatchesId = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutV3UsageBatchesIdRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/v3/usage-batches/{id}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .put(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 201:
                    if (MatchContentType(contentType, "application/json")) {
                        res.reportUsageBatchResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 401:
                    break;
                case 403:
                    break;
                case 409:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return SDK;
}());
export { SDK };

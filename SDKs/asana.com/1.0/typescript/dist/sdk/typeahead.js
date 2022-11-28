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
var Typeahead = /** @class */ (function () {
    function Typeahead(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * typeaheadForWorkspace - Get objects via typeahead
     *
     * Retrieves objects in the workspace based via an auto-completion/typeahead
     * search algorithm. This feature is meant to provide results quickly, so do
     * not rely on this API to provide extremely accurate search results. The
     * result set is limited to a single page of results with a maximum size, so
     * you won’t be able to fetch large numbers of results.
     *
     * The typeahead search API provides search for objects from a single
     * workspace. This endpoint should be used to query for objects when
     * creating an auto-completion/typeahead search feature. This API is meant
     * to provide results quickly and should not be relied upon for accurate or
     * exhaustive search results. The results sets are limited in size and
     * cannot be paginated.
     *
     * Queries return a compact representation of each object which is typically
     * the gid and name fields. Interested in a specific set of fields or all of
     * the fields?! Of course you are. Use field selectors to manipulate what
     * data is included in a response.
     *
     * Resources with type `user` are returned in order of most contacted to
     * least contacted. This is determined by task assignments, adding the user
     * to projects, and adding the user as a follower to tasks, messages,
     * etc.
     *
     * Resources with type `project` are returned in order of recency. This is
     * determined when the user visits the project, is added to the project, and
     * completes tasks in the project.
     *
     * Resources with type `task` are returned with priority placed on tasks
     * the user is following, but no guarantee on the order of those tasks.
     *
     * Leaving the `query` string empty or omitted will give you results, still
     * following the resource ordering above. This could be used to list users or
     * projects that are relevant for the requesting user's api token.
    **/
    Typeahead.prototype.typeaheadForWorkspace = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.TypeaheadForWorkspaceRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/workspaces/{workspace_gid}/typeahead", req.pathParams);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.typeaheadForWorkspace200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 500:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return Typeahead;
}());
export { Typeahead };

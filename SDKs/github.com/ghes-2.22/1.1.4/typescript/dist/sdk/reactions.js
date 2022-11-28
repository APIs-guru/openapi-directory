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
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";
var Reactions = /** @class */ (function () {
    function Reactions(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * reactionsCreateForCommitComment - Create reaction for a commit comment
     *
     * Create a reaction to a [commit comment](https://docs.github.com/enterprise-server@2.22/rest/reference/repos#comments). A response with an HTTP `200` status means that you already added the reaction type to this commit comment.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#create-reaction-for-a-commit-comment - API method documentation
    **/
    Reactions.prototype.reactionsCreateForCommitComment = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ReactionsCreateForCommitCommentRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/comments/{comment_id}/reactions", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._defaultClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "post", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.reaction = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.reaction = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 415:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.reactionsCreateForCommitComment415ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 422:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.validationError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * reactionsCreateForIssue - Create reaction for an issue
     *
     * Create a reaction to an [issue](https://docs.github.com/enterprise-server@2.22/rest/reference/issues/). A response with an HTTP `200` status means that you already added the reaction type to this issue.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#create-reaction-for-an-issue - API method documentation
    **/
    Reactions.prototype.reactionsCreateForIssue = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ReactionsCreateForIssueRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/issues/{issue_number}/reactions", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._defaultClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "post", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.reaction = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.reaction = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 415:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.reactionsCreateForIssue415ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 422:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.validationError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * reactionsCreateForIssueComment - Create reaction for an issue comment
     *
     * Create a reaction to an [issue comment](https://docs.github.com/enterprise-server@2.22/rest/reference/issues#comments). A response with an HTTP `200` status means that you already added the reaction type to this issue comment.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#create-reaction-for-an-issue-comment - API method documentation
    **/
    Reactions.prototype.reactionsCreateForIssueComment = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ReactionsCreateForIssueCommentRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._defaultClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "post", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.reaction = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.reaction = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 415:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.reactionsCreateForIssueComment415ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 422:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.validationError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * reactionsCreateForPullRequestReviewComment - Create reaction for a pull request review comment
     *
     * Create a reaction to a [pull request review comment](https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#comments). A response with an HTTP `200` status means that you already added the reaction type to this pull request review comment.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#create-reaction-for-a-pull-request-review-comment - API method documentation
    **/
    Reactions.prototype.reactionsCreateForPullRequestReviewComment = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ReactionsCreateForPullRequestReviewCommentRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._defaultClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "post", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.reaction = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.reaction = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 415:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.reactionsCreateForPullRequestReviewComment415ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 422:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.validationError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * reactionsCreateForTeamDiscussionCommentInOrg - Create reaction for a team discussion comment
     *
     * Create a reaction to a [team discussion comment](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion comment.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#create-reaction-for-a-team-discussion-comment - API method documentation
    **/
    Reactions.prototype.reactionsCreateForTeamDiscussionCommentInOrg = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ReactionsCreateForTeamDiscussionCommentInOrgRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._defaultClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "post", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.reaction = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.reaction = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * reactionsCreateForTeamDiscussionCommentLegacy - Create reaction for a team discussion comment (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new "[Create reaction for a team discussion comment](https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#create-reaction-for-a-team-discussion-comment)" endpoint.
     *
     * Create a reaction to a [team discussion comment](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion comment.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/reactions/#create-reaction-for-a-team-discussion-comment-legacy - API method documentation
    **/
    Reactions.prototype.reactionsCreateForTeamDiscussionCommentLegacy = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ReactionsCreateForTeamDiscussionCommentLegacyRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._defaultClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "post", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.reaction = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * reactionsCreateForTeamDiscussionInOrg - Create reaction for a team discussion
     *
     * Create a reaction to a [team discussion](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#create-reaction-for-a-team-discussion - API method documentation
    **/
    Reactions.prototype.reactionsCreateForTeamDiscussionInOrg = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ReactionsCreateForTeamDiscussionInOrgRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._defaultClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "post", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.reaction = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.reaction = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * reactionsCreateForTeamDiscussionLegacy - Create reaction for a team discussion (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Create reaction for a team discussion`](https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#create-reaction-for-a-team-discussion) endpoint.
     *
     * Create a reaction to a [team discussion](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/reactions/#create-reaction-for-a-team-discussion-legacy - API method documentation
    **/
    Reactions.prototype.reactionsCreateForTeamDiscussionLegacy = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ReactionsCreateForTeamDiscussionLegacyRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/teams/{team_id}/discussions/{discussion_number}/reactions", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._defaultClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "post", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.reaction = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * reactionsDeleteForCommitComment - Delete a commit comment reaction
     *
     * **Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/comments/:comment_id/reactions/:reaction_id`.
     *
     * Delete a reaction to a [commit comment](https://docs.github.com/enterprise-server@2.22/rest/reference/repos#comments).
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#delete-a-commit-comment-reaction - API method documentation
    **/
    Reactions.prototype.reactionsDeleteForCommitComment = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ReactionsDeleteForCommitCommentRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * reactionsDeleteForIssue - Delete an issue reaction
     *
     * **Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/issues/:issue_number/reactions/:reaction_id`.
     *
     * Delete a reaction to an [issue](https://docs.github.com/enterprise-server@2.22/rest/reference/issues/).
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#delete-an-issue-reaction - API method documentation
    **/
    Reactions.prototype.reactionsDeleteForIssue = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ReactionsDeleteForIssueRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * reactionsDeleteForIssueComment - Delete an issue comment reaction
     *
     * **Note:** You can also specify a repository by `repository_id` using the route `DELETE delete /repositories/:repository_id/issues/comments/:comment_id/reactions/:reaction_id`.
     *
     * Delete a reaction to an [issue comment](https://docs.github.com/enterprise-server@2.22/rest/reference/issues#comments).
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#delete-an-issue-comment-reaction - API method documentation
    **/
    Reactions.prototype.reactionsDeleteForIssueComment = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ReactionsDeleteForIssueCommentRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * reactionsDeleteForPullRequestComment - Delete a pull request comment reaction
     *
     * **Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/pulls/comments/:comment_id/reactions/:reaction_id.`
     *
     * Delete a reaction to a [pull request review comment](https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#review-comments).
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#delete-a-pull-request-comment-reaction - API method documentation
    **/
    Reactions.prototype.reactionsDeleteForPullRequestComment = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ReactionsDeleteForPullRequestCommentRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * reactionsDeleteForTeamDiscussion - Delete team discussion reaction
     *
     * **Note:** You can also specify a team or organization with `team_id` and `org_id` using the route `DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions/:reaction_id`.
     *
     * Delete a reaction to a [team discussion](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#delete-team-discussion-reaction - API method documentation
    **/
    Reactions.prototype.reactionsDeleteForTeamDiscussion = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ReactionsDeleteForTeamDiscussionRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * reactionsDeleteForTeamDiscussionComment - Delete team discussion comment reaction
     *
     * **Note:** You can also specify a team or organization with `team_id` and `org_id` using the route `DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions/:reaction_id`.
     *
     * Delete a reaction to a [team discussion comment](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#delete-team-discussion-comment-reaction - API method documentation
    **/
    Reactions.prototype.reactionsDeleteForTeamDiscussionComment = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ReactionsDeleteForTeamDiscussionCommentRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * reactionsDeleteLegacy - Delete a reaction (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Reactions API. We recommend migrating your existing code to use the new delete reactions endpoints. For more information, see this [blog post](https://developer.github.com/changes/2020-02-26-new-delete-reactions-endpoints/).
     *
     * OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), when deleting a [team discussion](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#discussions) or [team discussion comment](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#discussion-comments).
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/reactions/#delete-a-reaction-legacy - API method documentation
    **/
    Reactions.prototype.reactionsDeleteLegacy = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ReactionsDeleteLegacyRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/reactions/{reaction_id}", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 304:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 410:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 415:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.reactionsDeleteLegacy415ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * reactionsListForCommitComment - List reactions for a commit comment
     *
     * List the reactions to a [commit comment](https://docs.github.com/enterprise-server@2.22/rest/reference/repos#comments).
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#list-reactions-for-a-commit-comment - API method documentation
    **/
    Reactions.prototype.reactionsListForCommitComment = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ReactionsListForCommitCommentRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/comments/{comment_id}/reactions", req.pathParams);
        var client = this._defaultClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.reactions = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 415:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.reactionsListForCommitComment415ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * reactionsListForIssue - List reactions for an issue
     *
     * List the reactions to an [issue](https://docs.github.com/enterprise-server@2.22/rest/reference/issues).
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#list-reactions-for-an-issue - API method documentation
    **/
    Reactions.prototype.reactionsListForIssue = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ReactionsListForIssueRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/issues/{issue_number}/reactions", req.pathParams);
        var client = this._defaultClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.reactions = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 410:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 415:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.reactionsListForIssue415ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * reactionsListForIssueComment - List reactions for an issue comment
     *
     * List the reactions to an [issue comment](https://docs.github.com/enterprise-server@2.22/rest/reference/issues#comments).
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#list-reactions-for-an-issue-comment - API method documentation
    **/
    Reactions.prototype.reactionsListForIssueComment = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ReactionsListForIssueCommentRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions", req.pathParams);
        var client = this._defaultClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.reactions = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 415:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.reactionsListForIssueComment415ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * reactionsListForPullRequestReviewComment - List reactions for a pull request review comment
     *
     * List the reactions to a [pull request review comment](https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#review-comments).
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#list-reactions-for-a-pull-request-review-comment - API method documentation
    **/
    Reactions.prototype.reactionsListForPullRequestReviewComment = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ReactionsListForPullRequestReviewCommentRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions", req.pathParams);
        var client = this._defaultClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.reactions = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 415:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.reactionsListForPullRequestReviewComment415ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * reactionsListForTeamDiscussionCommentInOrg - List reactions for a team discussion comment
     *
     * List the reactions to a [team discussion comment](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#discussion-comments/). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#list-reactions-for-a-team-discussion-comment - API method documentation
    **/
    Reactions.prototype.reactionsListForTeamDiscussionCommentInOrg = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ReactionsListForTeamDiscussionCommentInOrgRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions", req.pathParams);
        var client = this._defaultClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.reactions = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * reactionsListForTeamDiscussionCommentLegacy - List reactions for a team discussion comment (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List reactions for a team discussion comment`](https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#list-reactions-for-a-team-discussion-comment) endpoint.
     *
     * List the reactions to a [team discussion comment](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#discussion-comments). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/reactions/#list-reactions-for-a-team-discussion-comment-legacy - API method documentation
    **/
    Reactions.prototype.reactionsListForTeamDiscussionCommentLegacy = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ReactionsListForTeamDiscussionCommentLegacyRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions", req.pathParams);
        var client = this._defaultClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.reactions = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * reactionsListForTeamDiscussionInOrg - List reactions for a team discussion
     *
     * List the reactions to a [team discussion](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#discussions). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#list-reactions-for-a-team-discussion - API method documentation
    **/
    Reactions.prototype.reactionsListForTeamDiscussionInOrg = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ReactionsListForTeamDiscussionInOrgRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions", req.pathParams);
        var client = this._defaultClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.reactions = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * reactionsListForTeamDiscussionLegacy - List reactions for a team discussion (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List reactions for a team discussion`](https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#list-reactions-for-a-team-discussion) endpoint.
     *
     * List the reactions to a [team discussion](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#discussions). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/reactions/#list-reactions-for-a-team-discussion-legacy - API method documentation
    **/
    Reactions.prototype.reactionsListForTeamDiscussionLegacy = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ReactionsListForTeamDiscussionLegacyRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/teams/{team_id}/discussions/{discussion_number}/reactions", req.pathParams);
        var client = this._defaultClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.reactions = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return Reactions;
}());
export { Reactions };

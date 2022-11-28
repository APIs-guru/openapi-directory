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
var Gitignore = /** @class */ (function () {
    function Gitignore(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * gitignoreGetAllTemplates - Get all gitignore templates
     *
     * List all templates available to pass as an option when [creating a repository](https://docs.github.com/enterprise-server@2.20/rest/reference/repos#create-a-repository-for-the-authenticated-user).
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/gitignore#get-all-gitignore-templates - API method documentation
    **/
    Gitignore.prototype.gitignoreGetAllTemplates = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/gitignore/templates";
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.gitignoreGetAllTemplates200ApplicationJsonStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 304:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * gitignoreGetTemplate - Get a gitignore template
     *
     * The API also allows fetching the source of a single template.
     * Use the raw [media type](https://docs.github.com/enterprise-server@2.20/rest/overview/media-types/) to get the raw contents.
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/gitignore#get-a-gitignore-template - API method documentation
    **/
    Gitignore.prototype.gitignoreGetTemplate = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GitignoreGetTemplateRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/gitignore/templates/{name}", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.gitignoreTemplate = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 304:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return Gitignore;
}());
export { Gitignore };

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
var EmailTemplates = /** @class */ (function () {
    function EmailTemplates(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * listAvailableEmailTemplates - List Available Email Templates
     *
     * Use this endpoint to get a list of available templates in your Braze account.
     *
     * Use the Template REST APIs to programmatically manage the email templates that you have stored on the Braze dashboard, on the Templates & Media page. Braze provides two endpoints for creating and updating your email templates.
     *
     * ### Successful Response Properties
     * ```json
     * {
     *   "count": number of templates returned
     *   "templates": [template with the following properties]:
     *     "email_template_id": (string) your email template's API Identifier,
     *     "template_name": (string) the name of your email template,
     *     "created_at": (string, in ISO 8601),
     *     "updated_at": (string, in ISO 8601),
     *     "tags": (array of strings) tags appended to the template
     * }
     *   ```
    **/
    EmailTemplates.prototype.listAvailableEmailTemplates = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListAvailableEmailTemplatesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/templates/email/list";
        var client = this._defaultClient;
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
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * seeEmailTemplateInformation - See Email Template Information
     *
     * Use to get information on your email templates.
     *
     * Use the Template REST APIs to programmatically manage the email templates that you have stored on the Braze dashboard, on the Templates & Media page. Braze provides two endpoints for creating and updating your email templates.
     *
     * ### Request Components
     * - [Template Identifier](https://www.braze.com/docs/api/identifier_types/)
    **/
    EmailTemplates.prototype.seeEmailTemplateInformation = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.SeeEmailTemplateInformationRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/templates/email/info";
        var client = this._defaultClient;
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
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return EmailTemplates;
}());
export { EmailTemplates };

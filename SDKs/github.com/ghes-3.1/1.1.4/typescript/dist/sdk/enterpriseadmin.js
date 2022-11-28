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
var EnterpriseAdmin = /** @class */ (function () {
    function EnterpriseAdmin(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * enterpriseAdminAddAuthorizedSshKey - Add an authorized SSH key
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#add-an-authorized-ssh-key - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminAddAuthorizedSshKey = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminAddAuthorizedSshKeyRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/setup/api/settings/authorized-keys";
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
                        res.sshKeys = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterprise - Add organization access to a self-hosted runner group in an enterprise
     *
     * Adds an organization to the list of selected organizations that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an enterprise](#create-a-self-hosted-runner-group-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#add-organization-access-to-a-self-hosted-runner-group-in-an-enterprise - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterprise = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations/{org_id}", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "put" }, config)).then(function (httpRes) {
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
     * enterpriseAdminAddSelfHostedRunnerToGroupForEnterprise - Add a self-hosted runner to a group for an enterprise
     *
     * Adds a self-hosted runner to a runner group configured in an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise`
     * scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#add-a-self-hosted-runner-to-a-group-for-an-enterprise - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminAddSelfHostedRunnerToGroupForEnterprise = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners/{runner_id}", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "put" }, config)).then(function (httpRes) {
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
     * enterpriseAdminCreateEnterpriseServerLicense - Create a GitHub license
     *
     * When you boot a GitHub instance for the first time, you can use the following endpoint to upload a license:
     *
     * Note that you need to POST to [`/setup/api/configure`](https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#start-a-configuration-process) to start the actual configuration process.
     *
     * When using this endpoint, your GitHub instance must have a password set. This can be accomplished two ways:
     *
     * 1.  If you're working directly with the API before accessing the web interface, you must pass in the password parameter to set your password.
     * 2.  If you set up your instance via the web interface before accessing the API, your calls to this endpoint do not need the password parameter.
     *
     * For a list of the available settings, see the [Get settings endpoint](https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#get-settings).
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#create-a-github-enterprise-server-license - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminCreateEnterpriseServerLicense = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminCreateEnterpriseServerLicenseRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/setup/api/start";
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminCreateGlobalWebhook - Create a global webhook
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#create-a-global-webhook - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminCreateGlobalWebhook = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminCreateGlobalWebhookRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/admin/hooks";
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
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
                        res.globalHook = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminCreateImpersonationOAuthToken - Create an impersonation OAuth token
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#create-an-impersonation-oauth-token - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminCreateImpersonationOAuthToken = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminCreateImpersonationOAuthTokenRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/admin/users/{username}/authorizations", req.pathParams);
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
                        res.authorization = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminCreateOrg - Create an organization
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#create-an-organization - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminCreateOrg = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminCreateOrgRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/admin/organizations";
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
                        res.organizationSimple = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminCreatePreReceiveEnvironment - Create a pre-receive environment
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#create-a-pre-receive-environment - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminCreatePreReceiveEnvironment = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminCreatePreReceiveEnvironmentRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/admin/pre-receive-environments";
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
                        res.preReceiveEnvironment = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminCreatePreReceiveHook - Create a pre-receive hook
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#create-a-pre-receive-hook - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminCreatePreReceiveHook = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminCreatePreReceiveHookRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/admin/pre-receive-hooks";
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
                        res.preReceiveHook = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminCreateRegistrationTokenForEnterprise - Create a registration token for an enterprise
     *
     * Returns a token that you can pass to the `config` script. The token expires after one hour.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * #### Example using registration token
     *
     * Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.
     *
     * ```
     * ./config.sh --url https://github.com/enterprises/octo-enterprise --token TOKEN
     * ```
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#create-a-registration-token-for-an-enterprise - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminCreateRegistrationTokenForEnterprise = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminCreateRegistrationTokenForEnterpriseRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/enterprises/{enterprise}/actions/runners/registration-token", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.authenticationToken = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminCreateRemoveTokenForEnterprise - Create a remove token for an enterprise
     *
     * Returns a token that you can pass to the `config` script to remove a self-hosted runner from an enterprise. The token expires after one hour.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * #### Example using remove token
     *
     * To remove your self-hosted runner from an enterprise, replace `TOKEN` with the remove token provided by this
     * endpoint.
     *
     * ```
     * ./config.sh remove --token TOKEN
     * ```
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#create-a-remove-token-for-an-enterprise - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminCreateRemoveTokenForEnterprise = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminCreateRemoveTokenForEnterpriseRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/enterprises/{enterprise}/actions/runners/remove-token", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.authenticationToken = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminCreateSelfHostedRunnerGroupForEnterprise - Create a self-hosted runner group for an enterprise
     *
     * Creates a new self-hosted runner group for an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#create-self-hosted-runner-group-for-an-enterprise - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminCreateSelfHostedRunnerGroupForEnterprise = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/enterprises/{enterprise}/actions/runner-groups", req.pathParams);
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
                        res.runnerGroupsEnterprise = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminCreateUser - Create a user
     *
     * If an external authentication mechanism is used, the login name should match the login name in the external system. If you are using LDAP authentication, you should also [update the LDAP mapping](https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#update-ldap-mapping-for-a-user) for the user.
     *
     * The login name will be normalized to only contain alphanumeric characters or single hyphens. For example, if you send `"octo_cat"` as the login, a user named `"octo-cat"` will be created.
     *
     * If the login name or email address is already associated with an account, the server will return a `422` response.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#create-a-user - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminCreateUser = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminCreateUserRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/admin/users";
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
                        res.simpleUser = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminDeleteGlobalWebhook - Delete a global webhook
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#delete-a-global-webhook - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminDeleteGlobalWebhook = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminDeleteGlobalWebhookRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/admin/hooks/{hook_id}", req.pathParams);
        var client = this._defaultClient;
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "delete", headers: headers }, config)).then(function (httpRes) {
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
     * enterpriseAdminDeleteImpersonationOAuthToken - Delete an impersonation OAuth token
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#delete-an-impersonation-oauth-token - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminDeleteImpersonationOAuthToken = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminDeleteImpersonationOAuthTokenRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/admin/users/{username}/authorizations", req.pathParams);
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
     * enterpriseAdminDeletePersonalAccessToken - Delete a personal access token
     *
     * Deletes a personal access token. Returns a `403 - Forbidden` status when a personal access token is in use. For example, if you access this endpoint with the same personal access token that you are trying to delete, you will receive this error.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#delete-a-personal-access-token - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminDeletePersonalAccessToken = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminDeletePersonalAccessTokenRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/admin/tokens/{token_id}", req.pathParams);
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
     * enterpriseAdminDeletePreReceiveEnvironment - Delete a pre-receive environment
     *
     * If you attempt to delete an environment that cannot be deleted, you will receive a `422 Unprocessable Entity` response.
     *
     * The possible error messages are:
     *
     * *   _Cannot modify or delete the default environment_
     * *   _Cannot delete environment that has hooks_
     * *   _Cannot delete environment when download is in progress_
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#delete-a-pre-receive-environment - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminDeletePreReceiveEnvironment = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminDeletePreReceiveEnvironmentRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/admin/pre-receive-environments/{pre_receive_environment_id}", req.pathParams);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 422:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.enterpriseAdminDeletePreReceiveEnvironment422ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminDeletePreReceiveHook - Delete a pre-receive hook
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#delete-a-pre-receive-hook - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminDeletePreReceiveHook = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminDeletePreReceiveHookRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/admin/pre-receive-hooks/{pre_receive_hook_id}", req.pathParams);
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
     * enterpriseAdminDeletePublicKey - Delete a public key
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#delete-a-public-key - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminDeletePublicKey = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminDeletePublicKeyRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/admin/keys/{key_ids}", req.pathParams);
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
     * enterpriseAdminDeleteSelfHostedRunnerFromEnterprise - Delete a self-hosted runner from an enterprise
     *
     * Forces the removal of a self-hosted runner from an enterprise. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#delete-self-hosted-runner-from-an-enterprise - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminDeleteSelfHostedRunnerFromEnterprise = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/enterprises/{enterprise}/actions/runners/{runner_id}", req.pathParams);
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
     * enterpriseAdminDeleteSelfHostedRunnerGroupFromEnterprise - Delete a self-hosted runner group from an enterprise
     *
     * Deletes a self-hosted runner group for an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#delete-a-self-hosted-runner-group-from-an-enterprise - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminDeleteSelfHostedRunnerGroupFromEnterprise = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}", req.pathParams);
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
     * enterpriseAdminDeleteUser - Delete a user
     *
     * Deleting a user will delete all their repositories, gists, applications, and personal settings. [Suspending a user](https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#suspend-a-user) is often a better option.
     *
     * You can delete any user account except your own.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#delete-a-user - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminDeleteUser = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminDeleteUserRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/admin/users/{username}", req.pathParams);
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
     * enterpriseAdminDemoteSiteAdministrator - Demote a site administrator
     *
     * You can demote any user account except your own.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#demote-a-site-administrator - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminDemoteSiteAdministrator = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminDemoteSiteAdministratorRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/users/{username}/site_admin", req.pathParams);
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
     * enterpriseAdminDisableSelectedOrganizationGithubActionsEnterprise - Disable a selected organization for GitHub Actions in an enterprise
     *
     * Removes an organization from the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#disable-a-selected-organization-for-github-actions-in-an-enterprise - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminDisableSelectedOrganizationGithubActionsEnterprise = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/enterprises/{enterprise}/actions/permissions/organizations/{org_id}", req.pathParams);
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
     * enterpriseAdminEnableOrDisableMaintenanceMode - Enable or disable maintenance mode
     *
     * The possible values for `enabled` are `true` and `false`. When it's `false`, the attribute `when` is ignored and the maintenance mode is turned off. `when` defines the time period when the maintenance was enabled.
     *
     * The possible values for `when` are `now` or any date parseable by [mojombo/chronic](https://github.com/mojombo/chronic).
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#enable-or-disable-maintenance-mode - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminEnableOrDisableMaintenanceMode = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminEnableOrDisableMaintenanceModeRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/setup/api/maintenance";
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
                        res.maintenanceStatus = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminEnableSelectedOrganizationGithubActionsEnterprise - Enable a selected organization for GitHub Actions in an enterprise
     *
     * Adds an organization to the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#enable-a-selected-organization-for-github-actions-in-an-enterprise - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminEnableSelectedOrganizationGithubActionsEnterprise = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/enterprises/{enterprise}/actions/permissions/organizations/{org_id}", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "put" }, config)).then(function (httpRes) {
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
     * enterpriseAdminGetAllAuthorizedSshKeys - Get all authorized SSH keys
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#get-all-authorized-ssh-keys - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminGetAllAuthorizedSshKeys = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/setup/api/settings/authorized-keys";
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
                        res.sshKeys = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminGetAllowedActionsEnterprise - Get allowed actions for an enterprise
     *
     * Gets the selected actions that are allowed in an enterprise. To use this endpoint, the enterprise permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#get-allowed-actions-for-an-enterprise - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminGetAllowedActionsEnterprise = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminGetAllowedActionsEnterpriseRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/enterprises/{enterprise}/actions/permissions/selected-actions", req.pathParams);
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
                        res.selectedActions = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminGetAnnouncement - Get the global announcement banner
     *
     * Gets the current message and expiration date of the global announcement banner in your enterprise.
    **/
    EnterpriseAdmin.prototype.enterpriseAdminGetAnnouncement = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/enterprise/announcement";
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
                        res.announcement = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminGetConfigurationStatus - Get the configuration status
     *
     * This endpoint allows you to check the status of the most recent configuration process:
     *
     * Note that you may need to wait several seconds after you start a process before you can check its status.
     *
     * The different statuses are:
     *
     * | Status        | Description                       |
     * | ------------- | --------------------------------- |
     * | `PENDING`     | The job has not started yet       |
     * | `CONFIGURING` | The job is running                |
     * | `DONE`        | The job has finished correctly    |
     * | `FAILED`      | The job has finished unexpectedly |
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#get-the-configuration-status - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminGetConfigurationStatus = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/setup/api/configcheck";
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
                        res.configurationStatus = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminGetDownloadStatusForPreReceiveEnvironment - Get the download status for a pre-receive environment
     *
     * In addition to seeing the download status at the "[Get a pre-receive environment](#get-a-pre-receive-environment)" endpoint, there is also this separate endpoint for just the download status.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#get-the-download-status-for-a-pre-receive-environment - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminGetDownloadStatusForPreReceiveEnvironment = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/admin/pre-receive-environments/{pre_receive_environment_id}/downloads/latest", req.pathParams);
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
                        res.preReceiveEnvironmentDownloadStatus = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminGetGithubActionsPermissionsEnterprise - Get GitHub Actions permissions for an enterprise
     *
     * Gets the GitHub Actions permissions policy for organizations and allowed actions in an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#get-github-actions-permissions-for-an-enterprise - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminGetGithubActionsPermissionsEnterprise = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminGetGithubActionsPermissionsEnterpriseRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/enterprises/{enterprise}/actions/permissions", req.pathParams);
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
                        res.actionsEnterprisePermissions = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminGetGlobalWebhook - Get a global webhook
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#get-a-global-webhook - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminGetGlobalWebhook = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminGetGlobalWebhookRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/admin/hooks/{hook_id}", req.pathParams);
        var client = this._defaultClient;
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.globalHook = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminGetLicenseInformation - Get license information
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#get-license-information - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminGetLicenseInformation = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/enterprise/settings/license";
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
                        res.licenseInfo = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminGetMaintenanceStatus - Get the maintenance status
     *
     * Check your installation's maintenance status:
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#get-the-maintenance-status - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminGetMaintenanceStatus = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/setup/api/maintenance";
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
                        res.maintenanceStatus = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminGetPreReceiveEnvironment - Get a pre-receive environment
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#get-a-pre-receive-environment - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminGetPreReceiveEnvironment = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminGetPreReceiveEnvironmentRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/admin/pre-receive-environments/{pre_receive_environment_id}", req.pathParams);
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
                        res.preReceiveEnvironment = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminGetPreReceiveHook - Get a pre-receive hook
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#get-a-pre-receive-hook - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminGetPreReceiveHook = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminGetPreReceiveHookRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/admin/pre-receive-hooks/{pre_receive_hook_id}", req.pathParams);
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
                        res.preReceiveHook = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminGetPreReceiveHookForOrg - Get a pre-receive hook for an organization
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-an-organization - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminGetPreReceiveHookForOrg = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminGetPreReceiveHookForOrgRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}", req.pathParams);
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
                        res.orgPreReceiveHook = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminGetPreReceiveHookForRepo - Get a pre-receive hook for a repository
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-a-repository - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminGetPreReceiveHookForRepo = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminGetPreReceiveHookForRepoRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}", req.pathParams);
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
                        res.repositoryPreReceiveHook = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminGetSelfHostedRunnerForEnterprise - Get a self-hosted runner for an enterprise
     *
     * Gets a specific self-hosted runner configured in an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#get-a-self-hosted-runner-for-an-enterprise - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminGetSelfHostedRunnerForEnterprise = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminGetSelfHostedRunnerForEnterpriseRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/enterprises/{enterprise}/actions/runners/{runner_id}", req.pathParams);
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
                        res.runner = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminGetSelfHostedRunnerGroupForEnterprise - Get a self-hosted runner group for an enterprise
     *
     * Gets a specific self-hosted runner group for an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#get-a-self-hosted-runner-group-for-an-enterprise - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminGetSelfHostedRunnerGroupForEnterprise = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}", req.pathParams);
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
                        res.runnerGroupsEnterprise = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminGetSettings - Get settings
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#get-settings - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminGetSettings = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/setup/api/settings";
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
                        res.enterpriseSettings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminGetTypeStats - Get statistics
     *
     * There are a variety of types to choose from:
     *
     * | Type         | Description                                                                                         |
     * | ------------ | --------------------------------------------------------------------------------------------------- |
     * | `issues`     | The number of open and closed issues.                                                               |
     * | `hooks`      | The number of active and inactive hooks.                                                            |
     * | `milestones` | The number of open and closed milestones.                                                           |
     * | `orgs`       | The number of organizations, teams, team members, and disabled organizations.                       |
     * | `comments`   | The number of comments on issues, pull requests, commits, and gists.                                |
     * | `pages`      | The number of GitHub Pages sites.                                                                   |
     * | `users`      | The number of suspended and admin users.                                                            |
     * | `gists`      | The number of private and public gists.                                                             |
     * | `pulls`      | The number of merged, mergeable, and unmergeable pull requests.                                     |
     * | `repos`      | The number of organization-owned repositories, root repositories, forks, pushed commits, and wikis. |
     * | `all`        | All of the statistics listed above.                                                                 |
     *
     * These statistics are cached and will be updated approximately every 10 minutes.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#get-statistics - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminGetTypeStats = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminGetTypeStatsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/enterprise/stats/{type}", req.pathParams);
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
                        res.enterpriseAdminGetTypeStats200ApplicationJsonAnyOf = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminListGlobalWebhooks - List global webhooks
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#list-global-webhooks - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminListGlobalWebhooks = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminListGlobalWebhooksRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/admin/hooks";
        var client = this._defaultClient;
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get", headers: headers }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.globalHooks = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise - List organization access to a self-hosted runner group in an enterprise
     *
     * Lists the organizations with access to a self-hosted runner group.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#list-organization-access-to-a-self-hosted-runner-group-in-a-enterprise - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations", req.pathParams);
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
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.enterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminListPersonalAccessTokens - List personal access tokens
     *
     * Lists personal access tokens for all users, including admin users.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#list-personal-access-tokens - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminListPersonalAccessTokens = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminListPersonalAccessTokensRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/admin/tokens";
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
                        res.authorizations = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminListPreReceiveEnvironments - List pre-receive environments
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#list-pre-receive-environments - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminListPreReceiveEnvironments = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminListPreReceiveEnvironmentsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/admin/pre-receive-environments";
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
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.preReceiveEnvironments = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminListPreReceiveHooks - List pre-receive hooks
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#list-pre-receive-hooks - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminListPreReceiveHooks = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminListPreReceiveHooksRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/admin/pre-receive-hooks";
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
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.preReceiveHooks = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminListPreReceiveHooksForOrg - List pre-receive hooks for an organization
     *
     * List all pre-receive hooks that are enabled or testing for this organization as well as any disabled hooks that can be configured at the organization level. Globally disabled pre-receive hooks that do not allow downstream configuration are not listed.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#list-pre-receive-hooks-for-an-organization - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminListPreReceiveHooksForOrg = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminListPreReceiveHooksForOrgRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orgs/{org}/pre-receive-hooks", req.pathParams);
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
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.orgPreReceiveHooks = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminListPreReceiveHooksForRepo - List pre-receive hooks for a repository
     *
     * List all pre-receive hooks that are enabled or testing for this repository as well as any disabled hooks that are allowed to be enabled at the repository level. Pre-receive hooks that are disabled at a higher level and are not configurable will not be listed.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#list-pre-receive-hooks-for-a-repository - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminListPreReceiveHooksForRepo = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminListPreReceiveHooksForRepoRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pre-receive-hooks", req.pathParams);
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
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.repositoryPreReceiveHooks = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminListPublicKeys - List public keys
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#list-public-keys - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminListPublicKeys = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminListPublicKeysRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/admin/keys";
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
                        res.enterprisePublicKeys = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminListRunnerApplicationsForEnterprise - List runner applications for an enterprise
     *
     * Lists binaries for the runner application that you can download and run.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#list-runner-applications-for-an-enterprise - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminListRunnerApplicationsForEnterprise = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminListRunnerApplicationsForEnterpriseRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/enterprises/{enterprise}/actions/runners/downloads", req.pathParams);
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
                        res.runnerApplications = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise - List selected organizations enabled for GitHub Actions in an enterprise
     *
     * Lists the organizations that are selected to have GitHub Actions enabled in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#list-selected-organizations-enabled-for-github-actions-in-an-enterprise - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/enterprises/{enterprise}/actions/permissions/organizations", req.pathParams);
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
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.enterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminListSelfHostedRunnerGroupsForEnterprise - List self-hosted runner groups for an enterprise
     *
     * Lists all self-hosted runner groups for an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#list-self-hosted-runner-groups-for-an-enterprise - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminListSelfHostedRunnerGroupsForEnterprise = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/enterprises/{enterprise}/actions/runner-groups", req.pathParams);
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
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.enterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminListSelfHostedRunnersForEnterprise - List self-hosted runners for an enterprise
     *
     * Lists all self-hosted runners configured for an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#list-self-hosted-runners-for-an-enterprise - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminListSelfHostedRunnersForEnterprise = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminListSelfHostedRunnersForEnterpriseRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/enterprises/{enterprise}/actions/runners", req.pathParams);
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
                        res.enterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminListSelfHostedRunnersInGroupForEnterprise - List self-hosted runners in a group for an enterprise
     *
     * Lists the self-hosted runners that are in a specific enterprise group.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#list-self-hosted-runners-in-a-group-for-an-enterprise - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminListSelfHostedRunnersInGroupForEnterprise = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners", req.pathParams);
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
                        res.enterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminPingGlobalWebhook - Ping a global webhook
     *
     * This will trigger a [ping event](https://docs.github.com/enterprise-server@3.1/webhooks/#ping-event) to be sent to the webhook.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#ping-a-global-webhook - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminPingGlobalWebhook = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminPingGlobalWebhookRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/admin/hooks/{hook_id}/pings", req.pathParams);
        var client = this._defaultClient;
        var headers = __assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .request(__assign({ url: url, method: "post", headers: headers }, config)).then(function (httpRes) {
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
     * enterpriseAdminPromoteUserToBeSiteAdministrator - Promote a user to be a site administrator
     *
     * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@3.1/rest/overview/resources-in-the-rest-api#http-verbs)."
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#promote-a-user-to-be-a-site-administrator - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminPromoteUserToBeSiteAdministrator = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminPromoteUserToBeSiteAdministratorRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/users/{username}/site_admin", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "put" }, config)).then(function (httpRes) {
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
     * enterpriseAdminRemoveAnnouncement - Remove the global announcement banner
     *
     * Removes the global announcement banner in your enterprise.
    **/
    EnterpriseAdmin.prototype.enterpriseAdminRemoveAnnouncement = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/enterprise/announcement";
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
     * enterpriseAdminRemoveAuthorizedSshKey - Remove an authorized SSH key
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#remove-an-authorized-ssh-key - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminRemoveAuthorizedSshKey = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminRemoveAuthorizedSshKeyRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/setup/api/settings/authorized-keys";
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
            .request(__assign({ url: url, method: "delete", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.sshKeys = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterprise - Remove organization access to a self-hosted runner group in an enterprise
     *
     * Removes an organization from the list of selected organizations that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an enterprise](#create-a-self-hosted-runner-group-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#remove-organization-access-to-a-self-hosted-runner-group-in-an-enterprise - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterprise = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations/{org_id}", req.pathParams);
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
     * enterpriseAdminRemovePreReceiveHookEnforcementForOrg - Remove pre-receive hook enforcement for an organization
     *
     * Removes any overrides for this hook at the org level for this org.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-an-organization - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminRemovePreReceiveHookEnforcementForOrg = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminRemovePreReceiveHookEnforcementForOrgRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.orgPreReceiveHook = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminRemovePreReceiveHookEnforcementForRepo - Remove pre-receive hook enforcement for a repository
     *
     * Deletes any overridden enforcement on this repository for the specified hook.
     *
     * Responds with effective values inherited from owner and/or global level.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-a-repository - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminRemovePreReceiveHookEnforcementForRepo = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminRemovePreReceiveHookEnforcementForRepoRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.repositoryPreReceiveHook = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprise - Remove a self-hosted runner from a group for an enterprise
     *
     * Removes a self-hosted runner from a group configured in an enterprise. The runner is then returned to the default group.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#remove-a-self-hosted-runner-from-a-group-for-an-enterprise - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprise = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners/{runner_id}", req.pathParams);
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
     * enterpriseAdminSetAllowedActionsEnterprise - Set allowed actions for an enterprise
     *
     * Sets the actions that are allowed in an enterprise. To use this endpoint, the enterprise permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#set-allowed-actions-for-an-enterprise - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminSetAllowedActionsEnterprise = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminSetAllowedActionsEnterpriseRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/enterprises/{enterprise}/actions/permissions/selected-actions", req.pathParams);
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
            .request(__assign({ url: url, method: "put", headers: headers, data: body }, config)).then(function (httpRes) {
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
     * enterpriseAdminSetAnnouncement - Set the global announcement banner
     *
     * Sets the message and expiration time for the global announcement banner in your enterprise.
    **/
    EnterpriseAdmin.prototype.enterpriseAdminSetAnnouncement = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminSetAnnouncementRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/enterprise/announcement";
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
            .request(__assign({ url: url, method: "patch", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.announcement = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminSetGithubActionsPermissionsEnterprise - Set GitHub Actions permissions for an enterprise
     *
     * Sets the GitHub Actions permissions policy for organizations and allowed actions in an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#set-github-actions-permissions-for-an-enterprise - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminSetGithubActionsPermissionsEnterprise = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/enterprises/{enterprise}/actions/permissions", req.pathParams);
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
            .request(__assign({ url: url, method: "put", headers: headers, data: body }, config)).then(function (httpRes) {
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
     * enterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprise - Set organization access for a self-hosted runner group in an enterprise
     *
     * Replaces the list of organizations that have access to a self-hosted runner configured in an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#set-organization-access-to-a-self-hosted-runner-group-in-an-enterprise - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprise = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations", req.pathParams);
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
            .request(__assign({ url: url, method: "put", headers: headers, data: body }, config)).then(function (httpRes) {
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
     * enterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprise - Set selected organizations enabled for GitHub Actions in an enterprise
     *
     * Replaces the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#set-selected-organizations-enabled-for-github-actions-in-an-enterprise - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprise = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/enterprises/{enterprise}/actions/permissions/organizations", req.pathParams);
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
            .request(__assign({ url: url, method: "put", headers: headers, data: body }, config)).then(function (httpRes) {
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
     * enterpriseAdminSetSelfHostedRunnersInGroupForEnterprise - Set self-hosted runners in a group for an enterprise
     *
     * Replaces the list of self-hosted runners that are part of an enterprise runner group.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#set-self-hosted-runners-in-a-group-for-an-enterprise - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminSetSelfHostedRunnersInGroupForEnterprise = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners", req.pathParams);
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
            .request(__assign({ url: url, method: "put", headers: headers, data: body }, config)).then(function (httpRes) {
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
     * enterpriseAdminSetSettings - Set settings
     *
     * For a list of the available settings, see the [Get settings endpoint](https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#get-settings).
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#set-settings - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminSetSettings = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminSetSettingsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/setup/api/settings";
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
            .request(__assign({ url: url, method: "put", headers: headers, data: body }, config)).then(function (httpRes) {
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
     * enterpriseAdminStartConfigurationProcess - Start a configuration process
     *
     * This endpoint allows you to start a configuration process at any time for your updated settings to take effect:
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#start-a-configuration-process - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminStartConfigurationProcess = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/setup/api/configure";
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminStartPreReceiveEnvironmentDownload - Start a pre-receive environment download
     *
     * Triggers a new download of the environment tarball from the environment's `image_url`. When the download is finished, the newly downloaded tarball will overwrite the existing environment.
     *
     * If a download cannot be triggered, you will receive a `422 Unprocessable Entity` response.
     *
     * The possible error messages are:
     *
     * * _Cannot modify or delete the default environment_
     * * _Can not start a new download when a download is in progress_
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#start-a-pre-receive-environment-download - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminStartPreReceiveEnvironmentDownload = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminStartPreReceiveEnvironmentDownloadRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/admin/pre-receive-environments/{pre_receive_environment_id}/downloads", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.preReceiveEnvironmentDownloadStatus = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 422:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.enterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminSuspendUser - Suspend a user
     *
     * If your GitHub instance uses [LDAP Sync with Active Directory LDAP servers](https://help.github.com/enterprise/admin/guides/user-management/using-ldap), Active Directory LDAP-authenticated users cannot be suspended through this API. If you attempt to suspend an Active Directory LDAP-authenticated user through this API, it will return a `403` response.
     *
     * You can suspend any user account except your own.
     *
     * Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@3.1/rest/overview/resources-in-the-rest-api#http-verbs)."
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#suspend-a-user - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminSuspendUser = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminSuspendUserRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/users/{username}/suspended", req.pathParams);
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
            .request(__assign({ url: url, method: "put", headers: headers, data: body }, config)).then(function (httpRes) {
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
     * enterpriseAdminSyncLdapMappingForTeam - Sync LDAP mapping for a team
     *
     * Note that this API call does not automatically initiate an LDAP sync. Rather, if a `201` is returned, the sync job is queued successfully, and is performed when the instance is ready.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#sync-ldap-mapping-for-a-team - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminSyncLdapMappingForTeam = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminSyncLdapMappingForTeamRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/admin/ldap/teams/{team_id}/sync", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.enterpriseAdminSyncLdapMappingForTeam201ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminSyncLdapMappingForUser - Sync LDAP mapping for a user
     *
     * Note that this API call does not automatically initiate an LDAP sync. Rather, if a `201` is returned, the sync job is queued successfully, and is performed when the instance is ready.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#sync-ldap-mapping-for-a-user - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminSyncLdapMappingForUser = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminSyncLdapMappingForUserRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/admin/ldap/users/{username}/sync", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "post" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.enterpriseAdminSyncLdapMappingForUser201ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminUnsuspendUser - Unsuspend a user
     *
     * If your GitHub instance uses [LDAP Sync with Active Directory LDAP servers](https://help.github.com/enterprise/admin/guides/user-management/using-ldap), this API is disabled and will return a `403` response. Active Directory LDAP-authenticated users cannot be unsuspended using the API.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#unsuspend-a-user - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminUnsuspendUser = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminUnsuspendUserRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/users/{username}/suspended", req.pathParams);
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
            .request(__assign({ url: url, method: "delete", headers: headers, data: body }, config)).then(function (httpRes) {
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
     * enterpriseAdminUpdateGlobalWebhook - Update a global webhook
     *
     * Parameters that are not provided will be overwritten with the default value or removed if no default exists.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#update-a-global-webhook - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminUpdateGlobalWebhook = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminUpdateGlobalWebhookRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/admin/hooks/{hook_id}", req.pathParams);
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
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "patch", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.globalHook2 = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminUpdateLdapMappingForTeam - Update LDAP mapping for a team
     *
     * Updates the [distinguished name](https://www.ldap.com/ldap-dns-and-rdns) (DN) of the LDAP entry to map to a team. [LDAP synchronization](https://help.github.com/enterprise/admin/guides/user-management/using-ldap/#enabling-ldap-sync) must be enabled to map LDAP entries to a team. Use the [Create a team](https://docs.github.com/enterprise-server@3.1/rest/reference/teams/#create-a-team) endpoint to create a team with LDAP mapping.
     *
     * If you pass the `hellcat-preview` media type, you can also update the LDAP mapping of a child team.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#update-ldap-mapping-for-a-team - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminUpdateLdapMappingForTeam = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminUpdateLdapMappingForTeamRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/admin/ldap/teams/{team_id}/mapping", req.pathParams);
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
            .request(__assign({ url: url, method: "patch", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.ldapMappingTeam = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminUpdateLdapMappingForUser - Update LDAP mapping for a user
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#update-ldap-mapping-for-a-user - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminUpdateLdapMappingForUser = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminUpdateLdapMappingForUserRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/admin/ldap/users/{username}/mapping", req.pathParams);
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
            .request(__assign({ url: url, method: "patch", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.ldapMappingUser = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminUpdateOrgName - Update an organization name
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#update-an-organization-name - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminUpdateOrgName = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminUpdateOrgNameRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/admin/organizations/{org}", req.pathParams);
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
            .request(__assign({ url: url, method: "patch", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.enterpriseAdminUpdateOrgName202ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminUpdatePreReceiveEnvironment - Update a pre-receive environment
     *
     * You cannot modify the default environment. If you attempt to modify the default environment, you will receive a `422 Unprocessable Entity` response.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#update-a-pre-receive-environment - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminUpdatePreReceiveEnvironment = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminUpdatePreReceiveEnvironmentRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/admin/pre-receive-environments/{pre_receive_environment_id}", req.pathParams);
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
            .request(__assign({ url: url, method: "patch", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.preReceiveEnvironment = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 422:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.enterpriseAdminUpdatePreReceiveEnvironment422ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminUpdatePreReceiveHook - Update a pre-receive hook
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#update-a-pre-receive-hook - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminUpdatePreReceiveHook = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminUpdatePreReceiveHookRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/admin/pre-receive-hooks/{pre_receive_hook_id}", req.pathParams);
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
            .request(__assign({ url: url, method: "patch", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.preReceiveHook = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminUpdatePreReceiveHookEnforcementForOrg - Update pre-receive hook enforcement for an organization
     *
     * For pre-receive hooks which are allowed to be configured at the org level, you can set `enforcement` and `allow_downstream_configuration`
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-an-organization - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminUpdatePreReceiveHookEnforcementForOrg = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}", req.pathParams);
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
            .request(__assign({ url: url, method: "patch", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.orgPreReceiveHook = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminUpdatePreReceiveHookEnforcementForRepo - Update pre-receive hook enforcement for a repository
     *
     * For pre-receive hooks which are allowed to be configured at the repo level, you can set `enforcement`
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-a-repository - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminUpdatePreReceiveHookEnforcementForRepo = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}", req.pathParams);
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
            .request(__assign({ url: url, method: "patch", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.repositoryPreReceiveHook = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminUpdateSelfHostedRunnerGroupForEnterprise - Update a self-hosted runner group for an enterprise
     *
     * Updates the `name` and `visibility` of a self-hosted runner group in an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#update-a-self-hosted-runner-group-for-an-enterprise - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminUpdateSelfHostedRunnerGroupForEnterprise = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}", req.pathParams);
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
            .request(__assign({ url: url, method: "patch", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.runnerGroupsEnterprise = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminUpdateUsernameForUser - Update the username for a user
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#update-the-username-for-a-user - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminUpdateUsernameForUser = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminUpdateUsernameForUserRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/admin/users/{username}", req.pathParams);
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
            .request(__assign({ url: url, method: "patch", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.enterpriseAdminUpdateUsernameForUser202ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enterpriseAdminUpgradeLicense - Upgrade a license
     *
     * This API upgrades your license and also triggers the configuration process:
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#upgrade-a-license - API method documentation
    **/
    EnterpriseAdmin.prototype.enterpriseAdminUpgradeLicense = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnterpriseAdminUpgradeLicenseRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/setup/api/upgrade";
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return EnterpriseAdmin;
}());
export { EnterpriseAdmin };

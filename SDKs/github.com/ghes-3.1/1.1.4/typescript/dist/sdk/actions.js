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
var Actions = /** @class */ (function () {
    function Actions(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * actionsAddRepoAccessToSelfHostedRunnerGroupInOrg - Add repository access to a self-hosted runner group in an organization
     *
     * Adds a repository to the list of selected repositories that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an organization](#create-a-self-hosted-runner-group-for-an-organization)."
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#add-repository-acess-to-a-self-hosted-runner-group-in-an-organization - API method documentation
    **/
    Actions.prototype.actionsAddRepoAccessToSelfHostedRunnerGroupInOrg = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orgs/{org}/actions/runner-groups/{runner_group_id}/repositories/{repository_id}", req.pathParams);
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
     * actionsAddSelectedRepoToOrgSecret - Add selected repository to an organization secret
     *
     * Adds a repository to an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-server@3.1/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#add-selected-repository-to-an-organization-secret - API method documentation
    **/
    Actions.prototype.actionsAddSelectedRepoToOrgSecret = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsAddSelectedRepoToOrgSecretRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}", req.pathParams);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 409:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * actionsAddSelfHostedRunnerToGroupForOrg - Add a self-hosted runner to a group for an organization
     *
     * Adds a self-hosted runner to a runner group configured in an organization.
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#add-a-self-hosted-runner-to-a-group-for-an-organization - API method documentation
    **/
    Actions.prototype.actionsAddSelfHostedRunnerToGroupForOrg = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsAddSelfHostedRunnerToGroupForOrgRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orgs/{org}/actions/runner-groups/{runner_group_id}/runners/{runner_id}", req.pathParams);
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
     * actionsCancelWorkflowRun - Cancel a workflow run
     *
     * Cancels a workflow run using its `id`. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#cancel-a-workflow-run - API method documentation
    **/
    Actions.prototype.actionsCancelWorkflowRun = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsCancelWorkflowRunRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/runs/{run_id}/cancel", req.pathParams);
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
                        res.actionsCancelWorkflowRun202ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * actionsCreateOrUpdateOrgSecret - Create or update an organization secret
     *
     * Creates or updates an organization secret with an encrypted value. Encrypt your secret using
     * [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
     * token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to
     * use this endpoint.
     *
     * #### Example encrypting a secret using Node.js
     *
     * Encrypt your secret using the [tweetsodium](https://github.com/github/tweetsodium) library.
     *
     * ```
     * const sodium = require('tweetsodium');
     *
     * const key = "base64-encoded-public-key";
     * const value = "plain-text-secret";
     *
     * // Convert the message and key to Uint8Array's (Buffer implements that interface)
     * const messageBytes = Buffer.from(value);
     * const keyBytes = Buffer.from(key, 'base64');
     *
     * // Encrypt using LibSodium.
     * const encryptedBytes = sodium.seal(messageBytes, keyBytes);
     *
     * // Base64 the encrypted secret
     * const encrypted = Buffer.from(encryptedBytes).toString('base64');
     *
     * console.log(encrypted);
     * ```
     *
     *
     * #### Example encrypting a secret using Python
     *
     * Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/stable/public/#nacl-public-sealedbox) with Python 3.
     *
     * ```
     * from base64 import b64encode
     * from nacl import encoding, public
     *
     * def encrypt(public_key: str, secret_value: str) -> str:
     *   """Encrypt a Unicode string using the public key."""
     *   public_key = public.PublicKey(public_key.encode("utf-8"), encoding.Base64Encoder())
     *   sealed_box = public.SealedBox(public_key)
     *   encrypted = sealed_box.encrypt(secret_value.encode("utf-8"))
     *   return b64encode(encrypted).decode("utf-8")
     * ```
     *
     * #### Example encrypting a secret using C#
     *
     * Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.
     *
     * ```
     * var secretValue = System.Text.Encoding.UTF8.GetBytes("mySecret");
     * var publicKey = Convert.FromBase64String("2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU=");
     *
     * var sealedPublicKeyBox = Sodium.SealedPublicKeyBox.Create(secretValue, publicKey);
     *
     * Console.WriteLine(Convert.ToBase64String(sealedPublicKeyBox));
     * ```
     *
     * #### Example encrypting a secret using Ruby
     *
     * Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.
     *
     * ```ruby
     * require "rbnacl"
     * require "base64"
     *
     * key = Base64.decode64("+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0=")
     * public_key = RbNaCl::PublicKey.new(key)
     *
     * box = RbNaCl::Boxes::Sealed.from_public_key(public_key)
     * encrypted_secret = box.encrypt("my_secret")
     *
     * # Print the base64 encoded secret
     * puts Base64.strict_encode64(encrypted_secret)
     * ```
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#create-or-update-an-organization-secret - API method documentation
    **/
    Actions.prototype.actionsCreateOrUpdateOrgSecret = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsCreateOrUpdateOrgSecretRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orgs/{org}/actions/secrets/{secret_name}", req.pathParams);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.emptyObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * actionsCreateOrUpdateRepoSecret - Create or update a repository secret
     *
     * Creates or updates a repository secret with an encrypted value. Encrypt your secret using
     * [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
     * token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use
     * this endpoint.
     *
     * #### Example encrypting a secret using Node.js
     *
     * Encrypt your secret using the [tweetsodium](https://github.com/github/tweetsodium) library.
     *
     * ```
     * const sodium = require('tweetsodium');
     *
     * const key = "base64-encoded-public-key";
     * const value = "plain-text-secret";
     *
     * // Convert the message and key to Uint8Array's (Buffer implements that interface)
     * const messageBytes = Buffer.from(value);
     * const keyBytes = Buffer.from(key, 'base64');
     *
     * // Encrypt using LibSodium.
     * const encryptedBytes = sodium.seal(messageBytes, keyBytes);
     *
     * // Base64 the encrypted secret
     * const encrypted = Buffer.from(encryptedBytes).toString('base64');
     *
     * console.log(encrypted);
     * ```
     *
     *
     * #### Example encrypting a secret using Python
     *
     * Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/stable/public/#nacl-public-sealedbox) with Python 3.
     *
     * ```
     * from base64 import b64encode
     * from nacl import encoding, public
     *
     * def encrypt(public_key: str, secret_value: str) -> str:
     *   """Encrypt a Unicode string using the public key."""
     *   public_key = public.PublicKey(public_key.encode("utf-8"), encoding.Base64Encoder())
     *   sealed_box = public.SealedBox(public_key)
     *   encrypted = sealed_box.encrypt(secret_value.encode("utf-8"))
     *   return b64encode(encrypted).decode("utf-8")
     * ```
     *
     * #### Example encrypting a secret using C#
     *
     * Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.
     *
     * ```
     * var secretValue = System.Text.Encoding.UTF8.GetBytes("mySecret");
     * var publicKey = Convert.FromBase64String("2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU=");
     *
     * var sealedPublicKeyBox = Sodium.SealedPublicKeyBox.Create(secretValue, publicKey);
     *
     * Console.WriteLine(Convert.ToBase64String(sealedPublicKeyBox));
     * ```
     *
     * #### Example encrypting a secret using Ruby
     *
     * Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.
     *
     * ```ruby
     * require "rbnacl"
     * require "base64"
     *
     * key = Base64.decode64("+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0=")
     * public_key = RbNaCl::PublicKey.new(key)
     *
     * box = RbNaCl::Boxes::Sealed.from_public_key(public_key)
     * encrypted_secret = box.encrypt("my_secret")
     *
     * # Print the base64 encoded secret
     * puts Base64.strict_encode64(encrypted_secret)
     * ```
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#create-or-update-a-repository-secret - API method documentation
    **/
    Actions.prototype.actionsCreateOrUpdateRepoSecret = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsCreateOrUpdateRepoSecretRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/secrets/{secret_name}", req.pathParams);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.actionsCreateOrUpdateRepoSecret201ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * actionsCreateRegistrationTokenForOrg - Create a registration token for an organization
     *
     * Returns a token that you can pass to the `config` script. The token expires after one hour.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * #### Example using registration token
     *
     * Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.
     *
     * ```
     * ./config.sh --url https://github.com/octo-org --token TOKEN
     * ```
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#create-a-registration-token-for-an-organization - API method documentation
    **/
    Actions.prototype.actionsCreateRegistrationTokenForOrg = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsCreateRegistrationTokenForOrgRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orgs/{org}/actions/runners/registration-token", req.pathParams);
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
     * actionsCreateRegistrationTokenForRepo - Create a registration token for a repository
     *
     * Returns a token that you can pass to the `config` script. The token expires after one hour. You must authenticate
     * using an access token with the `repo` scope to use this endpoint.
     *
     * #### Example using registration token
     *
     * Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.
     *
     * ```
     * ./config.sh --url https://github.com/octo-org/octo-repo-artifacts --token TOKEN
     * ```
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#create-a-registration-token-for-a-repository - API method documentation
    **/
    Actions.prototype.actionsCreateRegistrationTokenForRepo = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsCreateRegistrationTokenForRepoRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/runners/registration-token", req.pathParams);
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
     * actionsCreateRemoveTokenForOrg - Create a remove token for an organization
     *
     * Returns a token that you can pass to the `config` script to remove a self-hosted runner from an organization. The token expires after one hour.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * #### Example using remove token
     *
     * To remove your self-hosted runner from an organization, replace `TOKEN` with the remove token provided by this
     * endpoint.
     *
     * ```
     * ./config.sh remove --token TOKEN
     * ```
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#create-a-remove-token-for-an-organization - API method documentation
    **/
    Actions.prototype.actionsCreateRemoveTokenForOrg = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsCreateRemoveTokenForOrgRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orgs/{org}/actions/runners/remove-token", req.pathParams);
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
     * actionsCreateRemoveTokenForRepo - Create a remove token for a repository
     *
     * Returns a token that you can pass to remove a self-hosted runner from a repository. The token expires after one hour.
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     *
     * #### Example using remove token
     *
     * To remove your self-hosted runner from a repository, replace TOKEN with the remove token provided by this endpoint.
     *
     * ```
     * ./config.sh remove --token TOKEN
     * ```
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#create-a-remove-token-for-a-repository - API method documentation
    **/
    Actions.prototype.actionsCreateRemoveTokenForRepo = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsCreateRemoveTokenForRepoRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/runners/remove-token", req.pathParams);
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
     * actionsCreateSelfHostedRunnerGroupForOrg - Create a self-hosted runner group for an organization
     *
     * The self-hosted runner groups REST API is available with GitHub Enterprise Cloud and GitHub Enterprise Server. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."
     *
     * Creates a new self-hosted runner group for an organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#create-a-self-hosted-runner-group-for-an-organization - API method documentation
    **/
    Actions.prototype.actionsCreateSelfHostedRunnerGroupForOrg = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsCreateSelfHostedRunnerGroupForOrgRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orgs/{org}/actions/runner-groups", req.pathParams);
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
                        res.runnerGroupsOrg = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * actionsCreateWorkflowDispatch - Create a workflow dispatch event
     *
     * You can use this endpoint to manually trigger a GitHub Actions workflow run. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.
     *
     * You must configure your GitHub Actions workflow to run when the [`workflow_dispatch` webhook](/developers/webhooks-and-events/webhook-events-and-payloads#workflow_dispatch) event occurs. The `inputs` are configured in the workflow file. For more information about how to configure the `workflow_dispatch` event in the workflow file, see "[Events that trigger workflows](/actions/reference/events-that-trigger-workflows#workflow_dispatch)."
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint. For more information, see "[Creating a personal access token for the command line](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line)."
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#create-a-workflow-dispatch-event - API method documentation
    **/
    Actions.prototype.actionsCreateWorkflowDispatch = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsCreateWorkflowDispatchRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches", req.pathParams);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * actionsDeleteArtifact - Delete an artifact
     *
     * Deletes an artifact for a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#delete-an-artifact - API method documentation
    **/
    Actions.prototype.actionsDeleteArtifact = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsDeleteArtifactRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/artifacts/{artifact_id}", req.pathParams);
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
     * actionsDeleteOrgSecret - Delete an organization secret
     *
     * Deletes a secret in an organization using the secret name. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#delete-an-organization-secret - API method documentation
    **/
    Actions.prototype.actionsDeleteOrgSecret = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsDeleteOrgSecretRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orgs/{org}/actions/secrets/{secret_name}", req.pathParams);
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
     * actionsDeleteRepoSecret - Delete a repository secret
     *
     * Deletes a secret in a repository using the secret name. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#delete-a-repository-secret - API method documentation
    **/
    Actions.prototype.actionsDeleteRepoSecret = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsDeleteRepoSecretRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/secrets/{secret_name}", req.pathParams);
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
     * actionsDeleteSelfHostedRunnerFromOrg - Delete a self-hosted runner from an organization
     *
     * Forces the removal of a self-hosted runner from an organization. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#delete-a-self-hosted-runner-from-an-organization - API method documentation
    **/
    Actions.prototype.actionsDeleteSelfHostedRunnerFromOrg = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsDeleteSelfHostedRunnerFromOrgRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orgs/{org}/actions/runners/{runner_id}", req.pathParams);
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
     * actionsDeleteSelfHostedRunnerFromRepo - Delete a self-hosted runner from a repository
     *
     * Forces the removal of a self-hosted runner from a repository. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.
     *
     * You must authenticate using an access token with the `repo`
     * scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#delete-a-self-hosted-runner-from-a-repository - API method documentation
    **/
    Actions.prototype.actionsDeleteSelfHostedRunnerFromRepo = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsDeleteSelfHostedRunnerFromRepoRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/runners/{runner_id}", req.pathParams);
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
     * actionsDeleteSelfHostedRunnerGroupFromOrg - Delete a self-hosted runner group from an organization
     *
     * Deletes a self-hosted runner group for an organization.
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#delete-a-self-hosted-runner-group-from-an-organization - API method documentation
    **/
    Actions.prototype.actionsDeleteSelfHostedRunnerGroupFromOrg = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsDeleteSelfHostedRunnerGroupFromOrgRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orgs/{org}/actions/runner-groups/{runner_group_id}", req.pathParams);
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
     * actionsDeleteWorkflowRun - Delete a workflow run
     *
     * Delete a specific workflow run. Anyone with write access to the repository can use this endpoint. If the repository is
     * private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:write` permission to use
     * this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#delete-a-workflow-run - API method documentation
    **/
    Actions.prototype.actionsDeleteWorkflowRun = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsDeleteWorkflowRunRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/runs/{run_id}", req.pathParams);
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
     * actionsDeleteWorkflowRunLogs - Delete workflow run logs
     *
     * Deletes all logs for a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#delete-workflow-run-logs - API method documentation
    **/
    Actions.prototype.actionsDeleteWorkflowRunLogs = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsDeleteWorkflowRunLogsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/runs/{run_id}/logs", req.pathParams);
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
     * actionsDisableSelectedRepositoryGithubActionsOrganization - Disable a selected repository for GitHub Actions in an organization
     *
     * Removes a repository from the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#disable-a-selected-repository-for-github-actions-in-an-organization - API method documentation
    **/
    Actions.prototype.actionsDisableSelectedRepositoryGithubActionsOrganization = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsDisableSelectedRepositoryGithubActionsOrganizationRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orgs/{org}/actions/permissions/repositories/{repository_id}", req.pathParams);
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
     * actionsDisableWorkflow - Disable a workflow
     *
     * Disables a workflow and sets the `state` of the workflow to `disabled_manually`. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#disable-a-workflow - API method documentation
    **/
    Actions.prototype.actionsDisableWorkflow = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsDisableWorkflowRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable", req.pathParams);
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
     * actionsDownloadArtifact - Download an artifact
     *
     * Gets a redirect URL to download an archive for a repository. This URL expires after 1 minute. Look for `Location:` in
     * the response header to find the URL for the download. The `:archive_format` must be `zip`. Anyone with read access to
     * the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.
     * GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#download-an-artifact - API method documentation
    **/
    Actions.prototype.actionsDownloadArtifact = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsDownloadArtifactRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 302:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * actionsDownloadJobLogsForWorkflowRun - Download job logs for a workflow run
     *
     * Gets a redirect URL to download a plain text file of logs for a workflow job. This link expires after 1 minute. Look
     * for `Location:` in the response header to find the URL for the download. Anyone with read access to the repository can
     * use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must
     * have the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#download-job-logs-for-a-workflow-run - API method documentation
    **/
    Actions.prototype.actionsDownloadJobLogsForWorkflowRun = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsDownloadJobLogsForWorkflowRunRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/jobs/{job_id}/logs", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 302:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * actionsDownloadWorkflowRunLogs - Download workflow run logs
     *
     * Gets a redirect URL to download an archive of log files for a workflow run. This link expires after 1 minute. Look for
     * `Location:` in the response header to find the URL for the download. Anyone with read access to the repository can use
     * this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have
     * the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#download-workflow-run-logs - API method documentation
    **/
    Actions.prototype.actionsDownloadWorkflowRunLogs = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsDownloadWorkflowRunLogsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/runs/{run_id}/logs", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers) };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 302:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * actionsEnableSelectedRepositoryGithubActionsOrganization - Enable a selected repository for GitHub Actions in an organization
     *
     * Adds a repository to the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#enable-a-selected-repository-for-github-actions-in-an-organization - API method documentation
    **/
    Actions.prototype.actionsEnableSelectedRepositoryGithubActionsOrganization = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsEnableSelectedRepositoryGithubActionsOrganizationRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orgs/{org}/actions/permissions/repositories/{repository_id}", req.pathParams);
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
     * actionsEnableWorkflow - Enable a workflow
     *
     * Enables a workflow and sets the `state` of the workflow to `active`. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#enable-a-workflow - API method documentation
    **/
    Actions.prototype.actionsEnableWorkflow = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsEnableWorkflowRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable", req.pathParams);
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
     * actionsGetAllowedActionsOrganization - Get allowed actions for an organization
     *
     * Gets the selected actions that are allowed in an organization. To use this endpoint, the organization permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization).""
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#get-allowed-actions-for-an-organization - API method documentation
    **/
    Actions.prototype.actionsGetAllowedActionsOrganization = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsGetAllowedActionsOrganizationRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orgs/{org}/actions/permissions/selected-actions", req.pathParams);
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
     * actionsGetAllowedActionsRepository - Get allowed actions for a repository
     *
     * Gets the settings for selected actions that are allowed in a repository. To use this endpoint, the repository policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for a repository](#set-github-actions-permissions-for-a-repository)."
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#get-allowed-actions-for-a-repository - API method documentation
    **/
    Actions.prototype.actionsGetAllowedActionsRepository = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsGetAllowedActionsRepositoryRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/permissions/selected-actions", req.pathParams);
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
     * actionsGetArtifact - Get an artifact
     *
     * Gets a specific artifact for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#get-an-artifact - API method documentation
    **/
    Actions.prototype.actionsGetArtifact = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsGetArtifactRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/artifacts/{artifact_id}", req.pathParams);
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
                        res.artifact = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * actionsGetGithubActionsPermissionsOrganization - Get GitHub Actions permissions for an organization
     *
     * Gets the GitHub Actions permissions policy for repositories and allowed actions in an organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#get-github-actions-permissions-for-an-organization - API method documentation
    **/
    Actions.prototype.actionsGetGithubActionsPermissionsOrganization = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsGetGithubActionsPermissionsOrganizationRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orgs/{org}/actions/permissions", req.pathParams);
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
                        res.actionsOrganizationPermissions = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * actionsGetGithubActionsPermissionsRepository - Get GitHub Actions permissions for a repository
     *
     * Gets the GitHub Actions permissions policy for a repository, including whether GitHub Actions is enabled and the actions allowed to run in the repository.
     *
     * You must authenticate using an access token with the `repo` scope to use this
     * endpoint. GitHub Apps must have the `administration` repository permission to use this API.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#get-github-actions-permissions-for-a-repository - API method documentation
    **/
    Actions.prototype.actionsGetGithubActionsPermissionsRepository = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsGetGithubActionsPermissionsRepositoryRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/permissions", req.pathParams);
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
                        res.actionsRepositoryPermissions = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * actionsGetJobForWorkflowRun - Get a job for a workflow run
     *
     * Gets a specific job in a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#get-a-job-for-a-workflow-run - API method documentation
    **/
    Actions.prototype.actionsGetJobForWorkflowRun = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsGetJobForWorkflowRunRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/jobs/{job_id}", req.pathParams);
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
                        res.job = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * actionsGetOrgPublicKey - Get an organization public key
     *
     * Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#get-an-organization-public-key - API method documentation
    **/
    Actions.prototype.actionsGetOrgPublicKey = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsGetOrgPublicKeyRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orgs/{org}/actions/secrets/public-key", req.pathParams);
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
                        res.actionsPublicKey = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * actionsGetOrgSecret - Get an organization secret
     *
     * Gets a single organization secret without revealing its encrypted value. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#get-an-organization-secret - API method documentation
    **/
    Actions.prototype.actionsGetOrgSecret = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsGetOrgSecretRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orgs/{org}/actions/secrets/{secret_name}", req.pathParams);
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
                        res.organizationActionsSecret = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * actionsGetRepoPublicKey - Get a repository public key
     *
     * Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `secrets` repository permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#get-a-repository-public-key - API method documentation
    **/
    Actions.prototype.actionsGetRepoPublicKey = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsGetRepoPublicKeyRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/secrets/public-key", req.pathParams);
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
                        res.actionsPublicKey = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * actionsGetRepoSecret - Get a repository secret
     *
     * Gets a single repository secret without revealing its encrypted value. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#get-a-repository-secret - API method documentation
    **/
    Actions.prototype.actionsGetRepoSecret = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsGetRepoSecretRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/secrets/{secret_name}", req.pathParams);
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
                        res.actionsSecret = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * actionsGetSelfHostedRunnerForOrg - Get a self-hosted runner for an organization
     *
     * Gets a specific self-hosted runner configured in an organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#get-a-self-hosted-runner-for-an-organization - API method documentation
    **/
    Actions.prototype.actionsGetSelfHostedRunnerForOrg = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsGetSelfHostedRunnerForOrgRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orgs/{org}/actions/runners/{runner_id}", req.pathParams);
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
     * actionsGetSelfHostedRunnerForRepo - Get a self-hosted runner for a repository
     *
     * Gets a specific self-hosted runner configured in a repository.
     *
     * You must authenticate using an access token with the `repo` scope to use this
     * endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#get-a-self-hosted-runner-for-a-repository - API method documentation
    **/
    Actions.prototype.actionsGetSelfHostedRunnerForRepo = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsGetSelfHostedRunnerForRepoRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/runners/{runner_id}", req.pathParams);
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
     * actionsGetSelfHostedRunnerGroupForOrg - Get a self-hosted runner group for an organization
     *
     * Gets a specific self-hosted runner group for an organization.
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#get-a-self-hosted-runner-group-for-an-organization - API method documentation
    **/
    Actions.prototype.actionsGetSelfHostedRunnerGroupForOrg = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsGetSelfHostedRunnerGroupForOrgRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orgs/{org}/actions/runner-groups/{runner_group_id}", req.pathParams);
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
                        res.runnerGroupsOrg = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * actionsGetWorkflow - Get a workflow
     *
     * Gets a specific workflow. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#get-a-workflow - API method documentation
    **/
    Actions.prototype.actionsGetWorkflow = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsGetWorkflowRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/workflows/{workflow_id}", req.pathParams);
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
                        res.workflow = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * actionsGetWorkflowRun - Get a workflow run
     *
     * Gets a specific workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#get-a-workflow-run - API method documentation
    **/
    Actions.prototype.actionsGetWorkflowRun = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsGetWorkflowRunRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/runs/{run_id}", req.pathParams);
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
                        res.workflowRun = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * actionsListArtifactsForRepo - List artifacts for a repository
     *
     * Lists all artifacts for a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#list-artifacts-for-a-repository - API method documentation
    **/
    Actions.prototype.actionsListArtifactsForRepo = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsListArtifactsForRepoRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/artifacts", req.pathParams);
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
                        res.actionsListArtifactsForRepo200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * actionsListJobsForWorkflowRun - List jobs for a workflow run
     *
     * Lists jobs for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/enterprise-server@3.1/rest/overview/resources-in-the-rest-api#parameters).
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#list-jobs-for-a-workflow-run - API method documentation
    **/
    Actions.prototype.actionsListJobsForWorkflowRun = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsListJobsForWorkflowRunRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/runs/{run_id}/jobs", req.pathParams);
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
                        res.actionsListJobsForWorkflowRun200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * actionsListOrgSecrets - List organization secrets
     *
     * Lists all secrets available in an organization without revealing their encrypted values. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#list-organization-secrets - API method documentation
    **/
    Actions.prototype.actionsListOrgSecrets = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsListOrgSecretsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orgs/{org}/actions/secrets", req.pathParams);
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
                        res.actionsListOrgSecrets200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * actionsListRepoAccessToSelfHostedRunnerGroupInOrg - List repository access to a self-hosted runner group in an organization
     *
     * The self-hosted runner groups REST API is available with GitHub Enterprise Cloud and GitHub Enterprise Server. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."
     *
     * Lists the repositories with access to a self-hosted runner group configured in an organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#list-repository-access-to-a-self-hosted-runner-group-in-an-organization - API method documentation
    **/
    Actions.prototype.actionsListRepoAccessToSelfHostedRunnerGroupInOrg = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsListRepoAccessToSelfHostedRunnerGroupInOrgRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orgs/{org}/actions/runner-groups/{runner_group_id}/repositories", req.pathParams);
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
                        res.actionsListRepoAccessToSelfHostedRunnerGroupInOrg200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * actionsListRepoSecrets - List repository secrets
     *
     * Lists all secrets available in a repository without revealing their encrypted values. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#list-repository-secrets - API method documentation
    **/
    Actions.prototype.actionsListRepoSecrets = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsListRepoSecretsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/secrets", req.pathParams);
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
                        res.actionsListRepoSecrets200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * actionsListRepoWorkflows - List repository workflows
     *
     * Lists the workflows in a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#list-repository-workflows - API method documentation
    **/
    Actions.prototype.actionsListRepoWorkflows = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsListRepoWorkflowsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/workflows", req.pathParams);
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
                        res.actionsListRepoWorkflows200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * actionsListRunnerApplicationsForOrg - List runner applications for an organization
     *
     * Lists binaries for the runner application that you can download and run.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#list-runner-applications-for-an-organization - API method documentation
    **/
    Actions.prototype.actionsListRunnerApplicationsForOrg = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsListRunnerApplicationsForOrgRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orgs/{org}/actions/runners/downloads", req.pathParams);
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
     * actionsListRunnerApplicationsForRepo - List runner applications for a repository
     *
     * Lists binaries for the runner application that you can download and run.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#list-runner-applications-for-a-repository - API method documentation
    **/
    Actions.prototype.actionsListRunnerApplicationsForRepo = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsListRunnerApplicationsForRepoRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/runners/downloads", req.pathParams);
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
     * actionsListSelectedReposForOrgSecret - List selected repositories for an organization secret
     *
     * Lists all repositories that have been selected when the `visibility` for repository access to a secret is set to `selected`. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#list-selected-repositories-for-an-organization-secret - API method documentation
    **/
    Actions.prototype.actionsListSelectedReposForOrgSecret = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsListSelectedReposForOrgSecretRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orgs/{org}/actions/secrets/{secret_name}/repositories", req.pathParams);
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
                        res.actionsListSelectedReposForOrgSecret200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * actionsListSelectedRepositoriesEnabledGithubActionsOrganization - List selected repositories enabled for GitHub Actions in an organization
     *
     * Lists the selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#list-selected-repositories-enabled-for-github-actions-in-an-organization - API method documentation
    **/
    Actions.prototype.actionsListSelectedRepositoriesEnabledGithubActionsOrganization = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orgs/{org}/actions/permissions/repositories", req.pathParams);
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
                        res.actionsListSelectedRepositoriesEnabledGithubActionsOrganization200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * actionsListSelfHostedRunnerGroupsForOrg - List self-hosted runner groups for an organization
     *
     * Lists all self-hosted runner groups configured in an organization and inherited from an enterprise.
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#list-self-hosted-runner-groups-for-an-organization - API method documentation
    **/
    Actions.prototype.actionsListSelfHostedRunnerGroupsForOrg = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsListSelfHostedRunnerGroupsForOrgRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orgs/{org}/actions/runner-groups", req.pathParams);
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
                        res.actionsListSelfHostedRunnerGroupsForOrg200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * actionsListSelfHostedRunnersForOrg - List self-hosted runners for an organization
     *
     * Lists all self-hosted runners configured in an organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#list-self-hosted-runners-for-an-organization - API method documentation
    **/
    Actions.prototype.actionsListSelfHostedRunnersForOrg = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsListSelfHostedRunnersForOrgRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orgs/{org}/actions/runners", req.pathParams);
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
                        res.actionsListSelfHostedRunnersForOrg200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * actionsListSelfHostedRunnersForRepo - List self-hosted runners for a repository
     *
     * Lists all self-hosted runners configured in a repository. You must authenticate using an access token with the `repo` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#list-self-hosted-runners-for-a-repository - API method documentation
    **/
    Actions.prototype.actionsListSelfHostedRunnersForRepo = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsListSelfHostedRunnersForRepoRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/runners", req.pathParams);
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
                        res.actionsListSelfHostedRunnersForRepo200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * actionsListSelfHostedRunnersInGroupForOrg - List self-hosted runners in a group for an organization
     *
     * Lists self-hosted runners that are in a specific organization group.
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#list-self-hosted-runners-in-a-group-for-an-organization - API method documentation
    **/
    Actions.prototype.actionsListSelfHostedRunnersInGroupForOrg = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsListSelfHostedRunnersInGroupForOrgRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orgs/{org}/actions/runner-groups/{runner_group_id}/runners", req.pathParams);
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
                        res.actionsListSelfHostedRunnersInGroupForOrg200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * actionsListWorkflowRunArtifacts - List workflow run artifacts
     *
     * Lists artifacts for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#list-workflow-run-artifacts - API method documentation
    **/
    Actions.prototype.actionsListWorkflowRunArtifacts = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsListWorkflowRunArtifactsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/runs/{run_id}/artifacts", req.pathParams);
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
                        res.actionsListWorkflowRunArtifacts200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * actionsListWorkflowRuns - List workflow runs
     *
     * List all workflow runs for a workflow. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/enterprise-server@3.1/rest/overview/resources-in-the-rest-api#parameters).
     *
     * Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#list-workflow-runs - API method documentation
    **/
    Actions.prototype.actionsListWorkflowRuns = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsListWorkflowRunsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs", req.pathParams);
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
                        res.actionsListWorkflowRuns200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * actionsListWorkflowRunsForRepo - List workflow runs for a repository
     *
     * Lists all workflow runs for a repository. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/enterprise-server@3.1/rest/overview/resources-in-the-rest-api#parameters).
     *
     * Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#list-workflow-runs-for-a-repository - API method documentation
    **/
    Actions.prototype.actionsListWorkflowRunsForRepo = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsListWorkflowRunsForRepoRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/runs", req.pathParams);
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
                        res.actionsListWorkflowRunsForRepo200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * actionsReRunWorkflow - Re-run a workflow
     *
     * Re-runs your workflow run using its `id`. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#re-run-a-workflow - API method documentation
    **/
    Actions.prototype.actionsReRunWorkflow = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsReRunWorkflowRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/runs/{run_id}/rerun", req.pathParams);
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
                        res.actionsReRunWorkflow201ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * actionsRemoveRepoAccessToSelfHostedRunnerGroupInOrg - Remove repository access to a self-hosted runner group in an organization
     *
     * Removes a repository from the list of selected repositories that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an organization](#create-a-self-hosted-runner-group-for-an-organization)."
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#remove-repository-access-to-a-self-hosted-runner-group-in-an-organization - API method documentation
    **/
    Actions.prototype.actionsRemoveRepoAccessToSelfHostedRunnerGroupInOrg = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orgs/{org}/actions/runner-groups/{runner_group_id}/repositories/{repository_id}", req.pathParams);
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
     * actionsRemoveSelectedRepoFromOrgSecret - Remove selected repository from an organization secret
     *
     * Removes a repository from an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-server@3.1/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#remove-selected-repository-from-an-organization-secret - API method documentation
    **/
    Actions.prototype.actionsRemoveSelectedRepoFromOrgSecret = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsRemoveSelectedRepoFromOrgSecretRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}", req.pathParams);
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 409:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * actionsRemoveSelfHostedRunnerFromGroupForOrg - Remove a self-hosted runner from a group for an organization
     *
     * Removes a self-hosted runner from a group configured in an organization. The runner is then returned to the default group.
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization - API method documentation
    **/
    Actions.prototype.actionsRemoveSelfHostedRunnerFromGroupForOrg = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsRemoveSelfHostedRunnerFromGroupForOrgRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orgs/{org}/actions/runner-groups/{runner_group_id}/runners/{runner_id}", req.pathParams);
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
     * actionsSetAllowedActionsOrganization - Set allowed actions for an organization
     *
     * Sets the actions that are allowed in an organization. To use this endpoint, the organization permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."
     *
     * If the organization belongs to an enterprise that has `selected` actions set at the enterprise level, then you cannot override any of the enterprise's allowed actions settings.
     *
     * To use the `patterns_allowed` setting for private repositories, the organization must belong to an enterprise. If the organization does not belong to an enterprise, then the `patterns_allowed` setting only applies to public repositories in the organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#set-allowed-actions-for-an-organization - API method documentation
    **/
    Actions.prototype.actionsSetAllowedActionsOrganization = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsSetAllowedActionsOrganizationRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orgs/{org}/actions/permissions/selected-actions", req.pathParams);
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
     * actionsSetAllowedActionsRepository - Set allowed actions for a repository
     *
     * Sets the actions that are allowed in a repository. To use this endpoint, the repository permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for a repository](#set-github-actions-permissions-for-a-repository)."
     *
     * If the repository belongs to an organization or enterprise that has `selected` actions set at the organization or enterprise levels, then you cannot override any of the allowed actions settings.
     *
     * To use the `patterns_allowed` setting for private repositories, the repository must belong to an enterprise. If the repository does not belong to an enterprise, then the `patterns_allowed` setting only applies to public repositories.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#set-allowed-actions-for-a-repository - API method documentation
    **/
    Actions.prototype.actionsSetAllowedActionsRepository = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsSetAllowedActionsRepositoryRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/permissions/selected-actions", req.pathParams);
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
     * actionsSetGithubActionsPermissionsOrganization - Set GitHub Actions permissions for an organization
     *
     * Sets the GitHub Actions permissions policy for repositories and allowed actions in an organization.
     *
     * If the organization belongs to an enterprise that has set restrictive permissions at the enterprise level, such as `allowed_actions` to `selected` actions, then you cannot override them for the organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#set-github-actions-permissions-for-an-organization - API method documentation
    **/
    Actions.prototype.actionsSetGithubActionsPermissionsOrganization = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsSetGithubActionsPermissionsOrganizationRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orgs/{org}/actions/permissions", req.pathParams);
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
     * actionsSetGithubActionsPermissionsRepository - Set GitHub Actions permissions for a repository
     *
     * Sets the GitHub Actions permissions policy for enabling GitHub Actions and allowed actions in the repository.
     *
     * If the repository belongs to an organization or enterprise that has set restrictive permissions at the organization or enterprise levels, such as `allowed_actions` to `selected` actions, then you cannot override them for the repository.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#set-github-actions-permissions-for-a-repository - API method documentation
    **/
    Actions.prototype.actionsSetGithubActionsPermissionsRepository = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsSetGithubActionsPermissionsRepositoryRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/permissions", req.pathParams);
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
     * actionsSetRepoAccessToSelfHostedRunnerGroupInOrg - Set repository access for a self-hosted runner group in an organization
     *
     * Replaces the list of repositories that have access to a self-hosted runner group configured in an organization.
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#set-repository-access-to-a-self-hosted-runner-group-in-an-organization - API method documentation
    **/
    Actions.prototype.actionsSetRepoAccessToSelfHostedRunnerGroupInOrg = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orgs/{org}/actions/runner-groups/{runner_group_id}/repositories", req.pathParams);
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
     * actionsSetSelectedReposForOrgSecret - Set selected repositories for an organization secret
     *
     * Replaces all repositories for an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-server@3.1/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#set-selected-repositories-for-an-organization-secret - API method documentation
    **/
    Actions.prototype.actionsSetSelectedReposForOrgSecret = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsSetSelectedReposForOrgSecretRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orgs/{org}/actions/secrets/{secret_name}/repositories", req.pathParams);
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
     * actionsSetSelectedRepositoriesEnabledGithubActionsOrganization - Set selected repositories enabled for GitHub Actions in an organization
     *
     * Replaces the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#set-selected-repositories-enabled-for-github-actions-in-an-organization - API method documentation
    **/
    Actions.prototype.actionsSetSelectedRepositoriesEnabledGithubActionsOrganization = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orgs/{org}/actions/permissions/repositories", req.pathParams);
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
     * actionsSetSelfHostedRunnersInGroupForOrg - Set self-hosted runners in a group for an organization
     *
     * Replaces the list of self-hosted runners that are part of an organization runner group.
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization - API method documentation
    **/
    Actions.prototype.actionsSetSelfHostedRunnersInGroupForOrg = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsSetSelfHostedRunnersInGroupForOrgRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orgs/{org}/actions/runner-groups/{runner_group_id}/runners", req.pathParams);
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
     * actionsUpdateSelfHostedRunnerGroupForOrg - Update a self-hosted runner group for an organization
     *
     * Updates the `name` and `visibility` of a self-hosted runner group in an organization.
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/actions#update-a-self-hosted-runner-group-for-an-organization - API method documentation
    **/
    Actions.prototype.actionsUpdateSelfHostedRunnerGroupForOrg = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ActionsUpdateSelfHostedRunnerGroupForOrgRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/orgs/{org}/actions/runner-groups/{runner_group_id}", req.pathParams);
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
                        res.runnerGroupsOrg = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return Actions;
}());
export { Actions };

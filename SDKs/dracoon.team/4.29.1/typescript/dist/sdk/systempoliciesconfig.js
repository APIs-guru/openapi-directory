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
var SystemPoliciesConfig = /** @class */ (function () {
    function SystemPoliciesConfig(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * changePasswordPoliciesConfig - Change password policies
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.14.0</h3>
     *
     * ### Description:
     * Change current password policies for any password types:
     * * `login`
     * * `shares`
     * * `encryption`
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
     * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
     *
     * ### Postcondition:
     * Password policies get changed.
     *
     * ### Further Information:
     * None.
     *
     * ### Available password policies:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | Name | Description | Value | Recommended Value | Password Type |
     * | :--- | :--- | :--- | :--- | :--- |
     * | `mustContainCharacters` | Characters which a password must contain:<br><ul><li>`alpha` - at least one alphabetical character (`uppercase` **OR** `lowercase`)<pre>a b c d e f g h i j k l m n o p q r s t u v w x y z<br>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</pre></li><li>`uppercase` - at least one uppercase character<pre>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</pre></li><li>`lowercase` - at least one lowercase character<pre>a b c d e f g h i j k l m n o p q r s t u v w x y z</pre></li><li>`numeric` - at least one numeric character<pre>0 1 2 3 4 5 6 7 8 9</pre></li><li>`special` - at least one special character (letters and digits excluded)<pre>! " # $ % ( ) * + , - . / : ; = ? @ [ \ ] ^ _ { &#124; } ~</pre></li><li>`none` - none of the above</li><li>`all` - combination of `uppercase`, `lowercase`, `numeric` and `special`</li></ul> | <ul><li>`alpha`</li><li>`uppercase`</li><li>`lowercase`</li><li>`numeric`</li><li>`special`</li><li>`none`</li><li>`all`</li></ul> | <ul><li>`uppercase`</li><li>`lowercase`</li><li>`numeric`</li></ul>  | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
     * | `numberOfCharacteristicsToEnforce` | Number of characteristics to enforce.<br>e.g. from `["uppercase", "lowercase", "numeric", "special"]`<br>all 4 character sets can be enforced; but also only 2 of them | `Integer between 0 and 4`<br><br>default:<ul><li>`none` - `0`</li><li>`all` - `4`</li><li>otherwise - amount of distinct values<br>cf. `mustContainCharacters` matrix</li></ul> | `3` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
     * | `minLength` | Minimum number of characters a password must contain. | `Integer between 1 and 1024` | <ul><li>`login`: `12`</li><li>`shares`: `12`</li><li>`encryption`: `14`</li></ul> | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
     * | `rejectDictionaryWords` | Determines whether a password must **NOT** contain word(s) from a dictionary.<br>In `core-service.properties` a path to directory with dictionary files (`*.txt`) can be defined<br>cf. `policies.passwords.dictionary.directory`.<br><br>If this rule gets enabled `policies.passwords.dictionary.directory` must be defined and contain dictionary files.<br>Otherwise, the rule will not have any effect on password validation process. | `true or false` | `true` | <ul><li>`login`</li><li>`shares`</li></ul> |
     * | `rejectUserInfo` | Determines whether a password must **NOT** contain user info.<br>Affects user's **first name**, **last name**, **email** and **user name**. | `true or false` | `true` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
     * | `rejectKeyboardPatterns` | Determines whether a password must **NOT** contain keyboard patterns.<br>e.g. `qwertz`, `asdf` (min. 4 character pattern) | `true or false` | `true` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
     * | `numberOfArchivedPasswords` | Number of passwords to archive. | `Integer between 0 and 10`<br>Set `0` to disable password history. | `3` | <ul><li>`login`</li></ul> |
     * | `passwordExpiration.enabled` | Determines whether password expiration is enabled.<br>Password expiration policy can only be enabled in context with `enforceLoginPasswordChange`. | `true or false` | `false` | <ul><li>`login`</li></ul> |
     * | `maxPasswordAge` | Maximum allowed password age (in **days**) | `positive Integer` |  | <ul><li>`login`</li></ul> |
     * | `userLockout.enabled` | Determines whether user lockout is enabled. | `true or false` | `true` | <ul><li>`login`</li></ul> |
     * | `maxNumberOfLoginFailures` | Maximum allowed number of failed login attempts. | `positive Integer` | `5` | <ul><li>`login`</li></ul> |
     * | `lockoutPeriod` | Amount of **minutes** a user has to wait to make another login attempt<br>after `maxNumberOfLoginFailures` has been exceeded. | `positive Integer` | `10` | <ul><li>`login`</li></ul> |
     *
     * </details>
     *
     * ### Deprecated password policies:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | Name | Description | Value | Recommended Value | Password Type |
     * | :--- | :--- | :--- | :--- | :--- |
     * | <del>`enforceLoginPasswordChange`</del> | Determines whether a login password change should be enforced for all users.<br>Only takes effect, if login password policies get stricter.<br>Use `POST /system/config/policies/passwords/enforce_change` API to enforce a login password change. | `true or false`<br>default: `false` |  | <ul><li>`login`</li></ul> |
     *
     * </details>
     *
     * ### `mustContainCharacters` matrix:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * |  | `alpha` | `uppercase` | `lowercase` | `numeric` | `special` | `all` | `none` |
     * | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
     * | `alpha` | `alpha` | `uppercase` | `lowercase` | `alpha`<br>`numeric` | `alpha`<br>`special` | `all` | `none` |
     * | `uppercase` | `uppercase` | `uppercase` | `uppercase`<br>`lowercase` | `uppercase`<br>`numeric` | `uppercase`<br>`special` | `all` | `none` |
     * | `lowercase` | `lowercase` | `uppercase`<br>`lowercase` | `lowercase` | `lowercase`<br>`numeric` | `lowercase`<br>`special` | `all` | `none` |
     * | `numeric` | `alpha`<br>`numeric` | `uppercase`<br>`numeric` | `lowercase`<br>`numeric` | `numeric` | `numeric`<br>`special` | `all` | `none` |
     * | `special` | `alpha`<br>`special` | `uppercase`<br>`special` | `lowercase`<br>`special` | `numeric`<br>`special` | `special` | `all` | `none` |
     * | `all` | `all` | `all` | `all` | `all` | `all` | `all` | `none` |
     * | `none` | `none` | `none` |  `none` | `none` | `none` | `none` | `none` |
     *
     * </details>
    **/
    SystemPoliciesConfig.prototype.changePasswordPoliciesConfig = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ChangePasswordPoliciesConfigRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v4/system/config/policies/passwords";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
        var headers = __assign(__assign(__assign({}, utils.GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .request(__assign({ url: url, method: "put", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.passwordPoliciesConfig = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 412:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * enforceLoginPasswordChange - Enforce login password change for all users
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>
     *
     * ### Description:
     * Enforce login password change for all users.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
     * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
     *
     * ### Postcondition:
     * Login password change is enforced.
     * Every user has to change their login password at next login.
     *
     * ### Further Information:
     * None.
    **/
    SystemPoliciesConfig.prototype.enforceLoginPasswordChange = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EnforceLoginPasswordChangeRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v4/system/config/policies/passwords/enforce_change";
        var client = this._securityClient;
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 412:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * requestPasswordPoliciesConfig - Request password policies
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.14.0</h3>
     *
     * ### Description:
     * Retrieve a list of configured password policies for all password types:
     * * `login`
     * * `shares`
     * * `encryption`
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
     * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
     *
     * ### Postcondition:
     * List of configured password policies is returned.
     *
     * ### Further Information:
     * None.
     *
     * ### Available password policies:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | Name | Description | Value | Password Type |
     * | :--- | :--- | :--- | :--- |
     * | `mustContainCharacters` | Characters which a password must contain:<br><ul><li>`alpha` - at least one alphabetical character (`uppercase` **OR** `lowercase`)<pre>a b c d e f g h i j k l m n o p q r s t u v w x y z<br>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</pre></li><li>`uppercase` - at least one uppercase character<pre>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</pre></li><li>`lowercase` - at least one lowercase character<pre>a b c d e f g h i j k l m n o p q r s t u v w x y z</pre></li><li>`numeric` - at least one numeric character<pre>0 1 2 3 4 5 6 7 8 9</pre></li><li>`special` - at least one special character (letters and digits excluded)<pre>! " # $ % ( ) * + , - . / : ; = ? @ [ \ ] ^ _ { &#124; } ~</pre></li><li>`none` - none of the above</li></ul> | <ul><li>`alpha`</li><li>`uppercase`</li><li>`lowercase`</li><li>`numeric`</li><li>`special`</li><li>`none`</li></ul> | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
     * | `numberOfCharacteristicsToEnforce` | Number of characteristics to enforce.<br>e.g. from `["uppercase", "lowercase", "numeric", "special"]`<br>all 4 character sets can be enforced; but also only 2 of them | `Integer between 0 and 4` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
     * | `minLength` | Minimum number of characters a password must contain. | `Integer between 1 and 1024` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
     * | `rejectDictionaryWords` | Determines whether a password must **NOT** contain word(s) from a dictionary.<br>In `core-service.properties` a path to directory with dictionary files (`*.txt`) can be defined<br>cf. `policies.passwords.dictionary.directory`.<br><br>If this rule gets enabled `policies.passwords.dictionary.directory` must be defined and contain dictionary files.<br>Otherwise, the rule will not have any effect on password validation process. | `true or false` | <ul><li>`login`</li><li>`shares`</li></ul> |
     * | `rejectUserInfo` | Determines whether a password must **NOT** contain user info.<br>Affects user's **first name**, **last name**, **email** and **user name**. | `true or false` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
     * | `rejectKeyboardPatterns` | Determines whether a password must **NOT** contain keyboard patterns.<br>e.g. `qwertz`, `asdf` (min. 4 character pattern) | `true or false` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
     * | `numberOfArchivedPasswords` | Number of passwords to archive.<br>Value `0` means that password history is disabled. | `Integer between 0 and 10` | <ul><li>`login`</li></ul> |
     * | `passwordExpiration.enabled` | Determines whether password expiration is enabled. | `true or false` | <ul><li>`login`</li></ul> |
     * | `maxPasswordAge` | Maximum allowed password age (in **days**) | `positive Integer` | <ul><li>`login`</li></ul> |
     * | `userLockout.enabled` | Determines whether user lockout is enabled. | `true or false` | <ul><li>`login`</li></ul> |
     * | `maxNumberOfLoginFailures` | Maximum allowed number of failed login attempts. | `positive Integer` | <ul><li>`login`</li></ul> |
     * | `lockoutPeriod` | Amount of **minutes** a user has to wait to make another login attempt<br>after `maxNumberOfLoginFailures` has been exceeded. | `positive Integer` | <ul><li>`login`</li></ul> |
     *
     * </details>
    **/
    SystemPoliciesConfig.prototype.requestPasswordPoliciesConfig = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.RequestPasswordPoliciesConfigRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/v4/system/config/policies/passwords";
        var client = this._securityClient;
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
                        res.passwordPoliciesConfig = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 412:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * requestPasswordPoliciesForPasswordType - Request password policies for a certain password type
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.14.0</h3>
     *
     * ### Description:
     * Retrieve a list of configured password policies for a certain password type:
     * * `login`
     * * `shares`
     * * `encryption`
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
     * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
     *
     * ### Postcondition:
     * List of configured password policies is returned.
     *
     * ### Further Information:
     * None.
     *
     * ### Available password policies:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | Name | Description | Value | Password Type |
     * | :--- | :--- | :--- | :--- |
     * | `mustContainCharacters` | Characters which a password must contain:<br><ul><li>`alpha` - at least one alphabetical character (`uppercase` **OR** `lowercase`)<pre>a b c d e f g h i j k l m n o p q r s t u v w x y z<br>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</pre></li><li>`uppercase` - at least one uppercase character<pre>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</pre></li><li>`lowercase` - at least one lowercase character<pre>a b c d e f g h i j k l m n o p q r s t u v w x y z</pre></li><li>`numeric` - at least one numeric character<pre>0 1 2 3 4 5 6 7 8 9</pre></li><li>`special` - at least one special character (letters and digits excluded)<pre>! " # $ % ( ) * + , - . / : ; = ? @ [ \ ] ^ _ { &#124; } ~</pre></li><li>`none` - none of the above</li></ul> | <ul><li>`alpha`</li><li>`uppercase`</li><li>`lowercase`</li><li>`numeric`</li><li>`special`</li><li>`none`</li></ul> | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
     * | `numberOfCharacteristicsToEnforce` | Number of characteristics to enforce.<br>e.g. from `["uppercase", "lowercase", "numeric", "special"]`<br>all 4 character sets can be enforced; but also only 2 of them | `Integer between 0 and 4` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
     * | `minLength` | Minimum number of characters a password must contain. | `Integer between 1 and 1024` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
     * | `rejectDictionaryWords` | Determines whether a password must **NOT** contain word(s) from a dictionary.<br>In `core-service.properties` a path to directory with dictionary files (`*.txt`) can be defined<br>cf. `policies.passwords.dictionary.directory`.<br><br>If this rule gets enabled `policies.passwords.dictionary.directory` must be defined and contain dictionary files.<br>Otherwise, the rule will not have any effect on password validation process. | `true or false` | <ul><li>`login`</li><li>`shares`</li></ul> |
     * | `rejectUserInfo` | Determines whether a password must **NOT** contain user info.<br>Affects user's **first name**, **last name**, **email** and **user name**. | `true or false` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
     * | `rejectKeyboardPatterns` | Determines whether a password must **NOT** contain keyboard patterns.<br>e.g. `qwertz`, `asdf` (min. 4 character pattern) | `true or false` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
     * | `numberOfArchivedPasswords` | Number of passwords to archive.<br>Value `0` means that password history is disabled. | `Integer between 0 and 10` | <ul><li>`login`</li></ul> |
     * | `passwordExpiration.enabled` | Determines whether password expiration is enabled. | `true or false` | <ul><li>`login`</li></ul> |
     * | `maxPasswordAge` | Maximum allowed password age (in **days**) | `positive Integer` | <ul><li>`login`</li></ul> |
     * | `userLockout.enabled` | Determines whether user lockout is enabled. | `true or false` | <ul><li>`login`</li></ul> |
     * | `maxNumberOfLoginFailures` | Maximum allowed number of failed login attempts. | `positive Integer` | <ul><li>`login`</li></ul> |
     * | `lockoutPeriod` | Amount of **minutes** a user has to wait to make another login attempt<br>after `maxNumberOfLoginFailures` has been exceeded. | `positive Integer` | <ul><li>`login`</li></ul> |
     *
     * </details>
    **/
    SystemPoliciesConfig.prototype.requestPasswordPoliciesForPasswordType = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.RequestPasswordPoliciesForPasswordTypeRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/v4/system/config/policies/passwords/{password_type}", req.pathParams);
        var client = this._securityClient;
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
                        res.passwordPoliciesConfig = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
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
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 406:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 412:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.errorResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return SystemPoliciesConfig;
}());
export { SystemPoliciesConfig };

import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SystemPoliciesConfig {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
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
    changePasswordPoliciesConfig(req: operations.ChangePasswordPoliciesConfigRequest, config?: AxiosRequestConfig): Promise<operations.ChangePasswordPoliciesConfigResponse>;
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
    enforceLoginPasswordChange(req: operations.EnforceLoginPasswordChangeRequest, config?: AxiosRequestConfig): Promise<operations.EnforceLoginPasswordChangeResponse>;
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
    requestPasswordPoliciesConfig(req: operations.RequestPasswordPoliciesConfigRequest, config?: AxiosRequestConfig): Promise<operations.RequestPasswordPoliciesConfigResponse>;
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
    requestPasswordPoliciesForPasswordType(req: operations.RequestPasswordPoliciesForPasswordTypeRequest, config?: AxiosRequestConfig): Promise<operations.RequestPasswordPoliciesForPasswordTypeResponse>;
}

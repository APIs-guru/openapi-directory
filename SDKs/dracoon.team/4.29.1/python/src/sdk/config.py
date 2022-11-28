import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Config:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def request_algorithms(self, request: operations.RequestAlgorithmsRequest) -> operations.RequestAlgorithmsResponse:
        r"""Request algorithms
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>
        
        ### Description:
        Retrieve a list of available algorithms used for encryption.
        
        ### Precondition:
        Authenticated user.
        
        ### Postcondition:
        List of available algorithms is returned.
        
        ### Further Information:
        None.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/config/info/policies/algorithms"
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestAlgorithmsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AlgorithmVersionInfoList])
                res.algorithm_version_info_list = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 412:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def request_general_settings_info(self, request: operations.RequestGeneralSettingsInfoRequest) -> operations.RequestGeneralSettingsInfoResponse:
        r"""Request general settings
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>
        
        ### Description:
        Returns a list of configurable general settings.
        
        ### Precondition:
        Authenticated user.
        
        ### Postcondition:
        List of configurable general settings is returned.
        
        ### Further Information:
        None.
        
        ### Configurable general settings:
        <details open style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | Setting | Description | Value |
        | :--- | :--- | :--- |
        | `sharePasswordSmsEnabled` | Determines whether sending of share passwords via SMS is allowed. | `true or false` |
        | `cryptoEnabled` | Determines whether client-side encryption is enabled.<br>Can only be enabled once; disabling is **NOT** possible. | `true or false` |
        | `emailNotificationButtonEnabled` | Determines whether email notification button is enabled. | `true or false` |
        | `eulaEnabled` | Determines whether EULA is enabled.<br>Each user has to confirm the EULA at first login. | `true or false` |
        | `useS3Storage` | Defines if S3 is used as storage backend.<br>Can only be enabled once; disabling is **NOT** possible. | `true or false` |
        | `s3TagsEnabled` | Determines whether S3 tags are enabled | `true or false` |
        | `homeRoomsActive` | Determines whether each AD user has a personal home room | `true or false` |
        | `homeRoomParentId` | Defines a node under which all personal home rooms are located. **NULL** if `homeRoomsActive` is `false` | `Long` |
        
        </details>
        
        ### Deprecated general settings:
        <details style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | Setting | Description | Value |
        | :--- | :--- | :--- |
        | <del>`mediaServerEnabled`</del> | Determines whether media server is enabled.<br>Returns boolean value dependent on conjunction of `mediaServerConfigEnabled` AND `mediaServerEnabled` | `true or false` |
        | <del>`weakPasswordEnabled`</del> | Determines whether weak password is allowed.<br>Use `GET /system/config/policies/passwords` API to get configured password policies. | `true or false` |
        
        </details>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/config/info/general"
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestGeneralSettingsInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GeneralSettingsInfo])
                res.general_settings_info = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 412:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def request_infrastructure_properties_info(self, request: operations.RequestInfrastructurePropertiesInfoRequest) -> operations.RequestInfrastructurePropertiesInfoResponse:
        r"""Request infrastructure properties
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>
        
        ### Description:  
        Returns a list of read-only infrastructure properties.  
        
        ### Precondition:
        Authenticated user.
        
        ### Postcondition:
        List of infrastructure properties is returned.
        
        ### Further Information:
        Source: `core-service.properties`
        
        ### Read-only infrastructure properties:
        <details open style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | Setting | Description | Value |
        | :--- | :--- | :--- |
        | `smsConfigEnabled` | Determines whether sending of share passwords via SMS is **system-wide** enabled. | `true or false` |
        | `mediaServerConfigEnabled` | Determines whether media server is **system-wide** enabled. | `true or false` |
        | `s3DefaultRegion` | Suggested S3 region | `Region name` |
        | `s3EnforceDirectUpload` | Enforce direct upload to S3 | `true or false` |
        | `isDracoonCloud` | Determines if the **DRACOON Core** is deployed in the cloud environment | `true or false` |
        | `tenantUuid` | Current tenant UUID | `UUID` |
        
        </details>
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/config/info/infrastructure"
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestInfrastructurePropertiesInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InfrastructureProperties])
                res.infrastructure_properties = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 412:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def request_notification_channels_info(self, request: operations.RequestNotificationChannelsInfoRequest) -> operations.RequestNotificationChannelsInfoResponse:
        r"""Request list of notification channels
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>
        
        ### Description:
        Retrieve a list of configured notification channels.
        
        ### Precondition:
        Authenticated user.
        
        ### Postcondition:
        List of notification channels is returned.
        
        ### Further Information:
        None.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/config/info/notifications/channels"
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestNotificationChannelsInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotificationChannelList])
                res.notification_channel_list = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 412:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def request_password_policies_config_info(self, request: operations.RequestPasswordPoliciesConfigInfoRequest) -> operations.RequestPasswordPoliciesConfigInfoResponse:
        r"""Request password policies
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.14.0</h3>
        
        ### Description:  
        Retrieve a list of configured password policies for all password types:  
        * `login`
        * `shares`
        * `encryption`
        
        ### Precondition:
        Authenticated user.
        
        ### Postcondition:
        List of configured password policies is returned.
        
        ### Further Information:
        None.
        
        ### Available password policies:
        <details style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | Name | Description | Value | Password Type |
        | :--- | :--- | :--- | :--- |
        | `mustContainCharacters` | Characters which a password must contain:<br><ul><li>`alpha` - at least one alphabetical character (`uppercase` **OR** `lowercase`)<pre>a b c d e f g h i j k l m n o p q r s t u v w x y z<br>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</pre></li><li>`uppercase` - at least one uppercase character<pre>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</pre></li><li>`lowercase` - at least one lowercase character<pre>a b c d e f g h i j k l m n o p q r s t u v w x y z</pre></li><li>`numeric` - at least one numeric character<pre>0 1 2 3 4 5 6 7 8 9</pre></li><li>`special` - at least one special character (letters and digits excluded)<pre>! \" # $ % ( ) * + , - . / : ; = ? @ [ \ ] ^ _ { &#124; } ~</pre></li><li>`none` - none of the above</li></ul> | <ul><li>`alpha`</li><li>`uppercase`</li><li>`lowercase`</li><li>`numeric`</li><li>`special`</li><li>`none`</li></ul> | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
        | `numberOfCharacteristicsToEnforce` | Number of characteristics to enforce.<br>e.g. from `[\"uppercase\", \"lowercase\", \"numeric\", \"special\"]`<br>all 4 character sets can be enforced; but also only 2 of them | `Integer between 0 and 4` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
        | `minLength` | Minimum number of characters a password must contain. | `Integer between 1 and 1024` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
        | `rejectDictionaryWords` | Determines whether a password must **NOT** contain word(s) from a dictionary.<br>In `core-service.properties` a path to directory with dictionary files (`*.txt`) can be defined<br>cf. `policies.passwords.dictionary.directory`.<br><br>If this rule gets enabled `policies.passwords.dictionary.directory` must be defined and contain dictionary files.<br>Otherwise, the rule will not have any effect on password validation process. | `true or false` | <ul><li>`login`</li><li>`shares`</li></ul> |
        | `rejectUserInfo` | Determines whether a password must **NOT** contain user info.<br>Affects user's **first name**, **last name**, **email** and **user name**. | `true or false` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
        | `rejectKeyboardPatterns` | Determines whether a password must **NOT** contain keyboard patterns.<br>e.g. `qwertz`, `asdf` (min. 4 character pattern) | `true or false` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
        | `numberOfArchivedPasswords` | Number of passwords to archive.<br>Value `0` means that password history is disabled. | `Integer between 0 and 10` | <ul><li>`login`</li></ul> |
        | `passwordExpiration.enabled` | Determines whether password expiration is enabled. | `true or false` | <ul><li>`login`</li></ul> |
        | `maxPasswordAge` | Maximum allowed password age (in **days**) | `positive Integer` | <ul><li>`login`</li></ul> |
        | `userLockout.enabled` | Determines whether user lockout is enabled. | `true or false` | <ul><li>`login`</li></ul> |
        | `maxNumberOfLoginFailures` | Maximum allowed number of failed login attempts. | `positive Integer` | <ul><li>`login`</li></ul> |
        | `lockoutPeriod` | Amount of **minutes** a user has to wait to make another login attempt<br>after `maxNumberOfLoginFailures` has been exceeded. | `positive Integer` | <ul><li>`login`</li></ul> |
        
        </details>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/config/info/policies/passwords"
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestPasswordPoliciesConfigInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PasswordPoliciesConfig])
                res.password_policies_config = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def request_s3_tags_info(self, request: operations.RequestS3TagsInfoRequest) -> operations.RequestS3TagsInfoResponse:
        r"""Request list of configured S3 tags
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.9.0</h3>
        
        ### Description:
        Retrieve all configured S3 tags.
        
        ### Precondition:
        Authenticated user.
        
        ### Postcondition:
        List of configured S3 tags is returned.
        
        ### Further Information:
        An empty list is returned if no S3 tags are found / configured.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/config/info/s3_tags"
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestS3TagsInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.S3TagList])
                res.s3_tag_list = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 412:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def request_system_defaults_info(self, request: operations.RequestSystemDefaultsInfoRequest) -> operations.RequestSystemDefaultsInfoResponse:
        r"""Request default values
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>
        
        ### Description:  
        Returns a list of configurable system default values.
        
        ### Precondition:
        Authenticated user.
        
        ### Postcondition:
        List of configurable default settings is returned.
        
        ### Further Information:
        None.
        
        ### Configurable default values:
        <details open style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | Setting | Description | Value |
        | :--- | :--- | :--- |
        | `languageDefault` | Defines which language should be default. | `ISO 639-1 code` |
        | `downloadShareDefaultExpirationPeriod` | Default expiration period for Download Shares in _days_. | `Integer between 0 and 9999` |
        | `uploadShareDefaultExpirationPeriod` | Default expiration period for Upload Shares in _days_. | `Integer between 0 and 9999` |
        | `fileDefaultExpirationPeriod` | Default expiration period for all uploaded files in _days_. | `Integer between 0 and 9999` |
        | `nonmemberViewerDefault` | Defines if new users get the role _Non Member Viewer_ by default | `true or false` |
        
        </details>
        https://tools.ietf.org/html/rfc5646 - Tags for Identifying Languages
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/config/info/defaults"
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestSystemDefaultsInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SystemDefaults])
                res.system_defaults = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 412:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def request_system_settings(self, request: operations.RequestSystemSettingsRequest) -> operations.RequestSystemSettingsResponse:
        r"""Request system settings
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.6.0</h3>
        
        ### Description:  
        Returns a list of configurable system settings.
        
        ### Precondition:
        Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> required.
        
        ### Postcondition:
        List of configurable settings is returned.
        
        ### Further Information:
        Check for every settings key new corresponding API and key below.
        
        If `eula_active` is true, but **NOT** accepted yet, or password **MUST** be changed, only the following two values are returned:
        * `allow_system_global_weak_password`
        * `eula_active`
        
        ### Configurable settings
        <details style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | Setting | Description | Value |
        | :--- | :--- | :--- |
        | `branding_server_branding_id` | The branding UUID, which corresponds to _BRANDING-QUALIFIER_ in the new branding server.<br>cf. `GET /system/config/settings/branding` `BrandingConfig.brandingQualifier` | `String` |
        | `branding_portal_url` | Access URL to to the Branding Portal<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `GET /system/config/settings/branding` `BrandingConfig.brandingProviderUrl` | `String` |
        | `dblog` | Write logs to local database.<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `GET /system/config/settings/eventlog` `EventlogConfig.enabled` | `true or false` |
        | `default_downloadshare_expiration_period` | Default expiration period for Download Shares in days<br>cf. `GET /system/config/settings/defaults` `SystemDefaults.downloadShareDefaultExpirationPeriod` | `Integer between 0 and 9999` |
        | `default_file_upload_expiration_date` | Default expiration period for all uploaded files in days<br>cf. `GET /system/config/settings/defaults` `SystemDefaults.fileDefaultExpirationPeriod` | `Integer between 0 and 9999` |
        | `default_language` | Define which language should be default.<br>cf. `GET /system/config/settings/defaults` `SystemDefaults.languageDefault` | cf. `GET /public/system/info` - `SystemInfo.languageDefault` |
        | `default_uploadshare_expiration_period` | Default expiration period for Upload Shares in days<br>cf. `GET /system/config/settings/defaults` `SystemDefaults.uploadShareDefaultExpirationPeriod` | `Integer between 0 and 9999` |
        | `enable_client_side_crypto` | Activation status of client-side encryption<br>Can only be enabled once; disabling is **NOT** possible.<br>cf. `GET /system/config/settings/general` `GeneralSettings.cryptoEnabled` | `true or false`<br>default: `false` |
        | `eula_active` | Each user has to confirm the EULA at first login.<br>cf. `GET /system/config/settings/general` `GeneralSettings.eulaEnabled` | `true or false` |
        | `eventlog_retention_period` | Retention period (in days) of event log entries<br>After that period, all entries are deleted.<br>cf. `GET /system/config/settings/eventlog` `EventlogConfig.retentionPeriod` | `Integer between 0 and 9999`<br>If set to `0`: no logs are deleted<br>Recommended value: `7` |
        | `ip_address_logging` | Determines whether a user's IP address is logged.<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `GET /system/config/settings/eventlog` `EventlogConfig.logIpEnabled`<br>cf. `GET /system/config/settings/syslog` `SyslogConfig.logIpEnabled` | `true or false` |
        | `mailserver` | Email server to send emails.<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `GET /system/config/settings/mail_server` `MailServerConfig.host` | `DNS name or IPv4 of an email server` |
        | `mailserver_authentication_necessary` | Set to `true` if the email server requires authentication.<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `GET /system/config/settings/mail_server` `MailServerConfig.authenticationEnabled` | `true or false` |
        | `mailserver_password` | **Password is no longer returned.**<br>Check `mailserver_password_set` to determine whether password is set. |  |
        | `mailserver_password_set` | Indicates if a password is set for the mailserver (because `mailserver_password` is always returned empty).<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `GET /system/config/settings/mail_server` `MailServerConfig.passwordDefined` | `true or false` |
        | `mailserver_port` | Email server port<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `GET /system/config/settings/mail_server` `MailServerConfig.port` | `Valid port number` |
        | `mailserver_username` | User ame for email server<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `GET /system/config/settings/mail_server` `MailServerConfig.username` | `Username for authentication` |
        | `mailserver_use_ssl` | Email server requires SSL connection?<br>Only visible for _Config Manager_ of Provider Customer.<br>Requires `mailserver_use_starttls` to be `false`<br>cf. `GET /system/config/settings/mail_server` `MailServerConfig.username` | `true or false` |
        | `mailserver_use_starttls` | Email server requires StartTLS connection?<br>Only visible for _Config Manager_ of Provider Customer.<br>Requires `mailserver_use_ssl` to be `false`<br>cf. `GET /system/config/settings/mail_server` `MailServerConfig.starttlsEnabled` | `true or false` |
        | `syslog` | Write logs to a syslog interface.<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `GET /system/config/settings/syslog` `SyslogConfig.enabled` | `true or false` |
        | `syslog_host` | Syslog server (IP or FQDN)<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `GET /system/config/settings/syslog` `SyslogConfig.host` | `DNS name or IPv4 of a syslog server` |
        | `syslog_port` | Syslog server port<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `GET /system/config/settings/syslog` `SyslogConfig.port` | `Valid port number` |
        | `syslog_protocol` | Protocol to connect to syslog server.<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `GET /system/config/settings/syslog` `SyslogConfig.protocol` | `TCP or UDP` |
        | `enable_email_notification_button` | Enable mail notification button.<br>cf. `GET /system/config/settings/general` `GeneralSettings.emailNotificationButtonEnabled` | `true or false` |
        | `allow_share_password_sms` | Allow sending of share passwords via SMS.<br>cf. `GET /system/config/settings/general` `GeneralSettings.sharePasswordSmsEnabled` | `true or false` |
        | `globally_allow_share_password_sms` | Allow sending of share passwords via SMS **system-wide** (read-only).<br>cf. `GET /system/config/settings/infrastructure` `InfrastructureProperties.smsConfigEnabled` | `true or false` |
        | `use_s3_storage` | Defines if S3 is used as storage backend.<br>Can only be enabled once; disabling is **NOT** possible.<br>cf. `GET /system/config/settings/general` `GeneralSettings.useS3Storage` | `true or false` |
        | `s3_default_region` |Suggested S3 region (read-only)<br>cf. `GET /system/config/settings/infrastructure` `InfrastructureProperties.s3DefaultRegion` | `Region name` |
        
        </details>
        
        ### Deprecated settings
        <details style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | Setting | Description | Value |
        | :--- | :--- | :--- |
        | <del>`allow_system_global_weak_password`</del> | Determines whether weak password (cf. _Password Policy_ below) is allowed.<br>cf. `GET /system/config/settings/general` `GeneralSettings.weakPasswordEnabled`<br>Use `GET /system/config/policies/passwords` API to get configured password policies. | `true or false` |
        | <del>`branding_server_customer`</del> | The UUID of the branding server customer, which corresponds to customer key in the branding server. | `String` |
        | <del>`branding_server_url`</del> | Access URL to to the Branding Server.<br>Only visible for _Config Manager_ of Provider Customer. | `String` |
        | <del>`email_from`</del> | Sender of system-generated emails<br>Only visible for _Config Manager_ of Provider Customer.<br>**Moved to branding** | `Valid email address` |
        | <del>`email_to_sales`</del> | Contact email address for customers to request more user licenses or data volume.<br>**Moved to branding** | `Valid email address` |
        | <del>`email_to_support`</del> | Support email address for users<br>**Moved to branding** | `Valid email address` |
        | <del>`file_size_js`</del> | Maximum file size (in bytes) for downloads of encrypted files with JavaScript.<br>Bigger files will require a JavaApplet. | `Integer`<br>Recommended value: `10485760` (=`10MB`) |
        | <del>`system_name`</del> | System name<br>**Moved to branding** use `product.title` | `Display name of the DRACOON` |
        
        </details>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/config/settings"
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestSystemSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigOptionList])
                res.config_option_list = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 412:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def update_system_settings(self, request: operations.UpdateSystemSettingsRequest) -> operations.UpdateSystemSettingsResponse:
        r"""Update system settings
        <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.6.0</h3>
        
        ### Description:
        Update configurable settings.
        
        ### Precondition:
        Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
        role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
        
        ### Postcondition:
        One or more global settings gets changed.
        
        ### Further Information:
        This API is deprecated and will be removed in the future.  
        Check for every settings key new corresponding API and key below.
        
        ### Configurable settings:
        <details style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | Setting | Description | Value |
        | :--- | :--- | :--- |
        | `branding_server_branding_id` | The branding UUID, which corresponds to _BRANDING-QUALIFIER_ in the new branding server.<br>cf. `PUT /system/config/settings/branding` `BrandingConfig.brandingQualifier` | `String` |
        | `branding_portal_url` | Access URL to to the Branding Portal<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `PUT /system/config/settings/branding` `BrandingConfig.brandingProviderUrl` | `String` |
        | `dblog` | Write logs to local database.<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `PUT /system/config/settings/eventlog` `EventlogConfig.enabled` | `true or false` |
        | `default_downloadshare_expiration_period` | Default expiration period for Download Shares in days<br>cf. `PUT /system/config/settings/defaults` `SystemDefaults.downloadShareDefaultExpirationPeriod` | `Integer between 0 and 9999`<br>Set `0` to disable. |
        | `default_file_upload_expiration_date` | Default expiration period for all uploaded files in days<br>cf. `PUT /system/config/settings/defaults` `SystemDefaults.fileDefaultExpirationPeriod` | `Integer between 0 and 9999`<br>Set `0` to disable. |
        | `default_language` | Define which language should be default.<br>cf. `PUT /system/config/settings/defaults` `SystemDefaults.languageDefault` | cf. `GET /public/system/info` - `SystemInfo.languageDefault` |
        | `default_uploadshare_expiration_period` | Default expiration period for Upload Shares in days<br>cf. `PUT /system/config/settings/defaults` `SystemDefaults.uploadShareDefaultExpirationPeriod` | `Integer between 0 and 9999`<br>Set `0` to disable. |
        | `enable_client_side_crypto` | Activation status of client-side encryption<br>Can only be enabled once; disabling is **NOT** possible.<br>cf. `PUT /system/config/settings/general` `GeneralSettings.cryptoEnabled` | `true or false`<br>default: `false` |
        | `eula_active` | Each user has to confirm the EULA at first login.<br>cf. `PUT /system/config/settings/general` `GeneralSettings.eulaEnabled` | `true or false` |
        | `eventlog_retention_period` | Retention period (in days) of event log entries<br>After that period, all entries are deleted.<br>cf. `PUT /system/config/settings/eventlog` `EventlogConfig.retentionPeriod` | `Integer between 0 and 9999`<br>If set to `0`: no logs are deleted<br>Recommended value: `7` |
        | `ip_address_logging` | Determines whether a user's IP address is logged.<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `PUT /system/config/settings/eventlog` `EventlogConfig.logIpEnabled`<br>cf. `PUT /system/config/settings/syslog` `SyslogConfig.logIpEnabled` | `true or false` |
        | `mailserver` | Email server to send emails.<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `PUT /system/config/settings/mail_server` `MailServerConfig.host` | `DNS name or IPv4 of an email server` |
        | `mailserver_authentication_necessary` | Set to `true` if the email server requires authentication.<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `PUT /system/config/settings/mail_server` `MailServerConfig.authenticationEnabled` | `true or false` |
        | `mailserver_password` | Password for email server<br>cf. `PUT /system/config/settings/mail_server` `MailServerConfig.password` | `Password for authentication` |
        | `mailserver_port` | Email server port<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `PUT /system/config/settings/mail_server` `MailServerConfig.port` | `Valid port number` |
        | `mailserver_username` | Username for email server<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `PUT /system/config/settings/mail_server` `MailServerConfig.username` | `Username for authentication` |
        | `mailserver_use_ssl` | Email server requires SSL connection?<br>Only visible for _Config Manager_ of Provider Customer.<br>Requires `mailserver_use_starttls` to be `false`<br>cf. `PUT /system/config/settings/mail_server` `MailServerConfig.username` | `true or false` |
        | `mailserver_use_starttls` | Email server requires StartTLS connection?<br>Only visible for _Config Manager_ of Provider Customer.<br>Requires `mailserver_use_ssl` to be `false`<br>cf. `PUT /system/config/settings/mail_server` `MailServerConfig.starttlsEnabled` | `true or false` |
        | `syslog` | Write logs to a syslog interface.<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `PUT /system/config/settings/syslog` `SyslogConfig.enabled` | `true or false` |
        | `syslog_host` | Syslog server (IP or FQDN)<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `PUT /system/config/settings/syslog` `SyslogConfig.host` | `DNS name or IPv4 of a syslog server` |
        | `syslog_port` | Syslog server port<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `PUT /system/config/settings/syslog` `SyslogConfig.port` | `Valid port number` |
        | `syslog_protocol` | Protocol to connect to syslog server.<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `PUT /system/config/settings/syslog` `SyslogConfig.protocol` | `TCP or UDP` |
        | `enable_email_notification_button` | Enable mail notification button.<br>cf. `PUT /system/config/settings/general` `GeneralSettings.emailNotificationButtonEnabled` | `true or false` |
        | `allow_share_password_sms` | Allow sending of share passwords via SMS.<br>cf. `PUT /system/config/settings/general` `GeneralSettings.sharePasswordSmsEnabled` | `true or false` |
        
        </details>
        
        ### Deprecated settings:
        <details style=\"padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;\">
        <summary style=\"cursor: pointer; outline: none\"><strong>Expand</strong></summary>
        
        | Setting | Description | Value |
        | :--- | :--- | :--- |
        | <del>`allow_system_global_weak_password`</del> | Determines whether weak password (cf. _Password Policy_ below) is allowed.<br>cf. `PUT /system/config/settings/general` `GeneralSettings.weakPasswordEnabled`<br>Use `PUT /system/config/policies/passwords` API to change configured password policies. | `true or false` |
        | <del>`branding_server_customer`</del> | The UUID of the branding server customer, which corresponds to customer key in the branding server. | `String` |
        | <del>`branding_server_url`</del> | Access URL to to the Branding Server.<br>Only visible for _Config Manager_ of Provider Customer. | `String` |
        | <del>`email_from`</del> | Sender of system-generated emails<br>Only visible for _Config Manager_ of Provider Customer.<br>**Moved to branding** | `Valid email address` |
        | <del>`email_to_sales`</del> | Contact email address for customers to request more user licenses or data volume.<br>**Moved to branding** | `Valid email address` |
        | <del>`email_to_support`</del> | Support email address for users<br>**Moved to branding** | `Valid email address` |
        | <del>`file_size_js`</del> | Maximum file size (in bytes) for downloads of encrypted files with JavaScript.<br>Bigger files will require a JavaApplet. | `Integer`<br>Recommended value: `10485760` (=`10MB`) |
        | <del>`system_name`</del> | System name<br>**Moved to branding** use `product.title` | `Display name of the DRACOON` |
        
        </details>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/config/settings"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSystemSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 412:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"strings"
)

type Config struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewConfig(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Config {
	return &Config{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// RequestAlgorithms - Request algorithms
// <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>
//
// ### Description:
// Retrieve a list of available algorithms used for encryption.
//
// ### Precondition:
// Authenticated user.
//
// ### Postcondition:
// List of available algorithms is returned.
//
// ### Further Information:
// None.
func (s *Config) RequestAlgorithms(ctx context.Context, request operations.RequestAlgorithmsRequest) (*operations.RequestAlgorithmsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v4/config/info/policies/algorithms"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RequestAlgorithmsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AlgorithmVersionInfoList
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AlgorithmVersionInfoList = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 406:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 412:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	}

	return res, nil
}

// RequestGeneralSettingsInfo - Request general settings
// <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>
//
// ### Description:
// Returns a list of configurable general settings.
//
// ### Precondition:
// Authenticated user.
//
// ### Postcondition:
// List of configurable general settings is returned.
//
// ### Further Information:
// None.
//
// ### Configurable general settings:
// <details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
// <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
//
// | Setting | Description | Value |
// | :--- | :--- | :--- |
// | `sharePasswordSmsEnabled` | Determines whether sending of share passwords via SMS is allowed. | `true or false` |
// | `cryptoEnabled` | Determines whether client-side encryption is enabled.<br>Can only be enabled once; disabling is **NOT** possible. | `true or false` |
// | `emailNotificationButtonEnabled` | Determines whether email notification button is enabled. | `true or false` |
// | `eulaEnabled` | Determines whether EULA is enabled.<br>Each user has to confirm the EULA at first login. | `true or false` |
// | `useS3Storage` | Defines if S3 is used as storage backend.<br>Can only be enabled once; disabling is **NOT** possible. | `true or false` |
// | `s3TagsEnabled` | Determines whether S3 tags are enabled | `true or false` |
// | `homeRoomsActive` | Determines whether each AD user has a personal home room | `true or false` |
// | `homeRoomParentId` | Defines a node under which all personal home rooms are located. **NULL** if `homeRoomsActive` is `false` | `Long` |
//
// </details>
//
// ### Deprecated general settings:
// <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
// <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
//
// | Setting | Description | Value |
// | :--- | :--- | :--- |
// | <del>`mediaServerEnabled`</del> | Determines whether media server is enabled.<br>Returns boolean value dependent on conjunction of `mediaServerConfigEnabled` AND `mediaServerEnabled` | `true or false` |
// | <del>`weakPasswordEnabled`</del> | Determines whether weak password is allowed.<br>Use `GET /system/config/policies/passwords` API to get configured password policies. | `true or false` |
//
// </details>
func (s *Config) RequestGeneralSettingsInfo(ctx context.Context, request operations.RequestGeneralSettingsInfoRequest) (*operations.RequestGeneralSettingsInfoResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v4/config/info/general"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RequestGeneralSettingsInfoResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GeneralSettingsInfo
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GeneralSettingsInfo = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 406:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 412:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	}

	return res, nil
}

// RequestInfrastructurePropertiesInfo - Request infrastructure properties
// <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>
//
// ### Description:
// Returns a list of read-only infrastructure properties.
//
// ### Precondition:
// Authenticated user.
//
// ### Postcondition:
// List of infrastructure properties is returned.
//
// ### Further Information:
// Source: `core-service.properties`
//
// ### Read-only infrastructure properties:
// <details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
// <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
//
// | Setting | Description | Value |
// | :--- | :--- | :--- |
// | `smsConfigEnabled` | Determines whether sending of share passwords via SMS is **system-wide** enabled. | `true or false` |
// | `mediaServerConfigEnabled` | Determines whether media server is **system-wide** enabled. | `true or false` |
// | `s3DefaultRegion` | Suggested S3 region | `Region name` |
// | `s3EnforceDirectUpload` | Enforce direct upload to S3 | `true or false` |
// | `isDracoonCloud` | Determines if the **DRACOON Core** is deployed in the cloud environment | `true or false` |
// | `tenantUuid` | Current tenant UUID | `UUID` |
//
// </details>
func (s *Config) RequestInfrastructurePropertiesInfo(ctx context.Context, request operations.RequestInfrastructurePropertiesInfoRequest) (*operations.RequestInfrastructurePropertiesInfoResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v4/config/info/infrastructure"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RequestInfrastructurePropertiesInfoResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.InfrastructureProperties
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.InfrastructureProperties = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 406:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 412:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	}

	return res, nil
}

// RequestNotificationChannelsInfo - Request list of notification channels
// <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>
//
// ### Description:
// Retrieve a list of configured notification channels.
//
// ### Precondition:
// Authenticated user.
//
// ### Postcondition:
// List of notification channels is returned.
//
// ### Further Information:
// None.
func (s *Config) RequestNotificationChannelsInfo(ctx context.Context, request operations.RequestNotificationChannelsInfoRequest) (*operations.RequestNotificationChannelsInfoResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v4/config/info/notifications/channels"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RequestNotificationChannelsInfoResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.NotificationChannelList
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.NotificationChannelList = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 406:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 412:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	}

	return res, nil
}

// RequestPasswordPoliciesConfigInfo - Request password policies
// <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.14.0</h3>
//
// ### Description:
// Retrieve a list of configured password policies for all password types:
// * `login`
// * `shares`
// * `encryption`
//
// ### Precondition:
// Authenticated user.
//
// ### Postcondition:
// List of configured password policies is returned.
//
// ### Further Information:
// None.
//
// ### Available password policies:
// <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
// <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
//
// | Name | Description | Value | Password Type |
// | :--- | :--- | :--- | :--- |
// | `mustContainCharacters` | Characters which a password must contain:<br><ul><li>`alpha` - at least one alphabetical character (`uppercase` **OR** `lowercase`)<pre>a b c d e f g h i j k l m n o p q r s t u v w x y z<br>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</pre></li><li>`uppercase` - at least one uppercase character<pre>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</pre></li><li>`lowercase` - at least one lowercase character<pre>a b c d e f g h i j k l m n o p q r s t u v w x y z</pre></li><li>`numeric` - at least one numeric character<pre>0 1 2 3 4 5 6 7 8 9</pre></li><li>`special` - at least one special character (letters and digits excluded)<pre>! " # $ % ( ) * + , - . / : ; = ? @ [ \ ] ^ _ { &#124; } ~</pre></li><li>`none` - none of the above</li></ul> | <ul><li>`alpha`</li><li>`uppercase`</li><li>`lowercase`</li><li>`numeric`</li><li>`special`</li><li>`none`</li></ul> | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
// | `numberOfCharacteristicsToEnforce` | Number of characteristics to enforce.<br>e.g. from `["uppercase", "lowercase", "numeric", "special"]`<br>all 4 character sets can be enforced; but also only 2 of them | `Integer between 0 and 4` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
// | `minLength` | Minimum number of characters a password must contain. | `Integer between 1 and 1024` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
// | `rejectDictionaryWords` | Determines whether a password must **NOT** contain word(s) from a dictionary.<br>In `core-service.properties` a path to directory with dictionary files (`*.txt`) can be defined<br>cf. `policies.passwords.dictionary.directory`.<br><br>If this rule gets enabled `policies.passwords.dictionary.directory` must be defined and contain dictionary files.<br>Otherwise, the rule will not have any effect on password validation process. | `true or false` | <ul><li>`login`</li><li>`shares`</li></ul> |
// | `rejectUserInfo` | Determines whether a password must **NOT** contain user info.<br>Affects user's **first name**, **last name**, **email** and **user name**. | `true or false` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
// | `rejectKeyboardPatterns` | Determines whether a password must **NOT** contain keyboard patterns.<br>e.g. `qwertz`, `asdf` (min. 4 character pattern) | `true or false` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
// | `numberOfArchivedPasswords` | Number of passwords to archive.<br>Value `0` means that password history is disabled. | `Integer between 0 and 10` | <ul><li>`login`</li></ul> |
// | `passwordExpiration.enabled` | Determines whether password expiration is enabled. | `true or false` | <ul><li>`login`</li></ul> |
// | `maxPasswordAge` | Maximum allowed password age (in **days**) | `positive Integer` | <ul><li>`login`</li></ul> |
// | `userLockout.enabled` | Determines whether user lockout is enabled. | `true or false` | <ul><li>`login`</li></ul> |
// | `maxNumberOfLoginFailures` | Maximum allowed number of failed login attempts. | `positive Integer` | <ul><li>`login`</li></ul> |
// | `lockoutPeriod` | Amount of **minutes** a user has to wait to make another login attempt<br>after `maxNumberOfLoginFailures` has been exceeded. | `positive Integer` | <ul><li>`login`</li></ul> |
//
// </details>
func (s *Config) RequestPasswordPoliciesConfigInfo(ctx context.Context, request operations.RequestPasswordPoliciesConfigInfoRequest) (*operations.RequestPasswordPoliciesConfigInfoResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v4/config/info/policies/passwords"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RequestPasswordPoliciesConfigInfoResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PasswordPoliciesConfig
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PasswordPoliciesConfig = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 406:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	}

	return res, nil
}

// RequestS3TagsInfo - Request list of configured S3 tags
// <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.9.0</h3>
//
// ### Description:
// Retrieve all configured S3 tags.
//
// ### Precondition:
// Authenticated user.
//
// ### Postcondition:
// List of configured S3 tags is returned.
//
// ### Further Information:
// An empty list is returned if no S3 tags are found / configured.
func (s *Config) RequestS3TagsInfo(ctx context.Context, request operations.RequestS3TagsInfoRequest) (*operations.RequestS3TagsInfoResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v4/config/info/s3_tags"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RequestS3TagsInfoResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.S3TagList
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.S3TagList = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 406:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 412:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	}

	return res, nil
}

// RequestSystemDefaultsInfo - Request default values
// <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>
//
// ### Description:
// Returns a list of configurable system default values.
//
// ### Precondition:
// Authenticated user.
//
// ### Postcondition:
// List of configurable default settings is returned.
//
// ### Further Information:
// None.
//
// ### Configurable default values:
// <details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
// <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
//
// | Setting | Description | Value |
// | :--- | :--- | :--- |
// | `languageDefault` | Defines which language should be default. | `ISO 639-1 code` |
// | `downloadShareDefaultExpirationPeriod` | Default expiration period for Download Shares in _days_. | `Integer between 0 and 9999` |
// | `uploadShareDefaultExpirationPeriod` | Default expiration period for Upload Shares in _days_. | `Integer between 0 and 9999` |
// | `fileDefaultExpirationPeriod` | Default expiration period for all uploaded files in _days_. | `Integer between 0 and 9999` |
// | `nonmemberViewerDefault` | Defines if new users get the role _Non Member Viewer_ by default | `true or false` |
//
// </details>
// https://tools.ietf.org/html/rfc5646 - Tags for Identifying Languages
func (s *Config) RequestSystemDefaultsInfo(ctx context.Context, request operations.RequestSystemDefaultsInfoRequest) (*operations.RequestSystemDefaultsInfoResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v4/config/info/defaults"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RequestSystemDefaultsInfoResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SystemDefaults
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SystemDefaults = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 406:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 412:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	}

	return res, nil
}

// RequestSystemSettings - Request system settings
// <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.6.0</h3>
//
// ### Description:
// Returns a list of configurable system settings.
//
// ### Precondition:
// Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> required.
//
// ### Postcondition:
// List of configurable settings is returned.
//
// ### Further Information:
// Check for every settings key new corresponding API and key below.
//
// If `eula_active` is true, but **NOT** accepted yet, or password **MUST** be changed, only the following two values are returned:
// * `allow_system_global_weak_password`
// * `eula_active`
//
// ### Configurable settings
// <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
// <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
//
// | Setting | Description | Value |
// | :--- | :--- | :--- |
// | `branding_server_branding_id` | The branding UUID, which corresponds to _BRANDING-QUALIFIER_ in the new branding server.<br>cf. `GET /system/config/settings/branding` `BrandingConfig.brandingQualifier` | `String` |
// | `branding_portal_url` | Access URL to to the Branding Portal<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `GET /system/config/settings/branding` `BrandingConfig.brandingProviderUrl` | `String` |
// | `dblog` | Write logs to local database.<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `GET /system/config/settings/eventlog` `EventlogConfig.enabled` | `true or false` |
// | `default_downloadshare_expiration_period` | Default expiration period for Download Shares in days<br>cf. `GET /system/config/settings/defaults` `SystemDefaults.downloadShareDefaultExpirationPeriod` | `Integer between 0 and 9999` |
// | `default_file_upload_expiration_date` | Default expiration period for all uploaded files in days<br>cf. `GET /system/config/settings/defaults` `SystemDefaults.fileDefaultExpirationPeriod` | `Integer between 0 and 9999` |
// | `default_language` | Define which language should be default.<br>cf. `GET /system/config/settings/defaults` `SystemDefaults.languageDefault` | cf. `GET /public/system/info` - `SystemInfo.languageDefault` |
// | `default_uploadshare_expiration_period` | Default expiration period for Upload Shares in days<br>cf. `GET /system/config/settings/defaults` `SystemDefaults.uploadShareDefaultExpirationPeriod` | `Integer between 0 and 9999` |
// | `enable_client_side_crypto` | Activation status of client-side encryption<br>Can only be enabled once; disabling is **NOT** possible.<br>cf. `GET /system/config/settings/general` `GeneralSettings.cryptoEnabled` | `true or false`<br>default: `false` |
// | `eula_active` | Each user has to confirm the EULA at first login.<br>cf. `GET /system/config/settings/general` `GeneralSettings.eulaEnabled` | `true or false` |
// | `eventlog_retention_period` | Retention period (in days) of event log entries<br>After that period, all entries are deleted.<br>cf. `GET /system/config/settings/eventlog` `EventlogConfig.retentionPeriod` | `Integer between 0 and 9999`<br>If set to `0`: no logs are deleted<br>Recommended value: `7` |
// | `ip_address_logging` | Determines whether a user's IP address is logged.<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `GET /system/config/settings/eventlog` `EventlogConfig.logIpEnabled`<br>cf. `GET /system/config/settings/syslog` `SyslogConfig.logIpEnabled` | `true or false` |
// | `mailserver` | Email server to send emails.<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `GET /system/config/settings/mail_server` `MailServerConfig.host` | `DNS name or IPv4 of an email server` |
// | `mailserver_authentication_necessary` | Set to `true` if the email server requires authentication.<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `GET /system/config/settings/mail_server` `MailServerConfig.authenticationEnabled` | `true or false` |
// | `mailserver_password` | **Password is no longer returned.**<br>Check `mailserver_password_set` to determine whether password is set. |  |
// | `mailserver_password_set` | Indicates if a password is set for the mailserver (because `mailserver_password` is always returned empty).<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `GET /system/config/settings/mail_server` `MailServerConfig.passwordDefined` | `true or false` |
// | `mailserver_port` | Email server port<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `GET /system/config/settings/mail_server` `MailServerConfig.port` | `Valid port number` |
// | `mailserver_username` | User ame for email server<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `GET /system/config/settings/mail_server` `MailServerConfig.username` | `Username for authentication` |
// | `mailserver_use_ssl` | Email server requires SSL connection?<br>Only visible for _Config Manager_ of Provider Customer.<br>Requires `mailserver_use_starttls` to be `false`<br>cf. `GET /system/config/settings/mail_server` `MailServerConfig.username` | `true or false` |
// | `mailserver_use_starttls` | Email server requires StartTLS connection?<br>Only visible for _Config Manager_ of Provider Customer.<br>Requires `mailserver_use_ssl` to be `false`<br>cf. `GET /system/config/settings/mail_server` `MailServerConfig.starttlsEnabled` | `true or false` |
// | `syslog` | Write logs to a syslog interface.<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `GET /system/config/settings/syslog` `SyslogConfig.enabled` | `true or false` |
// | `syslog_host` | Syslog server (IP or FQDN)<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `GET /system/config/settings/syslog` `SyslogConfig.host` | `DNS name or IPv4 of a syslog server` |
// | `syslog_port` | Syslog server port<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `GET /system/config/settings/syslog` `SyslogConfig.port` | `Valid port number` |
// | `syslog_protocol` | Protocol to connect to syslog server.<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `GET /system/config/settings/syslog` `SyslogConfig.protocol` | `TCP or UDP` |
// | `enable_email_notification_button` | Enable mail notification button.<br>cf. `GET /system/config/settings/general` `GeneralSettings.emailNotificationButtonEnabled` | `true or false` |
// | `allow_share_password_sms` | Allow sending of share passwords via SMS.<br>cf. `GET /system/config/settings/general` `GeneralSettings.sharePasswordSmsEnabled` | `true or false` |
// | `globally_allow_share_password_sms` | Allow sending of share passwords via SMS **system-wide** (read-only).<br>cf. `GET /system/config/settings/infrastructure` `InfrastructureProperties.smsConfigEnabled` | `true or false` |
// | `use_s3_storage` | Defines if S3 is used as storage backend.<br>Can only be enabled once; disabling is **NOT** possible.<br>cf. `GET /system/config/settings/general` `GeneralSettings.useS3Storage` | `true or false` |
// | `s3_default_region` |Suggested S3 region (read-only)<br>cf. `GET /system/config/settings/infrastructure` `InfrastructureProperties.s3DefaultRegion` | `Region name` |
//
// </details>
//
// ### Deprecated settings
// <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
// <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
//
// | Setting | Description | Value |
// | :--- | :--- | :--- |
// | <del>`allow_system_global_weak_password`</del> | Determines whether weak password (cf. _Password Policy_ below) is allowed.<br>cf. `GET /system/config/settings/general` `GeneralSettings.weakPasswordEnabled`<br>Use `GET /system/config/policies/passwords` API to get configured password policies. | `true or false` |
// | <del>`branding_server_customer`</del> | The UUID of the branding server customer, which corresponds to customer key in the branding server. | `String` |
// | <del>`branding_server_url`</del> | Access URL to to the Branding Server.<br>Only visible for _Config Manager_ of Provider Customer. | `String` |
// | <del>`email_from`</del> | Sender of system-generated emails<br>Only visible for _Config Manager_ of Provider Customer.<br>**Moved to branding** | `Valid email address` |
// | <del>`email_to_sales`</del> | Contact email address for customers to request more user licenses or data volume.<br>**Moved to branding** | `Valid email address` |
// | <del>`email_to_support`</del> | Support email address for users<br>**Moved to branding** | `Valid email address` |
// | <del>`file_size_js`</del> | Maximum file size (in bytes) for downloads of encrypted files with JavaScript.<br>Bigger files will require a JavaApplet. | `Integer`<br>Recommended value: `10485760` (=`10MB`) |
// | <del>`system_name`</del> | System name<br>**Moved to branding** use `product.title` | `Display name of the DRACOON` |
//
// </details>
func (s *Config) RequestSystemSettings(ctx context.Context, request operations.RequestSystemSettingsRequest) (*operations.RequestSystemSettingsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v4/config/settings"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RequestSystemSettingsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ConfigOptionList
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigOptionList = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 406:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 412:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	}

	return res, nil
}

// UpdateSystemSettings - Update system settings
// <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.6.0</h3>
//
// ### Description:
// Update configurable settings.
//
// ### Precondition:
// Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
// role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
//
// ### Postcondition:
// One or more global settings gets changed.
//
// ### Further Information:
// This API is deprecated and will be removed in the future.
// Check for every settings key new corresponding API and key below.
//
// ### Configurable settings:
// <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
// <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
//
// | Setting | Description | Value |
// | :--- | :--- | :--- |
// | `branding_server_branding_id` | The branding UUID, which corresponds to _BRANDING-QUALIFIER_ in the new branding server.<br>cf. `PUT /system/config/settings/branding` `BrandingConfig.brandingQualifier` | `String` |
// | `branding_portal_url` | Access URL to to the Branding Portal<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `PUT /system/config/settings/branding` `BrandingConfig.brandingProviderUrl` | `String` |
// | `dblog` | Write logs to local database.<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `PUT /system/config/settings/eventlog` `EventlogConfig.enabled` | `true or false` |
// | `default_downloadshare_expiration_period` | Default expiration period for Download Shares in days<br>cf. `PUT /system/config/settings/defaults` `SystemDefaults.downloadShareDefaultExpirationPeriod` | `Integer between 0 and 9999`<br>Set `0` to disable. |
// | `default_file_upload_expiration_date` | Default expiration period for all uploaded files in days<br>cf. `PUT /system/config/settings/defaults` `SystemDefaults.fileDefaultExpirationPeriod` | `Integer between 0 and 9999`<br>Set `0` to disable. |
// | `default_language` | Define which language should be default.<br>cf. `PUT /system/config/settings/defaults` `SystemDefaults.languageDefault` | cf. `GET /public/system/info` - `SystemInfo.languageDefault` |
// | `default_uploadshare_expiration_period` | Default expiration period for Upload Shares in days<br>cf. `PUT /system/config/settings/defaults` `SystemDefaults.uploadShareDefaultExpirationPeriod` | `Integer between 0 and 9999`<br>Set `0` to disable. |
// | `enable_client_side_crypto` | Activation status of client-side encryption<br>Can only be enabled once; disabling is **NOT** possible.<br>cf. `PUT /system/config/settings/general` `GeneralSettings.cryptoEnabled` | `true or false`<br>default: `false` |
// | `eula_active` | Each user has to confirm the EULA at first login.<br>cf. `PUT /system/config/settings/general` `GeneralSettings.eulaEnabled` | `true or false` |
// | `eventlog_retention_period` | Retention period (in days) of event log entries<br>After that period, all entries are deleted.<br>cf. `PUT /system/config/settings/eventlog` `EventlogConfig.retentionPeriod` | `Integer between 0 and 9999`<br>If set to `0`: no logs are deleted<br>Recommended value: `7` |
// | `ip_address_logging` | Determines whether a user's IP address is logged.<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `PUT /system/config/settings/eventlog` `EventlogConfig.logIpEnabled`<br>cf. `PUT /system/config/settings/syslog` `SyslogConfig.logIpEnabled` | `true or false` |
// | `mailserver` | Email server to send emails.<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `PUT /system/config/settings/mail_server` `MailServerConfig.host` | `DNS name or IPv4 of an email server` |
// | `mailserver_authentication_necessary` | Set to `true` if the email server requires authentication.<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `PUT /system/config/settings/mail_server` `MailServerConfig.authenticationEnabled` | `true or false` |
// | `mailserver_password` | Password for email server<br>cf. `PUT /system/config/settings/mail_server` `MailServerConfig.password` | `Password for authentication` |
// | `mailserver_port` | Email server port<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `PUT /system/config/settings/mail_server` `MailServerConfig.port` | `Valid port number` |
// | `mailserver_username` | Username for email server<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `PUT /system/config/settings/mail_server` `MailServerConfig.username` | `Username for authentication` |
// | `mailserver_use_ssl` | Email server requires SSL connection?<br>Only visible for _Config Manager_ of Provider Customer.<br>Requires `mailserver_use_starttls` to be `false`<br>cf. `PUT /system/config/settings/mail_server` `MailServerConfig.username` | `true or false` |
// | `mailserver_use_starttls` | Email server requires StartTLS connection?<br>Only visible for _Config Manager_ of Provider Customer.<br>Requires `mailserver_use_ssl` to be `false`<br>cf. `PUT /system/config/settings/mail_server` `MailServerConfig.starttlsEnabled` | `true or false` |
// | `syslog` | Write logs to a syslog interface.<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `PUT /system/config/settings/syslog` `SyslogConfig.enabled` | `true or false` |
// | `syslog_host` | Syslog server (IP or FQDN)<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `PUT /system/config/settings/syslog` `SyslogConfig.host` | `DNS name or IPv4 of a syslog server` |
// | `syslog_port` | Syslog server port<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `PUT /system/config/settings/syslog` `SyslogConfig.port` | `Valid port number` |
// | `syslog_protocol` | Protocol to connect to syslog server.<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `PUT /system/config/settings/syslog` `SyslogConfig.protocol` | `TCP or UDP` |
// | `enable_email_notification_button` | Enable mail notification button.<br>cf. `PUT /system/config/settings/general` `GeneralSettings.emailNotificationButtonEnabled` | `true or false` |
// | `allow_share_password_sms` | Allow sending of share passwords via SMS.<br>cf. `PUT /system/config/settings/general` `GeneralSettings.sharePasswordSmsEnabled` | `true or false` |
//
// </details>
//
// ### Deprecated settings:
// <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
// <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
//
// | Setting | Description | Value |
// | :--- | :--- | :--- |
// | <del>`allow_system_global_weak_password`</del> | Determines whether weak password (cf. _Password Policy_ below) is allowed.<br>cf. `PUT /system/config/settings/general` `GeneralSettings.weakPasswordEnabled`<br>Use `PUT /system/config/policies/passwords` API to change configured password policies. | `true or false` |
// | <del>`branding_server_customer`</del> | The UUID of the branding server customer, which corresponds to customer key in the branding server. | `String` |
// | <del>`branding_server_url`</del> | Access URL to to the Branding Server.<br>Only visible for _Config Manager_ of Provider Customer. | `String` |
// | <del>`email_from`</del> | Sender of system-generated emails<br>Only visible for _Config Manager_ of Provider Customer.<br>**Moved to branding** | `Valid email address` |
// | <del>`email_to_sales`</del> | Contact email address for customers to request more user licenses or data volume.<br>**Moved to branding** | `Valid email address` |
// | <del>`email_to_support`</del> | Support email address for users<br>**Moved to branding** | `Valid email address` |
// | <del>`file_size_js`</del> | Maximum file size (in bytes) for downloads of encrypted files with JavaScript.<br>Bigger files will require a JavaApplet. | `Integer`<br>Recommended value: `10485760` (=`10MB`) |
// | <del>`system_name`</del> | System name<br>**Moved to branding** use `product.title` | `Display name of the DRACOON` |
//
// </details>
func (s *Config) UpdateSystemSettings(ctx context.Context, request operations.UpdateSystemSettingsRequest) (*operations.UpdateSystemSettingsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v4/config/settings"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UpdateSystemSettingsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 406:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	case httpRes.StatusCode == 412:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponse = out
		}
	}

	return res, nil
}

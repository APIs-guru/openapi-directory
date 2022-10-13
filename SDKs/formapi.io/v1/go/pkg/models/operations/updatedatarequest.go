package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDataRequestPathParams struct {
	DataRequestID string `pathParam:"style=simple,explode=false,name=data_request_id"`
}

type UpdateDataRequestRequestBodyAuthSecondFactorTypeEnum string

const (
	UpdateDataRequestRequestBodyAuthSecondFactorTypeEnumNone        UpdateDataRequestRequestBodyAuthSecondFactorTypeEnum = "none"
	UpdateDataRequestRequestBodyAuthSecondFactorTypeEnumPhoneNumber UpdateDataRequestRequestBodyAuthSecondFactorTypeEnum = "phone_number"
	UpdateDataRequestRequestBodyAuthSecondFactorTypeEnumTotp        UpdateDataRequestRequestBodyAuthSecondFactorTypeEnum = "totp"
	UpdateDataRequestRequestBodyAuthSecondFactorTypeEnumMobilePush  UpdateDataRequestRequestBodyAuthSecondFactorTypeEnum = "mobile_push"
	UpdateDataRequestRequestBodyAuthSecondFactorTypeEnumSecurityKey UpdateDataRequestRequestBodyAuthSecondFactorTypeEnum = "security_key"
	UpdateDataRequestRequestBodyAuthSecondFactorTypeEnumFingerprint UpdateDataRequestRequestBodyAuthSecondFactorTypeEnum = "fingerprint"
)

type UpdateDataRequestRequestBodyAuthTypeEnum string

const (
	UpdateDataRequestRequestBodyAuthTypeEnumNone        UpdateDataRequestRequestBodyAuthTypeEnum = "none"
	UpdateDataRequestRequestBodyAuthTypeEnumPassword    UpdateDataRequestRequestBodyAuthTypeEnum = "password"
	UpdateDataRequestRequestBodyAuthTypeEnumOauth       UpdateDataRequestRequestBodyAuthTypeEnum = "oauth"
	UpdateDataRequestRequestBodyAuthTypeEnumEmailLink   UpdateDataRequestRequestBodyAuthTypeEnum = "email_link"
	UpdateDataRequestRequestBodyAuthTypeEnumPhoneNumber UpdateDataRequestRequestBodyAuthTypeEnum = "phone_number"
	UpdateDataRequestRequestBodyAuthTypeEnumLdap        UpdateDataRequestRequestBodyAuthTypeEnum = "ldap"
	UpdateDataRequestRequestBodyAuthTypeEnumSaml        UpdateDataRequestRequestBodyAuthTypeEnum = "saml"
)

type UpdateDataRequestRequestBodyUpdateSubmissionDataRequestData struct {
	AuthPhoneNumberHash  *string                                               `json:"auth_phone_number_hash"`
	AuthProvider         *string                                               `json:"auth_provider"`
	AuthSecondFactorType *UpdateDataRequestRequestBodyAuthSecondFactorTypeEnum `json:"auth_second_factor_type"`
	AuthSessionIDHash    *string                                               `json:"auth_session_id_hash"`
	AuthSessionStartedAt *string                                               `json:"auth_session_started_at"`
	AuthType             *UpdateDataRequestRequestBodyAuthTypeEnum             `json:"auth_type"`
	AuthUserIDHash       *string                                               `json:"auth_user_id_hash"`
	AuthUsernameHash     *string                                               `json:"auth_username_hash"`
	Email                *string                                               `json:"email"`
	Fields               []string                                              `json:"fields"`
	Metadata             map[string]interface{}                                `json:"metadata"`
	Name                 *string                                               `json:"name"`
	Order                *int64                                                `json:"order"`
}

type UpdateDataRequestSecurity struct {
	APITokenBasic shared.SchemeAPITokenBasic `security:"scheme,type=http,subtype=basic"`
}

type UpdateDataRequestRequest struct {
	PathParams UpdateDataRequestPathParams
	Request    UpdateDataRequestRequestBodyUpdateSubmissionDataRequestData `request:"mediaType=application/json"`
	Security   UpdateDataRequestSecurity
}

type UpdateDataRequest200ApplicationJSONStatusEnum string

const (
	UpdateDataRequest200ApplicationJSONStatusEnumSuccess UpdateDataRequest200ApplicationJSONStatusEnum = "success"
	UpdateDataRequest200ApplicationJSONStatusEnumError   UpdateDataRequest200ApplicationJSONStatusEnum = "error"
)

type UpdateDataRequest200ApplicationJSONUpdateDataRequestResponse struct {
	DataRequest shared.SubmissionDataRequest                  `json:"data_request"`
	Errors      []string                                      `json:"errors"`
	Status      UpdateDataRequest200ApplicationJSONStatusEnum `json:"status"`
}

type UpdateDataRequestResponse struct {
	ContentType               string
	StatusCode                int64
	AuthenticationError       *shared.AuthenticationError
	Error                     *shared.Error
	InvalidRequest            *shared.InvalidRequest
	UpdateDataRequestResponse *UpdateDataRequest200ApplicationJSONUpdateDataRequestResponse
}

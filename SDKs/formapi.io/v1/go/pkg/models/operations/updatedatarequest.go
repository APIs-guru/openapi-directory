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
	AuthPhoneNumberHash  *string                                               `json:"auth_phone_number_hash,omitempty"`
	AuthProvider         *string                                               `json:"auth_provider,omitempty"`
	AuthSecondFactorType *UpdateDataRequestRequestBodyAuthSecondFactorTypeEnum `json:"auth_second_factor_type,omitempty"`
	AuthSessionIDHash    *string                                               `json:"auth_session_id_hash,omitempty"`
	AuthSessionStartedAt *string                                               `json:"auth_session_started_at,omitempty"`
	AuthType             *UpdateDataRequestRequestBodyAuthTypeEnum             `json:"auth_type,omitempty"`
	AuthUserIDHash       *string                                               `json:"auth_user_id_hash,omitempty"`
	AuthUsernameHash     *string                                               `json:"auth_username_hash,omitempty"`
	Email                *string                                               `json:"email,omitempty"`
	Fields               []string                                              `json:"fields,omitempty"`
	Metadata             map[string]interface{}                                `json:"metadata,omitempty"`
	Name                 *string                                               `json:"name,omitempty"`
	Order                *int64                                                `json:"order,omitempty"`
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
	Errors      []string                                      `json:"errors,omitempty"`
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

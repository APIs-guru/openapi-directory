package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDataRequestPathParams struct {
	DataRequestID string `pathParam:"style=simple,explode=false,name=data_request_id"`
}

type UpdateDataRequestUpdateSubmissionDataRequestDataAuthSecondFactorTypeEnum string

const (
	UpdateDataRequestUpdateSubmissionDataRequestDataAuthSecondFactorTypeEnumNone        UpdateDataRequestUpdateSubmissionDataRequestDataAuthSecondFactorTypeEnum = "none"
	UpdateDataRequestUpdateSubmissionDataRequestDataAuthSecondFactorTypeEnumPhoneNumber UpdateDataRequestUpdateSubmissionDataRequestDataAuthSecondFactorTypeEnum = "phone_number"
	UpdateDataRequestUpdateSubmissionDataRequestDataAuthSecondFactorTypeEnumTotp        UpdateDataRequestUpdateSubmissionDataRequestDataAuthSecondFactorTypeEnum = "totp"
	UpdateDataRequestUpdateSubmissionDataRequestDataAuthSecondFactorTypeEnumMobilePush  UpdateDataRequestUpdateSubmissionDataRequestDataAuthSecondFactorTypeEnum = "mobile_push"
	UpdateDataRequestUpdateSubmissionDataRequestDataAuthSecondFactorTypeEnumSecurityKey UpdateDataRequestUpdateSubmissionDataRequestDataAuthSecondFactorTypeEnum = "security_key"
	UpdateDataRequestUpdateSubmissionDataRequestDataAuthSecondFactorTypeEnumFingerprint UpdateDataRequestUpdateSubmissionDataRequestDataAuthSecondFactorTypeEnum = "fingerprint"
)

type UpdateDataRequestUpdateSubmissionDataRequestDataAuthTypeEnum string

const (
	UpdateDataRequestUpdateSubmissionDataRequestDataAuthTypeEnumNone        UpdateDataRequestUpdateSubmissionDataRequestDataAuthTypeEnum = "none"
	UpdateDataRequestUpdateSubmissionDataRequestDataAuthTypeEnumPassword    UpdateDataRequestUpdateSubmissionDataRequestDataAuthTypeEnum = "password"
	UpdateDataRequestUpdateSubmissionDataRequestDataAuthTypeEnumOauth       UpdateDataRequestUpdateSubmissionDataRequestDataAuthTypeEnum = "oauth"
	UpdateDataRequestUpdateSubmissionDataRequestDataAuthTypeEnumEmailLink   UpdateDataRequestUpdateSubmissionDataRequestDataAuthTypeEnum = "email_link"
	UpdateDataRequestUpdateSubmissionDataRequestDataAuthTypeEnumPhoneNumber UpdateDataRequestUpdateSubmissionDataRequestDataAuthTypeEnum = "phone_number"
	UpdateDataRequestUpdateSubmissionDataRequestDataAuthTypeEnumLdap        UpdateDataRequestUpdateSubmissionDataRequestDataAuthTypeEnum = "ldap"
	UpdateDataRequestUpdateSubmissionDataRequestDataAuthTypeEnumSaml        UpdateDataRequestUpdateSubmissionDataRequestDataAuthTypeEnum = "saml"
)

type UpdateDataRequestUpdateSubmissionDataRequestData struct {
	AuthPhoneNumberHash  *string                                                                   `json:"auth_phone_number_hash,omitempty"`
	AuthProvider         *string                                                                   `json:"auth_provider,omitempty"`
	AuthSecondFactorType *UpdateDataRequestUpdateSubmissionDataRequestDataAuthSecondFactorTypeEnum `json:"auth_second_factor_type,omitempty"`
	AuthSessionIDHash    *string                                                                   `json:"auth_session_id_hash,omitempty"`
	AuthSessionStartedAt *string                                                                   `json:"auth_session_started_at,omitempty"`
	AuthType             *UpdateDataRequestUpdateSubmissionDataRequestDataAuthTypeEnum             `json:"auth_type,omitempty"`
	AuthUserIDHash       *string                                                                   `json:"auth_user_id_hash,omitempty"`
	AuthUsernameHash     *string                                                                   `json:"auth_username_hash,omitempty"`
	Email                *string                                                                   `json:"email,omitempty"`
	Fields               []string                                                                  `json:"fields,omitempty"`
	Metadata             map[string]interface{}                                                    `json:"metadata,omitempty"`
	Name                 *string                                                                   `json:"name,omitempty"`
	Order                *int64                                                                    `json:"order,omitempty"`
}

type UpdateDataRequestSecurity struct {
	APITokenBasic shared.SchemeAPITokenBasic `security:"scheme,type=http,subtype=basic"`
}

type UpdateDataRequestUpdateDataRequestResponseStatusEnum string

const (
	UpdateDataRequestUpdateDataRequestResponseStatusEnumSuccess UpdateDataRequestUpdateDataRequestResponseStatusEnum = "success"
	UpdateDataRequestUpdateDataRequestResponseStatusEnumError   UpdateDataRequestUpdateDataRequestResponseStatusEnum = "error"
)

type UpdateDataRequestUpdateDataRequestResponse struct {
	DataRequest shared.SubmissionDataRequest                         `json:"data_request"`
	Errors      []string                                             `json:"errors,omitempty"`
	Status      UpdateDataRequestUpdateDataRequestResponseStatusEnum `json:"status"`
}

type UpdateDataRequestRequest struct {
	PathParams UpdateDataRequestPathParams
	Request    UpdateDataRequestUpdateSubmissionDataRequestData `request:"mediaType=application/json"`
	Security   UpdateDataRequestSecurity
}

type UpdateDataRequestResponse struct {
	ContentType               string
	StatusCode                int64
	AuthenticationError       *shared.AuthenticationError
	Error                     *shared.Error
	InvalidRequest            *shared.InvalidRequest
	UpdateDataRequestResponse *UpdateDataRequestUpdateDataRequestResponse
}

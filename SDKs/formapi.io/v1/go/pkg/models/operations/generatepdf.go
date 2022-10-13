package operations

import (
	"openapi/pkg/models/shared"
)

type GeneratePdfPathParams struct {
	TemplateID string `pathParam:"style=simple,explode=false,name=template_id"`
}

type GeneratePdfRequestBodyDataRequestsAuthSecondFactorTypeEnum string

const (
	GeneratePdfRequestBodyDataRequestsAuthSecondFactorTypeEnumNone        GeneratePdfRequestBodyDataRequestsAuthSecondFactorTypeEnum = "none"
	GeneratePdfRequestBodyDataRequestsAuthSecondFactorTypeEnumPhoneNumber GeneratePdfRequestBodyDataRequestsAuthSecondFactorTypeEnum = "phone_number"
	GeneratePdfRequestBodyDataRequestsAuthSecondFactorTypeEnumTotp        GeneratePdfRequestBodyDataRequestsAuthSecondFactorTypeEnum = "totp"
	GeneratePdfRequestBodyDataRequestsAuthSecondFactorTypeEnumMobilePush  GeneratePdfRequestBodyDataRequestsAuthSecondFactorTypeEnum = "mobile_push"
	GeneratePdfRequestBodyDataRequestsAuthSecondFactorTypeEnumSecurityKey GeneratePdfRequestBodyDataRequestsAuthSecondFactorTypeEnum = "security_key"
	GeneratePdfRequestBodyDataRequestsAuthSecondFactorTypeEnumFingerprint GeneratePdfRequestBodyDataRequestsAuthSecondFactorTypeEnum = "fingerprint"
)

type GeneratePdfRequestBodyDataRequestsAuthTypeEnum string

const (
	GeneratePdfRequestBodyDataRequestsAuthTypeEnumNone        GeneratePdfRequestBodyDataRequestsAuthTypeEnum = "none"
	GeneratePdfRequestBodyDataRequestsAuthTypeEnumPassword    GeneratePdfRequestBodyDataRequestsAuthTypeEnum = "password"
	GeneratePdfRequestBodyDataRequestsAuthTypeEnumOauth       GeneratePdfRequestBodyDataRequestsAuthTypeEnum = "oauth"
	GeneratePdfRequestBodyDataRequestsAuthTypeEnumEmailLink   GeneratePdfRequestBodyDataRequestsAuthTypeEnum = "email_link"
	GeneratePdfRequestBodyDataRequestsAuthTypeEnumPhoneNumber GeneratePdfRequestBodyDataRequestsAuthTypeEnum = "phone_number"
	GeneratePdfRequestBodyDataRequestsAuthTypeEnumLdap        GeneratePdfRequestBodyDataRequestsAuthTypeEnum = "ldap"
	GeneratePdfRequestBodyDataRequestsAuthTypeEnumSaml        GeneratePdfRequestBodyDataRequestsAuthTypeEnum = "saml"
)

type GeneratePdfRequestBodyDataRequestsCreateSubmissionDataRequestData struct {
	AuthPhoneNumberHash  *string                                                     `json:"auth_phone_number_hash"`
	AuthProvider         *string                                                     `json:"auth_provider"`
	AuthSecondFactorType *GeneratePdfRequestBodyDataRequestsAuthSecondFactorTypeEnum `json:"auth_second_factor_type"`
	AuthSessionIDHash    *string                                                     `json:"auth_session_id_hash"`
	AuthSessionStartedAt *string                                                     `json:"auth_session_started_at"`
	AuthType             GeneratePdfRequestBodyDataRequestsAuthTypeEnum              `json:"auth_type"`
	AuthUserIDHash       *string                                                     `json:"auth_user_id_hash"`
	AuthUsernameHash     *string                                                     `json:"auth_username_hash"`
	Email                string                                                      `json:"email"`
	Fields               []string                                                    `json:"fields"`
	Metadata             map[string]interface{}                                      `json:"metadata"`
	Name                 *string                                                     `json:"name"`
	Order                *int64                                                      `json:"order"`
}

type GeneratePdfRequestBodySubmissionData struct {
	CSS            *string                                                             `json:"css"`
	Data           map[string]interface{}                                              `json:"data"`
	DataRequests   []GeneratePdfRequestBodyDataRequestsCreateSubmissionDataRequestData `json:"data_requests"`
	FieldOverrides map[string]interface{}                                              `json:"field_overrides"`
	HTML           *string                                                             `json:"html"`
	Metadata       map[string]interface{}                                              `json:"metadata"`
	Test           *bool                                                               `json:"test"`
}

type GeneratePdfSecurity struct {
	APITokenBasic shared.SchemeAPITokenBasic `security:"scheme,type=http,subtype=basic"`
}

type GeneratePdfRequest struct {
	PathParams GeneratePdfPathParams
	Request    GeneratePdfRequestBodySubmissionData `request:"mediaType=application/json"`
	Security   GeneratePdfSecurity
}

type GeneratePdf201ApplicationJSONStatusEnum string

const (
	GeneratePdf201ApplicationJSONStatusEnumSuccess GeneratePdf201ApplicationJSONStatusEnum = "success"
	GeneratePdf201ApplicationJSONStatusEnumError   GeneratePdf201ApplicationJSONStatusEnum = "error"
)

type GeneratePdf201ApplicationJSONCreateSubmissionResponse struct {
	Errors     []string                                `json:"errors"`
	Status     GeneratePdf201ApplicationJSONStatusEnum `json:"status"`
	Submission shared.Submission                       `json:"submission"`
}

type GeneratePdfResponse struct {
	ContentType              string
	StatusCode               int64
	AuthenticationError      *shared.AuthenticationError
	CreateSubmissionResponse *GeneratePdf201ApplicationJSONCreateSubmissionResponse
	Error                    *shared.Error
	InvalidRequest           *shared.InvalidRequest
}

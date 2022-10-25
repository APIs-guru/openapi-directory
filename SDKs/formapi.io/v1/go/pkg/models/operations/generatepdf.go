package operations

import (
	"openapi/pkg/models/shared"
)

type GeneratePdfPathParams struct {
	TemplateID string `pathParam:"style=simple,explode=false,name=template_id"`
}

type GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthSecondFactorTypeEnum string

const (
	GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthSecondFactorTypeEnumNone        GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthSecondFactorTypeEnum = "none"
	GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthSecondFactorTypeEnumPhoneNumber GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthSecondFactorTypeEnum = "phone_number"
	GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthSecondFactorTypeEnumTotp        GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthSecondFactorTypeEnum = "totp"
	GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthSecondFactorTypeEnumMobilePush  GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthSecondFactorTypeEnum = "mobile_push"
	GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthSecondFactorTypeEnumSecurityKey GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthSecondFactorTypeEnum = "security_key"
	GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthSecondFactorTypeEnumFingerprint GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthSecondFactorTypeEnum = "fingerprint"
)

type GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthTypeEnum string

const (
	GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthTypeEnumNone        GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthTypeEnum = "none"
	GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthTypeEnumPassword    GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthTypeEnum = "password"
	GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthTypeEnumOauth       GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthTypeEnum = "oauth"
	GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthTypeEnumEmailLink   GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthTypeEnum = "email_link"
	GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthTypeEnumPhoneNumber GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthTypeEnum = "phone_number"
	GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthTypeEnumLdap        GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthTypeEnum = "ldap"
	GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthTypeEnumSaml        GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthTypeEnum = "saml"
)

type GeneratePdfSubmissionDataCreateSubmissionDataRequestData struct {
	AuthPhoneNumberHash  *string                                                                           `json:"auth_phone_number_hash,omitempty"`
	AuthProvider         *string                                                                           `json:"auth_provider,omitempty"`
	AuthSecondFactorType *GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthSecondFactorTypeEnum `json:"auth_second_factor_type,omitempty"`
	AuthSessionIDHash    *string                                                                           `json:"auth_session_id_hash,omitempty"`
	AuthSessionStartedAt *string                                                                           `json:"auth_session_started_at,omitempty"`
	AuthType             GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthTypeEnum              `json:"auth_type"`
	AuthUserIDHash       *string                                                                           `json:"auth_user_id_hash,omitempty"`
	AuthUsernameHash     *string                                                                           `json:"auth_username_hash,omitempty"`
	Email                string                                                                            `json:"email"`
	Fields               []string                                                                          `json:"fields,omitempty"`
	Metadata             map[string]interface{}                                                            `json:"metadata,omitempty"`
	Name                 *string                                                                           `json:"name,omitempty"`
	Order                *int64                                                                            `json:"order,omitempty"`
}

type GeneratePdfSubmissionData struct {
	CSS            *string                                                    `json:"css,omitempty"`
	Data           map[string]interface{}                                     `json:"data"`
	DataRequests   []GeneratePdfSubmissionDataCreateSubmissionDataRequestData `json:"data_requests,omitempty"`
	FieldOverrides map[string]interface{}                                     `json:"field_overrides,omitempty"`
	HTML           *string                                                    `json:"html,omitempty"`
	Metadata       map[string]interface{}                                     `json:"metadata,omitempty"`
	Test           *bool                                                      `json:"test,omitempty"`
}

type GeneratePdfSecurity struct {
	APITokenBasic shared.SchemeAPITokenBasic `security:"scheme,type=http,subtype=basic"`
}

type GeneratePdfRequest struct {
	PathParams GeneratePdfPathParams
	Request    GeneratePdfSubmissionData `request:"mediaType=application/json"`
	Security   GeneratePdfSecurity
}

type GeneratePdfCreateSubmissionResponseStatusEnum string

const (
	GeneratePdfCreateSubmissionResponseStatusEnumSuccess GeneratePdfCreateSubmissionResponseStatusEnum = "success"
	GeneratePdfCreateSubmissionResponseStatusEnumError   GeneratePdfCreateSubmissionResponseStatusEnum = "error"
)

type GeneratePdfCreateSubmissionResponse struct {
	Errors     []string                                      `json:"errors,omitempty"`
	Status     GeneratePdfCreateSubmissionResponseStatusEnum `json:"status"`
	Submission shared.Submission                             `json:"submission"`
}

type GeneratePdfResponse struct {
	ContentType              string
	StatusCode               int64
	AuthenticationError      *shared.AuthenticationError
	CreateSubmissionResponse *GeneratePdfCreateSubmissionResponse
	Error                    *shared.Error
	InvalidRequest           *shared.InvalidRequest
}

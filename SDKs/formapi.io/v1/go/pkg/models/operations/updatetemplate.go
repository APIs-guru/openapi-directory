package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateTemplatePathParams struct {
	TemplateID string `pathParam:"style=simple,explode=false,name=template_id"`
}

type UpdateTemplateUpdateTemplateDataTemplateDataExpirationIntervalEnum string

const (
	UpdateTemplateUpdateTemplateDataTemplateDataExpirationIntervalEnumMinutes UpdateTemplateUpdateTemplateDataTemplateDataExpirationIntervalEnum = "minutes"
	UpdateTemplateUpdateTemplateDataTemplateDataExpirationIntervalEnumHours   UpdateTemplateUpdateTemplateDataTemplateDataExpirationIntervalEnum = "hours"
	UpdateTemplateUpdateTemplateDataTemplateDataExpirationIntervalEnumDays    UpdateTemplateUpdateTemplateDataTemplateDataExpirationIntervalEnum = "days"
)

type UpdateTemplateUpdateTemplateDataTemplateData struct {
	AllowAdditionalProperties *bool                                                               `json:"allow_additional_properties,omitempty"`
	Description               *string                                                             `json:"description,omitempty"`
	EditableSubmissions       *bool                                                               `json:"editable_submissions,omitempty"`
	ExpirationInterval        *UpdateTemplateUpdateTemplateDataTemplateDataExpirationIntervalEnum `json:"expiration_interval,omitempty"`
	ExpireAfter               *float64                                                            `json:"expire_after,omitempty"`
	ExpireSubmissions         *bool                                                               `json:"expire_submissions,omitempty"`
	FooterHTML                *string                                                             `json:"footer_html,omitempty"`
	HeaderHTML                *string                                                             `json:"header_html,omitempty"`
	HTML                      *string                                                             `json:"html,omitempty"`
	Name                      *string                                                             `json:"name,omitempty"`
	PublicSubmissions         *bool                                                               `json:"public_submissions,omitempty"`
	PublicWebForm             *bool                                                               `json:"public_web_form,omitempty"`
	RedirectURL               *string                                                             `json:"redirect_url,omitempty"`
	Scss                      *string                                                             `json:"scss,omitempty"`
	SlackWebhookURL           *string                                                             `json:"slack_webhook_url,omitempty"`
	WebhookURL                *string                                                             `json:"webhook_url,omitempty"`
}

type UpdateTemplateUpdateTemplateData struct {
	Template UpdateTemplateUpdateTemplateDataTemplateData `json:"template"`
}

type UpdateTemplateSecurity struct {
	APITokenBasic shared.SchemeAPITokenBasic `security:"scheme,type=http,subtype=basic"`
}

type UpdateTemplateUpdateTemplateResponseStatusEnum string

const (
	UpdateTemplateUpdateTemplateResponseStatusEnumSuccess UpdateTemplateUpdateTemplateResponseStatusEnum = "success"
	UpdateTemplateUpdateTemplateResponseStatusEnumError   UpdateTemplateUpdateTemplateResponseStatusEnum = "error"
)

type UpdateTemplateUpdateTemplateResponse struct {
	Errors []string                                       `json:"errors,omitempty"`
	Status UpdateTemplateUpdateTemplateResponseStatusEnum `json:"status"`
}

type UpdateTemplateRequest struct {
	PathParams UpdateTemplatePathParams
	Request    UpdateTemplateUpdateTemplateData `request:"mediaType=application/json"`
	Security   UpdateTemplateSecurity
}

type UpdateTemplateResponse struct {
	ContentType            string
	StatusCode             int64
	UpdateTemplateResponse *UpdateTemplateUpdateTemplateResponse
}

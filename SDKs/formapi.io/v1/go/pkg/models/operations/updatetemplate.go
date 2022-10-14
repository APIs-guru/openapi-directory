package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateTemplatePathParams struct {
	TemplateID string `pathParam:"style=simple,explode=false,name=template_id"`
}

type UpdateTemplateRequestBodyTemplateExpirationIntervalEnum string

const (
	UpdateTemplateRequestBodyTemplateExpirationIntervalEnumMinutes UpdateTemplateRequestBodyTemplateExpirationIntervalEnum = "minutes"
	UpdateTemplateRequestBodyTemplateExpirationIntervalEnumHours   UpdateTemplateRequestBodyTemplateExpirationIntervalEnum = "hours"
	UpdateTemplateRequestBodyTemplateExpirationIntervalEnumDays    UpdateTemplateRequestBodyTemplateExpirationIntervalEnum = "days"
)

type UpdateTemplateRequestBodyTemplateTemplateData struct {
	AllowAdditionalProperties *bool                                                    `json:"allow_additional_properties,omitempty"`
	Description               *string                                                  `json:"description,omitempty"`
	EditableSubmissions       *bool                                                    `json:"editable_submissions,omitempty"`
	ExpirationInterval        *UpdateTemplateRequestBodyTemplateExpirationIntervalEnum `json:"expiration_interval,omitempty"`
	ExpireAfter               *float64                                                 `json:"expire_after,omitempty"`
	ExpireSubmissions         *bool                                                    `json:"expire_submissions,omitempty"`
	FooterHTML                *string                                                  `json:"footer_html,omitempty"`
	HeaderHTML                *string                                                  `json:"header_html,omitempty"`
	HTML                      *string                                                  `json:"html,omitempty"`
	Name                      *string                                                  `json:"name,omitempty"`
	PublicSubmissions         *bool                                                    `json:"public_submissions,omitempty"`
	PublicWebForm             *bool                                                    `json:"public_web_form,omitempty"`
	RedirectURL               *string                                                  `json:"redirect_url,omitempty"`
	Scss                      *string                                                  `json:"scss,omitempty"`
	SlackWebhookURL           *string                                                  `json:"slack_webhook_url,omitempty"`
	WebhookURL                *string                                                  `json:"webhook_url,omitempty"`
}

type UpdateTemplateRequestBodyUpdateTemplateData struct {
	Template UpdateTemplateRequestBodyTemplateTemplateData `json:"template"`
}

type UpdateTemplateSecurity struct {
	APITokenBasic shared.SchemeAPITokenBasic `security:"scheme,type=http,subtype=basic"`
}

type UpdateTemplateRequest struct {
	PathParams UpdateTemplatePathParams
	Request    UpdateTemplateRequestBodyUpdateTemplateData `request:"mediaType=application/json"`
	Security   UpdateTemplateSecurity
}

type UpdateTemplate200ApplicationJSONStatusEnum string

const (
	UpdateTemplate200ApplicationJSONStatusEnumSuccess UpdateTemplate200ApplicationJSONStatusEnum = "success"
	UpdateTemplate200ApplicationJSONStatusEnumError   UpdateTemplate200ApplicationJSONStatusEnum = "error"
)

type UpdateTemplate200ApplicationJSONUpdateTemplateResponse struct {
	Errors []string                                   `json:"errors,omitempty"`
	Status UpdateTemplate200ApplicationJSONStatusEnum `json:"status"`
}

type UpdateTemplateResponse struct {
	ContentType            string
	StatusCode             int64
	UpdateTemplateResponse *UpdateTemplate200ApplicationJSONUpdateTemplateResponse
}

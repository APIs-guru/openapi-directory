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
	AllowAdditionalProperties *bool                                                    `json:"allow_additional_properties"`
	Description               *string                                                  `json:"description"`
	EditableSubmissions       *bool                                                    `json:"editable_submissions"`
	ExpirationInterval        *UpdateTemplateRequestBodyTemplateExpirationIntervalEnum `json:"expiration_interval"`
	ExpireAfter               *float64                                                 `json:"expire_after"`
	ExpireSubmissions         *bool                                                    `json:"expire_submissions"`
	FooterHTML                *string                                                  `json:"footer_html"`
	HeaderHTML                *string                                                  `json:"header_html"`
	HTML                      *string                                                  `json:"html"`
	Name                      *string                                                  `json:"name"`
	PublicSubmissions         *bool                                                    `json:"public_submissions"`
	PublicWebForm             *bool                                                    `json:"public_web_form"`
	RedirectURL               *string                                                  `json:"redirect_url"`
	Scss                      *string                                                  `json:"scss"`
	SlackWebhookURL           *string                                                  `json:"slack_webhook_url"`
	WebhookURL                *string                                                  `json:"webhook_url"`
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
	Errors []string                                   `json:"errors"`
	Status UpdateTemplate200ApplicationJSONStatusEnum `json:"status"`
}

type UpdateTemplateResponse struct {
	ContentType            string
	StatusCode             int64
	UpdateTemplateResponse *UpdateTemplate200ApplicationJSONUpdateTemplateResponse
}

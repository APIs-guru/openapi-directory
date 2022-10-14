package operations

import (
	"openapi/pkg/models/shared"
)

type CreateHTMLTemplateRequestBodyTemplateExpirationIntervalEnum string

const (
	CreateHTMLTemplateRequestBodyTemplateExpirationIntervalEnumMinutes CreateHTMLTemplateRequestBodyTemplateExpirationIntervalEnum = "minutes"
	CreateHTMLTemplateRequestBodyTemplateExpirationIntervalEnumHours   CreateHTMLTemplateRequestBodyTemplateExpirationIntervalEnum = "hours"
	CreateHTMLTemplateRequestBodyTemplateExpirationIntervalEnumDays    CreateHTMLTemplateRequestBodyTemplateExpirationIntervalEnum = "days"
)

type CreateHTMLTemplateRequestBodyTemplateTemplateTypeEnum string

const (
	CreateHTMLTemplateRequestBodyTemplateTemplateTypeEnumPdf  CreateHTMLTemplateRequestBodyTemplateTemplateTypeEnum = "pdf"
	CreateHTMLTemplateRequestBodyTemplateTemplateTypeEnumHTML CreateHTMLTemplateRequestBodyTemplateTemplateTypeEnum = "html"
)

type CreateHTMLTemplateRequestBodyTemplateHTMLTemplateData struct {
	AllowAdditionalProperties *bool                                                        `json:"allow_additional_properties,omitempty"`
	Description               *string                                                      `json:"description,omitempty"`
	EditableSubmissions       *bool                                                        `json:"editable_submissions,omitempty"`
	ExpirationInterval        *CreateHTMLTemplateRequestBodyTemplateExpirationIntervalEnum `json:"expiration_interval,omitempty"`
	ExpireAfter               *float64                                                     `json:"expire_after,omitempty"`
	ExpireSubmissions         *bool                                                        `json:"expire_submissions,omitempty"`
	FooterHTML                *string                                                      `json:"footer_html,omitempty"`
	HeaderHTML                *string                                                      `json:"header_html,omitempty"`
	HTML                      *string                                                      `json:"html,omitempty"`
	Name                      string                                                       `json:"name"`
	PublicSubmissions         *bool                                                        `json:"public_submissions,omitempty"`
	PublicWebForm             *bool                                                        `json:"public_web_form,omitempty"`
	RedirectURL               *string                                                      `json:"redirect_url,omitempty"`
	Scss                      *string                                                      `json:"scss,omitempty"`
	SlackWebhookURL           *string                                                      `json:"slack_webhook_url,omitempty"`
	TemplateType              *CreateHTMLTemplateRequestBodyTemplateTemplateTypeEnum       `json:"template_type,omitempty"`
	WebhookURL                *string                                                      `json:"webhook_url,omitempty"`
}

type CreateHTMLTemplateRequestBodyCreateHTMLTemplateData struct {
	Template CreateHTMLTemplateRequestBodyTemplateHTMLTemplateData `json:"template"`
}

type CreateHTMLTemplateSecurity struct {
	APITokenBasic shared.SchemeAPITokenBasic `security:"scheme,type=http,subtype=basic"`
}

type CreateHTMLTemplateRequest struct {
	Request  CreateHTMLTemplateRequestBodyCreateHTMLTemplateData `request:"mediaType=application/json"`
	Security CreateHTMLTemplateSecurity
}

type CreateHTMLTemplate201ApplicationJSONExpirationIntervalEnum string

const (
	CreateHTMLTemplate201ApplicationJSONExpirationIntervalEnumMinutes CreateHTMLTemplate201ApplicationJSONExpirationIntervalEnum = "minutes"
	CreateHTMLTemplate201ApplicationJSONExpirationIntervalEnumHours   CreateHTMLTemplate201ApplicationJSONExpirationIntervalEnum = "hours"
	CreateHTMLTemplate201ApplicationJSONExpirationIntervalEnumDays    CreateHTMLTemplate201ApplicationJSONExpirationIntervalEnum = "days"
)

type CreateHTMLTemplate201ApplicationJSONPendingTemplate struct {
	AllowAdditionalProperties bool                                                        `json:"allow_additional_properties"`
	Description               string                                                      `json:"description"`
	EditableSubmissions       bool                                                        `json:"editable_submissions"`
	ExpirationInterval        *CreateHTMLTemplate201ApplicationJSONExpirationIntervalEnum `json:"expiration_interval,omitempty"`
	ExpireAfter               *float64                                                    `json:"expire_after,omitempty"`
	ExpireSubmissions         bool                                                        `json:"expire_submissions"`
	ID                        string                                                      `json:"id"`
	Locked                    bool                                                        `json:"locked"`
	Name                      string                                                      `json:"name"`
	ParentFolderID            *string                                                     `json:"parent_folder_id,omitempty"`
	Path                      *string                                                     `json:"path,omitempty"`
	PublicSubmissions         bool                                                        `json:"public_submissions"`
	PublicWebForm             bool                                                        `json:"public_web_form"`
	RedirectURL               string                                                      `json:"redirect_url"`
	SlackWebhookURL           string                                                      `json:"slack_webhook_url"`
	TemplateType              string                                                      `json:"template_type"`
	WebhookURL                string                                                      `json:"webhook_url"`
}

type CreateHTMLTemplateResponse struct {
	ContentType         string
	StatusCode          int64
	AuthenticationError *shared.AuthenticationError
	PendingTemplate     *CreateHTMLTemplate201ApplicationJSONPendingTemplate
}

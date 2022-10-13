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
	AllowAdditionalProperties *bool                                                        `json:"allow_additional_properties"`
	Description               *string                                                      `json:"description"`
	EditableSubmissions       *bool                                                        `json:"editable_submissions"`
	ExpirationInterval        *CreateHTMLTemplateRequestBodyTemplateExpirationIntervalEnum `json:"expiration_interval"`
	ExpireAfter               *float64                                                     `json:"expire_after"`
	ExpireSubmissions         *bool                                                        `json:"expire_submissions"`
	FooterHTML                *string                                                      `json:"footer_html"`
	HeaderHTML                *string                                                      `json:"header_html"`
	HTML                      *string                                                      `json:"html"`
	Name                      string                                                       `json:"name"`
	PublicSubmissions         *bool                                                        `json:"public_submissions"`
	PublicWebForm             *bool                                                        `json:"public_web_form"`
	RedirectURL               *string                                                      `json:"redirect_url"`
	Scss                      *string                                                      `json:"scss"`
	SlackWebhookURL           *string                                                      `json:"slack_webhook_url"`
	TemplateType              *CreateHTMLTemplateRequestBodyTemplateTemplateTypeEnum       `json:"template_type"`
	WebhookURL                *string                                                      `json:"webhook_url"`
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
	ExpirationInterval        *CreateHTMLTemplate201ApplicationJSONExpirationIntervalEnum `json:"expiration_interval"`
	ExpireAfter               *float64                                                    `json:"expire_after"`
	ExpireSubmissions         bool                                                        `json:"expire_submissions"`
	ID                        string                                                      `json:"id"`
	Locked                    bool                                                        `json:"locked"`
	Name                      string                                                      `json:"name"`
	ParentFolderID            *string                                                     `json:"parent_folder_id"`
	Path                      *string                                                     `json:"path"`
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

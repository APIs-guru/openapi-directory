package operations

import (
	"openapi/pkg/models/shared"
)

type CreateHTMLTemplateCreateHTMLTemplateDataHTMLTemplateDataExpirationIntervalEnum string

const (
	CreateHTMLTemplateCreateHTMLTemplateDataHTMLTemplateDataExpirationIntervalEnumMinutes CreateHTMLTemplateCreateHTMLTemplateDataHTMLTemplateDataExpirationIntervalEnum = "minutes"
	CreateHTMLTemplateCreateHTMLTemplateDataHTMLTemplateDataExpirationIntervalEnumHours   CreateHTMLTemplateCreateHTMLTemplateDataHTMLTemplateDataExpirationIntervalEnum = "hours"
	CreateHTMLTemplateCreateHTMLTemplateDataHTMLTemplateDataExpirationIntervalEnumDays    CreateHTMLTemplateCreateHTMLTemplateDataHTMLTemplateDataExpirationIntervalEnum = "days"
)

type CreateHTMLTemplateCreateHTMLTemplateDataHTMLTemplateDataTemplateTypeEnum string

const (
	CreateHTMLTemplateCreateHTMLTemplateDataHTMLTemplateDataTemplateTypeEnumPdf  CreateHTMLTemplateCreateHTMLTemplateDataHTMLTemplateDataTemplateTypeEnum = "pdf"
	CreateHTMLTemplateCreateHTMLTemplateDataHTMLTemplateDataTemplateTypeEnumHTML CreateHTMLTemplateCreateHTMLTemplateDataHTMLTemplateDataTemplateTypeEnum = "html"
)

type CreateHTMLTemplateCreateHTMLTemplateDataHTMLTemplateData struct {
	AllowAdditionalProperties *bool                                                                           `json:"allow_additional_properties,omitempty"`
	Description               *string                                                                         `json:"description,omitempty"`
	EditableSubmissions       *bool                                                                           `json:"editable_submissions,omitempty"`
	ExpirationInterval        *CreateHTMLTemplateCreateHTMLTemplateDataHTMLTemplateDataExpirationIntervalEnum `json:"expiration_interval,omitempty"`
	ExpireAfter               *float64                                                                        `json:"expire_after,omitempty"`
	ExpireSubmissions         *bool                                                                           `json:"expire_submissions,omitempty"`
	FooterHTML                *string                                                                         `json:"footer_html,omitempty"`
	HeaderHTML                *string                                                                         `json:"header_html,omitempty"`
	HTML                      *string                                                                         `json:"html,omitempty"`
	Name                      string                                                                          `json:"name"`
	PublicSubmissions         *bool                                                                           `json:"public_submissions,omitempty"`
	PublicWebForm             *bool                                                                           `json:"public_web_form,omitempty"`
	RedirectURL               *string                                                                         `json:"redirect_url,omitempty"`
	Scss                      *string                                                                         `json:"scss,omitempty"`
	SlackWebhookURL           *string                                                                         `json:"slack_webhook_url,omitempty"`
	TemplateType              *CreateHTMLTemplateCreateHTMLTemplateDataHTMLTemplateDataTemplateTypeEnum       `json:"template_type,omitempty"`
	WebhookURL                *string                                                                         `json:"webhook_url,omitempty"`
}

type CreateHTMLTemplateCreateHTMLTemplateData struct {
	Template CreateHTMLTemplateCreateHTMLTemplateDataHTMLTemplateData `json:"template"`
}

type CreateHTMLTemplateSecurity struct {
	APITokenBasic shared.SchemeAPITokenBasic `security:"scheme,type=http,subtype=basic"`
}

type CreateHTMLTemplatePendingTemplateExpirationIntervalEnum string

const (
	CreateHTMLTemplatePendingTemplateExpirationIntervalEnumMinutes CreateHTMLTemplatePendingTemplateExpirationIntervalEnum = "minutes"
	CreateHTMLTemplatePendingTemplateExpirationIntervalEnumHours   CreateHTMLTemplatePendingTemplateExpirationIntervalEnum = "hours"
	CreateHTMLTemplatePendingTemplateExpirationIntervalEnumDays    CreateHTMLTemplatePendingTemplateExpirationIntervalEnum = "days"
)

type CreateHTMLTemplatePendingTemplate struct {
	AllowAdditionalProperties bool                                                     `json:"allow_additional_properties"`
	Description               string                                                   `json:"description"`
	EditableSubmissions       bool                                                     `json:"editable_submissions"`
	ExpirationInterval        *CreateHTMLTemplatePendingTemplateExpirationIntervalEnum `json:"expiration_interval,omitempty"`
	ExpireAfter               *float64                                                 `json:"expire_after,omitempty"`
	ExpireSubmissions         bool                                                     `json:"expire_submissions"`
	ID                        string                                                   `json:"id"`
	Locked                    bool                                                     `json:"locked"`
	Name                      string                                                   `json:"name"`
	ParentFolderID            *string                                                  `json:"parent_folder_id,omitempty"`
	Path                      *string                                                  `json:"path,omitempty"`
	PublicSubmissions         bool                                                     `json:"public_submissions"`
	PublicWebForm             bool                                                     `json:"public_web_form"`
	RedirectURL               string                                                   `json:"redirect_url"`
	SlackWebhookURL           string                                                   `json:"slack_webhook_url"`
	TemplateType              string                                                   `json:"template_type"`
	WebhookURL                string                                                   `json:"webhook_url"`
}

type CreateHTMLTemplateRequest struct {
	Request  CreateHTMLTemplateCreateHTMLTemplateData `request:"mediaType=application/json"`
	Security CreateHTMLTemplateSecurity
}

type CreateHTMLTemplateResponse struct {
	ContentType         string
	StatusCode          int64
	AuthenticationError *shared.AuthenticationError
	PendingTemplate     *CreateHTMLTemplatePendingTemplate
}

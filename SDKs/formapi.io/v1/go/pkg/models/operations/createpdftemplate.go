package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePdfTemplateRequestBodyTemplateDocument struct {
	Content          []byte `multipartForm:"content"`
	TemplateDocument string `multipartForm:"name=template[document]"`
}

type CreatePdfTemplateRequestBody struct {
	TemplateDocument       CreatePdfTemplateRequestBodyTemplateDocument `multipartForm:"file"`
	TemplateName           string                                       `multipartForm:"name=template[name]"`
	TemplateParentFolderID *string                                      `multipartForm:"name=template[parent_folder_id]"`
}

type CreatePdfTemplateSecurity struct {
	APITokenBasic shared.SchemeAPITokenBasic `security:"scheme,type=http,subtype=basic"`
}

type CreatePdfTemplateRequest struct {
	Request  CreatePdfTemplateRequestBody `request:"mediaType=multipart/form-data"`
	Security CreatePdfTemplateSecurity
}

type CreatePdfTemplate201ApplicationJSONExpirationIntervalEnum string

const (
	CreatePdfTemplate201ApplicationJSONExpirationIntervalEnumMinutes CreatePdfTemplate201ApplicationJSONExpirationIntervalEnum = "minutes"
	CreatePdfTemplate201ApplicationJSONExpirationIntervalEnumHours   CreatePdfTemplate201ApplicationJSONExpirationIntervalEnum = "hours"
	CreatePdfTemplate201ApplicationJSONExpirationIntervalEnumDays    CreatePdfTemplate201ApplicationJSONExpirationIntervalEnum = "days"
)

type CreatePdfTemplate201ApplicationJSONPendingTemplate struct {
	AllowAdditionalProperties bool                                                       `json:"allow_additional_properties"`
	Description               string                                                     `json:"description"`
	EditableSubmissions       bool                                                       `json:"editable_submissions"`
	ExpirationInterval        *CreatePdfTemplate201ApplicationJSONExpirationIntervalEnum `json:"expiration_interval"`
	ExpireAfter               *float64                                                   `json:"expire_after"`
	ExpireSubmissions         bool                                                       `json:"expire_submissions"`
	ID                        string                                                     `json:"id"`
	Locked                    bool                                                       `json:"locked"`
	Name                      string                                                     `json:"name"`
	ParentFolderID            *string                                                    `json:"parent_folder_id"`
	Path                      *string                                                    `json:"path"`
	PublicSubmissions         bool                                                       `json:"public_submissions"`
	PublicWebForm             bool                                                       `json:"public_web_form"`
	RedirectURL               string                                                     `json:"redirect_url"`
	SlackWebhookURL           string                                                     `json:"slack_webhook_url"`
	TemplateType              string                                                     `json:"template_type"`
	WebhookURL                string                                                     `json:"webhook_url"`
}

type CreatePdfTemplateResponse struct {
	ContentType         string
	StatusCode          int64
	AuthenticationError *shared.AuthenticationError
	PendingTemplate     *CreatePdfTemplate201ApplicationJSONPendingTemplate
}

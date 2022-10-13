package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePdfTemplateFromUploadRequestBodyTemplateDocumentMetadataMimeTypeEnum string

const (
	CreatePdfTemplateFromUploadRequestBodyTemplateDocumentMetadataMimeTypeEnumApplicationPdf CreatePdfTemplateFromUploadRequestBodyTemplateDocumentMetadataMimeTypeEnum = "application/pdf"
)

type CreatePdfTemplateFromUploadRequestBodyTemplateDocumentMetadata struct {
	Filename string                                                                     `json:"filename"`
	MimeType CreatePdfTemplateFromUploadRequestBodyTemplateDocumentMetadataMimeTypeEnum `json:"mime_type"`
	Size     int64                                                                      `json:"size"`
}

type CreatePdfTemplateFromUploadRequestBodyTemplateDocumentStorageEnum string

const (
	CreatePdfTemplateFromUploadRequestBodyTemplateDocumentStorageEnumCache CreatePdfTemplateFromUploadRequestBodyTemplateDocumentStorageEnum = "cache"
)

type CreatePdfTemplateFromUploadRequestBodyTemplateDocument struct {
	ID       string                                                            `json:"id"`
	Metadata CreatePdfTemplateFromUploadRequestBodyTemplateDocumentMetadata    `json:"metadata"`
	Storage  CreatePdfTemplateFromUploadRequestBodyTemplateDocumentStorageEnum `json:"storage"`
}

type CreatePdfTemplateFromUploadRequestBodyTemplateExpirationIntervalEnum string

const (
	CreatePdfTemplateFromUploadRequestBodyTemplateExpirationIntervalEnumMinutes CreatePdfTemplateFromUploadRequestBodyTemplateExpirationIntervalEnum = "minutes"
	CreatePdfTemplateFromUploadRequestBodyTemplateExpirationIntervalEnumHours   CreatePdfTemplateFromUploadRequestBodyTemplateExpirationIntervalEnum = "hours"
	CreatePdfTemplateFromUploadRequestBodyTemplateExpirationIntervalEnumDays    CreatePdfTemplateFromUploadRequestBodyTemplateExpirationIntervalEnum = "days"
)

type CreatePdfTemplateFromUploadRequestBodyTemplateTemplateTypeEnum string

const (
	CreatePdfTemplateFromUploadRequestBodyTemplateTemplateTypeEnumPdf  CreatePdfTemplateFromUploadRequestBodyTemplateTemplateTypeEnum = "pdf"
	CreatePdfTemplateFromUploadRequestBodyTemplateTemplateTypeEnumHTML CreatePdfTemplateFromUploadRequestBodyTemplateTemplateTypeEnum = "html"
)

type CreatePdfTemplateFromUploadRequestBodyTemplateUploadTemplateData struct {
	AllowAdditionalProperties *bool                                                                 `json:"allow_additional_properties"`
	Description               *string                                                               `json:"description"`
	Document                  *CreatePdfTemplateFromUploadRequestBodyTemplateDocument               `json:"document"`
	EditableSubmissions       *bool                                                                 `json:"editable_submissions"`
	ExpirationInterval        *CreatePdfTemplateFromUploadRequestBodyTemplateExpirationIntervalEnum `json:"expiration_interval"`
	ExpireAfter               *float64                                                              `json:"expire_after"`
	ExpireSubmissions         *bool                                                                 `json:"expire_submissions"`
	FooterHTML                *string                                                               `json:"footer_html"`
	HeaderHTML                *string                                                               `json:"header_html"`
	HTML                      *string                                                               `json:"html"`
	Name                      string                                                                `json:"name"`
	PublicSubmissions         *bool                                                                 `json:"public_submissions"`
	PublicWebForm             *bool                                                                 `json:"public_web_form"`
	RedirectURL               *string                                                               `json:"redirect_url"`
	Scss                      *string                                                               `json:"scss"`
	SlackWebhookURL           *string                                                               `json:"slack_webhook_url"`
	TemplateType              *CreatePdfTemplateFromUploadRequestBodyTemplateTemplateTypeEnum       `json:"template_type"`
	WebhookURL                *string                                                               `json:"webhook_url"`
}

type CreatePdfTemplateFromUploadRequestBodyCreateTemplateFromUploadData struct {
	Template CreatePdfTemplateFromUploadRequestBodyTemplateUploadTemplateData `json:"template"`
}

type CreatePdfTemplateFromUploadSecurity struct {
	APITokenBasic shared.SchemeAPITokenBasic `security:"scheme,type=http,subtype=basic"`
}

type CreatePdfTemplateFromUploadRequest struct {
	Request  CreatePdfTemplateFromUploadRequestBodyCreateTemplateFromUploadData `request:"mediaType=application/json"`
	Security CreatePdfTemplateFromUploadSecurity
}

type CreatePdfTemplateFromUpload201ApplicationJSONExpirationIntervalEnum string

const (
	CreatePdfTemplateFromUpload201ApplicationJSONExpirationIntervalEnumMinutes CreatePdfTemplateFromUpload201ApplicationJSONExpirationIntervalEnum = "minutes"
	CreatePdfTemplateFromUpload201ApplicationJSONExpirationIntervalEnumHours   CreatePdfTemplateFromUpload201ApplicationJSONExpirationIntervalEnum = "hours"
	CreatePdfTemplateFromUpload201ApplicationJSONExpirationIntervalEnumDays    CreatePdfTemplateFromUpload201ApplicationJSONExpirationIntervalEnum = "days"
)

type CreatePdfTemplateFromUpload201ApplicationJSONPendingTemplate struct {
	AllowAdditionalProperties bool                                                                 `json:"allow_additional_properties"`
	Description               string                                                               `json:"description"`
	EditableSubmissions       bool                                                                 `json:"editable_submissions"`
	ExpirationInterval        *CreatePdfTemplateFromUpload201ApplicationJSONExpirationIntervalEnum `json:"expiration_interval"`
	ExpireAfter               *float64                                                             `json:"expire_after"`
	ExpireSubmissions         bool                                                                 `json:"expire_submissions"`
	ID                        string                                                               `json:"id"`
	Locked                    bool                                                                 `json:"locked"`
	Name                      string                                                               `json:"name"`
	ParentFolderID            *string                                                              `json:"parent_folder_id"`
	Path                      *string                                                              `json:"path"`
	PublicSubmissions         bool                                                                 `json:"public_submissions"`
	PublicWebForm             bool                                                                 `json:"public_web_form"`
	RedirectURL               string                                                               `json:"redirect_url"`
	SlackWebhookURL           string                                                               `json:"slack_webhook_url"`
	TemplateType              string                                                               `json:"template_type"`
	WebhookURL                string                                                               `json:"webhook_url"`
}

type CreatePdfTemplateFromUploadResponse struct {
	ContentType         string
	StatusCode          int64
	AuthenticationError *shared.AuthenticationError
	PendingTemplate     *CreatePdfTemplateFromUpload201ApplicationJSONPendingTemplate
}

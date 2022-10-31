package operations

import (
"openapi/pkg/models/shared")


type CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocumentMetadataMimeTypeEnum string

const (
    CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocumentMetadataMimeTypeEnumApplicationPdf CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocumentMetadataMimeTypeEnum = "application/pdf"
)


type CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocumentMetadata struct {
    Filename string `json:"filename"`
    MimeType CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocumentMetadataMimeTypeEnum `json:"mime_type"`
    Size int64 `json:"size"`
    
}


type CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocumentStorageEnum string

const (
    CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocumentStorageEnumCache CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocumentStorageEnum = "cache"
)


type CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocument struct {
    ID string `json:"id"`
    Metadata CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocumentMetadata `json:"metadata"`
    Storage CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocumentStorageEnum `json:"storage"`
    
}


type CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataExpirationIntervalEnum string

const (
    CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataExpirationIntervalEnumMinutes CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataExpirationIntervalEnum = "minutes"
CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataExpirationIntervalEnumHours CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataExpirationIntervalEnum = "hours"
CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataExpirationIntervalEnumDays CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataExpirationIntervalEnum = "days"
)



type CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataTemplateTypeEnum string

const (
    CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataTemplateTypeEnumPdf CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataTemplateTypeEnum = "pdf"
CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataTemplateTypeEnumHTML CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataTemplateTypeEnum = "html"
)


type CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateData struct {
    AllowAdditionalProperties *bool `json:"allow_additional_properties,omitempty"`
    Description *string `json:"description,omitempty"`
    Document *CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocument `json:"document,omitempty"`
    EditableSubmissions *bool `json:"editable_submissions,omitempty"`
    ExpirationInterval *CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataExpirationIntervalEnum `json:"expiration_interval,omitempty"`
    ExpireAfter *float64 `json:"expire_after,omitempty"`
    ExpireSubmissions *bool `json:"expire_submissions,omitempty"`
    FooterHTML *string `json:"footer_html,omitempty"`
    HeaderHTML *string `json:"header_html,omitempty"`
    HTML *string `json:"html,omitempty"`
    Name string `json:"name"`
    PublicSubmissions *bool `json:"public_submissions,omitempty"`
    PublicWebForm *bool `json:"public_web_form,omitempty"`
    RedirectURL *string `json:"redirect_url,omitempty"`
    Scss *string `json:"scss,omitempty"`
    SlackWebhookURL *string `json:"slack_webhook_url,omitempty"`
    TemplateType *CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataTemplateTypeEnum `json:"template_type,omitempty"`
    WebhookURL *string `json:"webhook_url,omitempty"`
    
}

type CreatePdfTemplateFromUploadCreateTemplateFromUploadData struct {
    Template CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateData `json:"template"`
    
}

type CreatePdfTemplateFromUploadSecurity struct {
    APITokenBasic shared.SchemeAPITokenBasic `security:"scheme,type=http,subtype=basic"`
    
}

type CreatePdfTemplateFromUploadRequest struct {
    Request CreatePdfTemplateFromUploadCreateTemplateFromUploadData `request:"mediaType=application/json"`
    Security CreatePdfTemplateFromUploadSecurity 
    
}


type CreatePdfTemplateFromUploadPendingTemplateExpirationIntervalEnum string

const (
    CreatePdfTemplateFromUploadPendingTemplateExpirationIntervalEnumMinutes CreatePdfTemplateFromUploadPendingTemplateExpirationIntervalEnum = "minutes"
CreatePdfTemplateFromUploadPendingTemplateExpirationIntervalEnumHours CreatePdfTemplateFromUploadPendingTemplateExpirationIntervalEnum = "hours"
CreatePdfTemplateFromUploadPendingTemplateExpirationIntervalEnumDays CreatePdfTemplateFromUploadPendingTemplateExpirationIntervalEnum = "days"
)


type CreatePdfTemplateFromUploadPendingTemplate struct {
    AllowAdditionalProperties bool `json:"allow_additional_properties"`
    Description string `json:"description"`
    EditableSubmissions bool `json:"editable_submissions"`
    ExpirationInterval *CreatePdfTemplateFromUploadPendingTemplateExpirationIntervalEnum `json:"expiration_interval,omitempty"`
    ExpireAfter *float64 `json:"expire_after,omitempty"`
    ExpireSubmissions bool `json:"expire_submissions"`
    ID string `json:"id"`
    Locked bool `json:"locked"`
    Name string `json:"name"`
    ParentFolderID *string `json:"parent_folder_id,omitempty"`
    Path *string `json:"path,omitempty"`
    PublicSubmissions bool `json:"public_submissions"`
    PublicWebForm bool `json:"public_web_form"`
    RedirectURL string `json:"redirect_url"`
    SlackWebhookURL string `json:"slack_webhook_url"`
    TemplateType string `json:"template_type"`
    WebhookURL string `json:"webhook_url"`
    
}

type CreatePdfTemplateFromUploadResponse struct {
    ContentType string 
    StatusCode int64 
    AuthenticationError *shared.AuthenticationError 
    PendingTemplate *CreatePdfTemplateFromUploadPendingTemplate 
    
}


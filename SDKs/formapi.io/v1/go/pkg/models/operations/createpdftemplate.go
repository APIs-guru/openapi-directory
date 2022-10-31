package operations

import (
"openapi/pkg/models/shared")

type CreatePdfTemplateRequestBodyTemplateDocument struct {
    Content []byte `multipartForm:"content"`
    TemplateDocument string `multipartForm:"name=template[document]"`
    
}

type CreatePdfTemplateRequestBody struct {
    TemplateDocument CreatePdfTemplateRequestBodyTemplateDocument `multipartForm:"file"`
    TemplateName string `multipartForm:"name=template[name]"`
    TemplateParentFolderID *string `multipartForm:"name=template[parent_folder_id]"`
    
}

type CreatePdfTemplateSecurity struct {
    APITokenBasic shared.SchemeAPITokenBasic `security:"scheme,type=http,subtype=basic"`
    
}

type CreatePdfTemplateRequest struct {
    Request CreatePdfTemplateRequestBody `request:"mediaType=multipart/form-data"`
    Security CreatePdfTemplateSecurity 
    
}


type CreatePdfTemplatePendingTemplateExpirationIntervalEnum string

const (
    CreatePdfTemplatePendingTemplateExpirationIntervalEnumMinutes CreatePdfTemplatePendingTemplateExpirationIntervalEnum = "minutes"
CreatePdfTemplatePendingTemplateExpirationIntervalEnumHours CreatePdfTemplatePendingTemplateExpirationIntervalEnum = "hours"
CreatePdfTemplatePendingTemplateExpirationIntervalEnumDays CreatePdfTemplatePendingTemplateExpirationIntervalEnum = "days"
)


type CreatePdfTemplatePendingTemplate struct {
    AllowAdditionalProperties bool `json:"allow_additional_properties"`
    Description string `json:"description"`
    EditableSubmissions bool `json:"editable_submissions"`
    ExpirationInterval *CreatePdfTemplatePendingTemplateExpirationIntervalEnum `json:"expiration_interval,omitempty"`
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

type CreatePdfTemplateResponse struct {
    ContentType string 
    StatusCode int64 
    AuthenticationError *shared.AuthenticationError 
    PendingTemplate *CreatePdfTemplatePendingTemplate 
    
}


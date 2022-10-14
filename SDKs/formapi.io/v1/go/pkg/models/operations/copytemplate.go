package operations

import (
	"openapi/pkg/models/shared"
)

type CopyTemplatePathParams struct {
	TemplateID string `pathParam:"style=simple,explode=false,name=template_id"`
}

type CopyTemplateRequestBodyCopyTemplateData struct {
	Name           *string `json:"name,omitempty"`
	ParentFolderID string  `json:"parent_folder_id"`
}

type CopyTemplateSecurity struct {
	APITokenBasic shared.SchemeAPITokenBasic `security:"scheme,type=http,subtype=basic"`
}

type CopyTemplateRequest struct {
	PathParams CopyTemplatePathParams
	Request    *CopyTemplateRequestBodyCopyTemplateData `request:"mediaType=application/json"`
	Security   CopyTemplateSecurity
}

type CopyTemplate200ApplicationJSONExpirationIntervalEnum string

const (
	CopyTemplate200ApplicationJSONExpirationIntervalEnumMinutes CopyTemplate200ApplicationJSONExpirationIntervalEnum = "minutes"
	CopyTemplate200ApplicationJSONExpirationIntervalEnumHours   CopyTemplate200ApplicationJSONExpirationIntervalEnum = "hours"
	CopyTemplate200ApplicationJSONExpirationIntervalEnumDays    CopyTemplate200ApplicationJSONExpirationIntervalEnum = "days"
)

type CopyTemplate200ApplicationJSONTemplate struct {
	AllowAdditionalProperties bool                                                  `json:"allow_additional_properties"`
	Description               string                                                `json:"description"`
	DocumentURL               *string                                               `json:"document_url,omitempty"`
	EditableSubmissions       bool                                                  `json:"editable_submissions"`
	ExpirationInterval        *CopyTemplate200ApplicationJSONExpirationIntervalEnum `json:"expiration_interval,omitempty"`
	ExpireAfter               *float64                                              `json:"expire_after,omitempty"`
	ExpireSubmissions         bool                                                  `json:"expire_submissions"`
	ID                        string                                                `json:"id"`
	Locked                    bool                                                  `json:"locked"`
	Name                      string                                                `json:"name"`
	PageDimensions            [][]float64                                           `json:"page_dimensions,omitempty"`
	ParentFolderID            *string                                               `json:"parent_folder_id,omitempty"`
	Path                      *string                                               `json:"path,omitempty"`
	PermanentDocumentURL      *string                                               `json:"permanent_document_url,omitempty"`
	PublicSubmissions         bool                                                  `json:"public_submissions"`
	PublicWebForm             bool                                                  `json:"public_web_form"`
	RedirectURL               string                                                `json:"redirect_url"`
	SlackWebhookURL           string                                                `json:"slack_webhook_url"`
	TemplateType              string                                                `json:"template_type"`
	WebhookURL                string                                                `json:"webhook_url"`
}

type CopyTemplateResponse struct {
	ContentType string
	StatusCode  int64
	Error       *shared.Error
	Template    *CopyTemplate200ApplicationJSONTemplate
}

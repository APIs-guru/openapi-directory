package operations

import (
	"openapi/pkg/models/shared"
)

type GetTemplatePathParams struct {
	TemplateID string `pathParam:"style=simple,explode=false,name=template_id"`
}

type GetTemplateSecurity struct {
	APITokenBasic shared.SchemeAPITokenBasic `security:"scheme,type=http,subtype=basic"`
}

type GetTemplateRequest struct {
	PathParams GetTemplatePathParams
	Security   GetTemplateSecurity
}

type GetTemplate200ApplicationJSONExpirationIntervalEnum string

const (
	GetTemplate200ApplicationJSONExpirationIntervalEnumMinutes GetTemplate200ApplicationJSONExpirationIntervalEnum = "minutes"
	GetTemplate200ApplicationJSONExpirationIntervalEnumHours   GetTemplate200ApplicationJSONExpirationIntervalEnum = "hours"
	GetTemplate200ApplicationJSONExpirationIntervalEnumDays    GetTemplate200ApplicationJSONExpirationIntervalEnum = "days"
)

type GetTemplate200ApplicationJSONTemplate struct {
	AllowAdditionalProperties bool                                                 `json:"allow_additional_properties"`
	Description               string                                               `json:"description"`
	DocumentURL               *string                                              `json:"document_url"`
	EditableSubmissions       bool                                                 `json:"editable_submissions"`
	ExpirationInterval        *GetTemplate200ApplicationJSONExpirationIntervalEnum `json:"expiration_interval"`
	ExpireAfter               *float64                                             `json:"expire_after"`
	ExpireSubmissions         bool                                                 `json:"expire_submissions"`
	ID                        string                                               `json:"id"`
	Locked                    bool                                                 `json:"locked"`
	Name                      string                                               `json:"name"`
	PageDimensions            [][]float64                                          `json:"page_dimensions"`
	ParentFolderID            *string                                              `json:"parent_folder_id"`
	Path                      *string                                              `json:"path"`
	PermanentDocumentURL      *string                                              `json:"permanent_document_url"`
	PublicSubmissions         bool                                                 `json:"public_submissions"`
	PublicWebForm             bool                                                 `json:"public_web_form"`
	RedirectURL               string                                               `json:"redirect_url"`
	SlackWebhookURL           string                                               `json:"slack_webhook_url"`
	TemplateType              string                                               `json:"template_type"`
	WebhookURL                string                                               `json:"webhook_url"`
}

type GetTemplateResponse struct {
	ContentType         string
	StatusCode          int64
	AuthenticationError *shared.AuthenticationError
	Error               *shared.Error
	Template            *GetTemplate200ApplicationJSONTemplate
}

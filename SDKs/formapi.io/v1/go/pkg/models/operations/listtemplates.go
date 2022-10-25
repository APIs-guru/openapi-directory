package operations

import (
	"openapi/pkg/models/shared"
)

type ListTemplatesQueryParams struct {
	Page           *int64  `queryParam:"style=form,explode=true,name=page"`
	ParentFolderID *string `queryParam:"style=form,explode=true,name=parent_folder_id"`
	PerPage        *int64  `queryParam:"style=form,explode=true,name=per_page"`
	Query          *string `queryParam:"style=form,explode=true,name=query"`
}

type ListTemplatesSecurity struct {
	APITokenBasic shared.SchemeAPITokenBasic `security:"scheme,type=http,subtype=basic"`
}

type ListTemplatesRequest struct {
	QueryParams ListTemplatesQueryParams
	Security    ListTemplatesSecurity
}

type ListTemplatesTemplateExpirationIntervalEnum string

const (
	ListTemplatesTemplateExpirationIntervalEnumMinutes ListTemplatesTemplateExpirationIntervalEnum = "minutes"
	ListTemplatesTemplateExpirationIntervalEnumHours   ListTemplatesTemplateExpirationIntervalEnum = "hours"
	ListTemplatesTemplateExpirationIntervalEnumDays    ListTemplatesTemplateExpirationIntervalEnum = "days"
)

type ListTemplatesTemplate struct {
	AllowAdditionalProperties bool                                         `json:"allow_additional_properties"`
	Description               string                                       `json:"description"`
	DocumentURL               *string                                      `json:"document_url,omitempty"`
	EditableSubmissions       bool                                         `json:"editable_submissions"`
	ExpirationInterval        *ListTemplatesTemplateExpirationIntervalEnum `json:"expiration_interval,omitempty"`
	ExpireAfter               *float64                                     `json:"expire_after,omitempty"`
	ExpireSubmissions         bool                                         `json:"expire_submissions"`
	ID                        string                                       `json:"id"`
	Locked                    bool                                         `json:"locked"`
	Name                      string                                       `json:"name"`
	PageDimensions            [][]float64                                  `json:"page_dimensions,omitempty"`
	ParentFolderID            *string                                      `json:"parent_folder_id,omitempty"`
	Path                      *string                                      `json:"path,omitempty"`
	PermanentDocumentURL      *string                                      `json:"permanent_document_url,omitempty"`
	PublicSubmissions         bool                                         `json:"public_submissions"`
	PublicWebForm             bool                                         `json:"public_web_form"`
	RedirectURL               string                                       `json:"redirect_url"`
	SlackWebhookURL           string                                       `json:"slack_webhook_url"`
	TemplateType              string                                       `json:"template_type"`
	WebhookURL                string                                       `json:"webhook_url"`
}

type ListTemplatesResponse struct {
	ContentType         string
	StatusCode          int64
	AuthenticationError *shared.AuthenticationError
	Error               *shared.Error
	Templates           []ListTemplatesTemplate
}

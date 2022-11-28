package operations

import (
	"openapi/pkg/models/shared"
)

type MoveTemplateToFolderPathParams struct {
	TemplateID string `pathParam:"style=simple,explode=false,name=template_id"`
}

type MoveTemplateToFolderMoveTemplateData struct {
	ParentFolderID string `json:"parent_folder_id"`
}

type MoveTemplateToFolderSecurity struct {
	APITokenBasic shared.SchemeAPITokenBasic `security:"scheme,type=http,subtype=basic"`
}

type MoveTemplateToFolderTemplateExpirationIntervalEnum string

const (
	MoveTemplateToFolderTemplateExpirationIntervalEnumMinutes MoveTemplateToFolderTemplateExpirationIntervalEnum = "minutes"
	MoveTemplateToFolderTemplateExpirationIntervalEnumHours   MoveTemplateToFolderTemplateExpirationIntervalEnum = "hours"
	MoveTemplateToFolderTemplateExpirationIntervalEnumDays    MoveTemplateToFolderTemplateExpirationIntervalEnum = "days"
)

type MoveTemplateToFolderTemplate struct {
	AllowAdditionalProperties bool                                                `json:"allow_additional_properties"`
	Description               string                                              `json:"description"`
	DocumentURL               *string                                             `json:"document_url,omitempty"`
	EditableSubmissions       bool                                                `json:"editable_submissions"`
	ExpirationInterval        *MoveTemplateToFolderTemplateExpirationIntervalEnum `json:"expiration_interval,omitempty"`
	ExpireAfter               *float64                                            `json:"expire_after,omitempty"`
	ExpireSubmissions         bool                                                `json:"expire_submissions"`
	ID                        string                                              `json:"id"`
	Locked                    bool                                                `json:"locked"`
	Name                      string                                              `json:"name"`
	PageDimensions            [][]float64                                         `json:"page_dimensions,omitempty"`
	ParentFolderID            *string                                             `json:"parent_folder_id,omitempty"`
	Path                      *string                                             `json:"path,omitempty"`
	PermanentDocumentURL      *string                                             `json:"permanent_document_url,omitempty"`
	PublicSubmissions         bool                                                `json:"public_submissions"`
	PublicWebForm             bool                                                `json:"public_web_form"`
	RedirectURL               string                                              `json:"redirect_url"`
	SlackWebhookURL           string                                              `json:"slack_webhook_url"`
	TemplateType              string                                              `json:"template_type"`
	WebhookURL                string                                              `json:"webhook_url"`
}

type MoveTemplateToFolderRequest struct {
	PathParams MoveTemplateToFolderPathParams
	Request    MoveTemplateToFolderMoveTemplateData `request:"mediaType=application/json"`
	Security   MoveTemplateToFolderSecurity
}

type MoveTemplateToFolderResponse struct {
	ContentType string
	StatusCode  int64
	Error       *shared.Error
	Template    *MoveTemplateToFolderTemplate
}

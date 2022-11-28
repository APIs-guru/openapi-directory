package shared

import (
	"time"
)

// ServiceTemplateVersionSummary
// A summary of the service template version detail data.
type ServiceTemplateVersionSummary struct {
	Arn                     string                    `json:"arn"`
	CreatedAt               time.Time                 `json:"createdAt"`
	Description             *string                   `json:"description,omitempty"`
	LastModifiedAt          time.Time                 `json:"lastModifiedAt"`
	MajorVersion            string                    `json:"majorVersion"`
	MinorVersion            string                    `json:"minorVersion"`
	RecommendedMinorVersion *string                   `json:"recommendedMinorVersion,omitempty"`
	Status                  TemplateVersionStatusEnum `json:"status"`
	StatusMessage           *string                   `json:"statusMessage,omitempty"`
	TemplateName            string                    `json:"templateName"`
}

package shared

import (
	"time"
)

type EnvironmentTemplateVersion struct {
	Arn                     string                    `json:"arn"`
	CreatedAt               time.Time                 `json:"createdAt"`
	Description             *string                   `json:"description"`
	LastModifiedAt          time.Time                 `json:"lastModifiedAt"`
	MajorVersion            string                    `json:"majorVersion"`
	MinorVersion            string                    `json:"minorVersion"`
	RecommendedMinorVersion *string                   `json:"recommendedMinorVersion"`
	Schema                  *string                   `json:"schema"`
	Status                  TemplateVersionStatusEnum `json:"status"`
	StatusMessage           *string                   `json:"statusMessage"`
	TemplateName            string                    `json:"templateName"`
}

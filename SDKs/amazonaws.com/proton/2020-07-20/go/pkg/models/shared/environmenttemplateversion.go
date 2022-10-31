package shared

import (
"time")

type EnvironmentTemplateVersion struct {
    Arn string `json:"arn"`
    CreatedAt time.Time `json:"createdAt"`
    Description *string `json:"description,omitempty"`
    LastModifiedAt time.Time `json:"lastModifiedAt"`
    MajorVersion string `json:"majorVersion"`
    MinorVersion string `json:"minorVersion"`
    RecommendedMinorVersion *string `json:"recommendedMinorVersion,omitempty"`
    Schema *string `json:"schema,omitempty"`
    Status TemplateVersionStatusEnum `json:"status"`
    StatusMessage *string `json:"statusMessage,omitempty"`
    TemplateName string `json:"templateName"`
    
}


package shared

import (
"time")

type Finding struct {
    AccountID *string `json:"accountId,omitempty"`
    Archived *bool `json:"archived,omitempty"`
    Category *FindingCategoryEnum `json:"category,omitempty"`
    ClassificationDetails *ClassificationDetails `json:"classificationDetails,omitempty"`
    Count *int64 `json:"count,omitempty"`
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    Description *string `json:"description,omitempty"`
    ID *string `json:"id,omitempty"`
    Partition *string `json:"partition,omitempty"`
    PolicyDetails *PolicyDetails `json:"policyDetails,omitempty"`
    Region *string `json:"region,omitempty"`
    ResourcesAffected *ResourcesAffected `json:"resourcesAffected,omitempty"`
    Sample *bool `json:"sample,omitempty"`
    SchemaVersion *string `json:"schemaVersion,omitempty"`
    Severity *Severity `json:"severity,omitempty"`
    Title *string `json:"title,omitempty"`
    Type *FindingTypeEnum `json:"type,omitempty"`
    UpdatedAt *time.Time `json:"updatedAt,omitempty"`
    
}


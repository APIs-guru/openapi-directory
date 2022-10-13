package shared

import (
	"time"
)

type Finding struct {
	AccountID             *string                `json:"accountId"`
	Archived              *bool                  `json:"archived"`
	Category              *FindingCategoryEnum   `json:"category"`
	ClassificationDetails *ClassificationDetails `json:"classificationDetails"`
	Count                 *int64                 `json:"count"`
	CreatedAt             *time.Time             `json:"createdAt"`
	Description           *string                `json:"description"`
	ID                    *string                `json:"id"`
	Partition             *string                `json:"partition"`
	PolicyDetails         *PolicyDetails         `json:"policyDetails"`
	Region                *string                `json:"region"`
	ResourcesAffected     *ResourcesAffected     `json:"resourcesAffected"`
	Sample                *bool                  `json:"sample"`
	SchemaVersion         *string                `json:"schemaVersion"`
	Severity              *Severity              `json:"severity"`
	Title                 *string                `json:"title"`
	Type                  *FindingTypeEnum       `json:"type"`
	UpdatedAt             *time.Time             `json:"updatedAt"`
}

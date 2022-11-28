package shared

import (
	"time"
)

// TemplateSummary
// Summary information for a template.
type TemplateSummary struct {
	Arn           *string    `json:"arn,omitempty"`
	CreatedAt     *time.Time `json:"createdAt,omitempty"`
	LastUpdatedAt *time.Time `json:"lastUpdatedAt,omitempty"`
	Name          *string    `json:"name,omitempty"`
	Version       *string    `json:"version,omitempty"`
}

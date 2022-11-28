package shared

import (
	"time"
)

// FilterSummary
// A short summary of a filter's attributes.
type FilterSummary struct {
	CreationDateTime    *time.Time `json:"creationDateTime,omitempty"`
	DatasetGroupArn     *string    `json:"datasetGroupArn,omitempty"`
	FailureReason       *string    `json:"failureReason,omitempty"`
	FilterArn           *string    `json:"filterArn,omitempty"`
	LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime,omitempty"`
	Name                *string    `json:"name,omitempty"`
	Status              *string    `json:"status,omitempty"`
}

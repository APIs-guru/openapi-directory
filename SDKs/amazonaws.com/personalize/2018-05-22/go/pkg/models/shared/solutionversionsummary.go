package shared

import (
	"time"
)

// SolutionVersionSummary
// Provides a summary of the properties of a solution version. For a complete listing, call the <a>DescribeSolutionVersion</a> API.
type SolutionVersionSummary struct {
	CreationDateTime    *time.Time `json:"creationDateTime,omitempty"`
	FailureReason       *string    `json:"failureReason,omitempty"`
	LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime,omitempty"`
	SolutionVersionArn  *string    `json:"solutionVersionArn,omitempty"`
	Status              *string    `json:"status,omitempty"`
}

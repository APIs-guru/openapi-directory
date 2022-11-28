package shared

import (
	"time"
)

// SolutionSummary
// Provides a summary of the properties of a solution. For a complete listing, call the <a>DescribeSolution</a> API.
type SolutionSummary struct {
	CreationDateTime    *time.Time `json:"creationDateTime,omitempty"`
	LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime,omitempty"`
	Name                *string    `json:"name,omitempty"`
	SolutionArn         *string    `json:"solutionArn,omitempty"`
	Status              *string    `json:"status,omitempty"`
}

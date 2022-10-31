package shared

import (
	"time"
)

type SolutionVersionSummary struct {
	CreationDateTime    *time.Time `json:"creationDateTime,omitempty"`
	FailureReason       *string    `json:"failureReason,omitempty"`
	LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime,omitempty"`
	SolutionVersionArn  *string    `json:"solutionVersionArn,omitempty"`
	Status              *string    `json:"status,omitempty"`
}

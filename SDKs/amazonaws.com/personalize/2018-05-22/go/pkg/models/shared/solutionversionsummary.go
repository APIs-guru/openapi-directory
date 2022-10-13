package shared

import (
	"time"
)

type SolutionVersionSummary struct {
	CreationDateTime    *time.Time `json:"creationDateTime"`
	FailureReason       *string    `json:"failureReason"`
	LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime"`
	SolutionVersionArn  *string    `json:"solutionVersionArn"`
	Status              *string    `json:"status"`
}

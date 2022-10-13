package shared

import (
	"time"
)

type SolutionSummary struct {
	CreationDateTime    *time.Time `json:"creationDateTime"`
	LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime"`
	Name                *string    `json:"name"`
	SolutionArn         *string    `json:"solutionArn"`
	Status              *string    `json:"status"`
}

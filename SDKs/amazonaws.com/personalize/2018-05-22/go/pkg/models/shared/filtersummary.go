package shared

import (
	"time"
)

type FilterSummary struct {
	CreationDateTime    *time.Time `json:"creationDateTime"`
	DatasetGroupArn     *string    `json:"datasetGroupArn"`
	FailureReason       *string    `json:"failureReason"`
	FilterArn           *string    `json:"filterArn"`
	LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime"`
	Name                *string    `json:"name"`
	Status              *string    `json:"status"`
}

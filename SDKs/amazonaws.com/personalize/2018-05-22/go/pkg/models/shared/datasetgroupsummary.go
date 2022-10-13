package shared

import (
	"time"
)

type DatasetGroupSummary struct {
	CreationDateTime    *time.Time `json:"creationDateTime"`
	DatasetGroupArn     *string    `json:"datasetGroupArn"`
	FailureReason       *string    `json:"failureReason"`
	LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime"`
	Name                *string    `json:"name"`
	Status              *string    `json:"status"`
}

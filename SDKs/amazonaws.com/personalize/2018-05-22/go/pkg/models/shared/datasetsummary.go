package shared

import (
	"time"
)

type DatasetSummary struct {
	CreationDateTime    *time.Time `json:"creationDateTime"`
	DatasetArn          *string    `json:"datasetArn"`
	DatasetType         *string    `json:"datasetType"`
	LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime"`
	Name                *string    `json:"name"`
	Status              *string    `json:"status"`
}

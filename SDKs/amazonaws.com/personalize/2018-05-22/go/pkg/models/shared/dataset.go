package shared

import (
	"time"
)

type Dataset struct {
	CreationDateTime    *time.Time `json:"creationDateTime"`
	DatasetArn          *string    `json:"datasetArn"`
	DatasetGroupArn     *string    `json:"datasetGroupArn"`
	DatasetType         *string    `json:"datasetType"`
	LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime"`
	Name                *string    `json:"name"`
	SchemaArn           *string    `json:"schemaArn"`
	Status              *string    `json:"status"`
}

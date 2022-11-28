package shared

import (
	"time"
)

// Dataset
// Provides metadata for a dataset.
type Dataset struct {
	CreationDateTime    *time.Time `json:"creationDateTime,omitempty"`
	DatasetArn          *string    `json:"datasetArn,omitempty"`
	DatasetGroupArn     *string    `json:"datasetGroupArn,omitempty"`
	DatasetType         *string    `json:"datasetType,omitempty"`
	LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime,omitempty"`
	Name                *string    `json:"name,omitempty"`
	SchemaArn           *string    `json:"schemaArn,omitempty"`
	Status              *string    `json:"status,omitempty"`
}

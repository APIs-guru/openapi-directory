package shared

import (
	"time"
)

// DatasetSummary
// Provides a summary of the properties of a dataset. For a complete listing, call the <a>DescribeDataset</a> API.
type DatasetSummary struct {
	CreationDateTime    *time.Time `json:"creationDateTime,omitempty"`
	DatasetArn          *string    `json:"datasetArn,omitempty"`
	DatasetType         *string    `json:"datasetType,omitempty"`
	LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime,omitempty"`
	Name                *string    `json:"name,omitempty"`
	Status              *string    `json:"status,omitempty"`
}

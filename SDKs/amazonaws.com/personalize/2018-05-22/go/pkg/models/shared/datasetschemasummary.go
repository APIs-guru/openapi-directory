package shared

import (
	"time"
)

// DatasetSchemaSummary
// Provides a summary of the properties of a dataset schema. For a complete listing, call the <a>DescribeSchema</a> API.
type DatasetSchemaSummary struct {
	CreationDateTime    *time.Time `json:"creationDateTime,omitempty"`
	LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime,omitempty"`
	Name                *string    `json:"name,omitempty"`
	SchemaArn           *string    `json:"schemaArn,omitempty"`
}

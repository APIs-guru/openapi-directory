package shared

import (
	"time"
)

// DatasetSchema
// Describes the schema for a dataset. For more information on schemas, see <a>CreateSchema</a>.
type DatasetSchema struct {
	CreationDateTime    *time.Time `json:"creationDateTime,omitempty"`
	LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime,omitempty"`
	Name                *string    `json:"name,omitempty"`
	Schema              *string    `json:"schema,omitempty"`
	SchemaArn           *string    `json:"schemaArn,omitempty"`
}

package shared

import (
	"time"
)

type DatasetSchema struct {
	CreationDateTime    *time.Time `json:"creationDateTime,omitempty"`
	LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime,omitempty"`
	Name                *string    `json:"name,omitempty"`
	Schema              *string    `json:"schema,omitempty"`
	SchemaArn           *string    `json:"schemaArn,omitempty"`
}

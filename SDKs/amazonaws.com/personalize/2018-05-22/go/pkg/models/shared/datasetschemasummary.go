package shared

import (
	"time"
)

type DatasetSchemaSummary struct {
	CreationDateTime    *time.Time `json:"creationDateTime"`
	LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime"`
	Name                *string    `json:"name"`
	SchemaArn           *string    `json:"schemaArn"`
}

package shared

import (
	"time"
)

type DatasetSchema struct {
	CreationDateTime    *time.Time `json:"creationDateTime"`
	LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime"`
	Name                *string    `json:"name"`
	Schema              *string    `json:"schema"`
	SchemaArn           *string    `json:"schemaArn"`
}

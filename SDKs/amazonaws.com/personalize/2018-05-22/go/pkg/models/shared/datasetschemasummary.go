package shared

import (
"time")

type DatasetSchemaSummary struct {
    CreationDateTime *time.Time `json:"creationDateTime,omitempty"`
    LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime,omitempty"`
    Name *string `json:"name,omitempty"`
    SchemaArn *string `json:"schemaArn,omitempty"`
    
}


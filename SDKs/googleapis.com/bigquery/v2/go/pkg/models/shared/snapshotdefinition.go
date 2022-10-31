package shared

import (
"time")

type SnapshotDefinition struct {
    BaseTableReference *TableReference `json:"baseTableReference,omitempty"`
    SnapshotTime *time.Time `json:"snapshotTime,omitempty"`
    
}


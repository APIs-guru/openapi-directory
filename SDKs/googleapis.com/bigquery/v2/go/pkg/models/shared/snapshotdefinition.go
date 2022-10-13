package shared

import (
	"time"
)

type SnapshotDefinition struct {
	BaseTableReference *TableReference `json:"baseTableReference"`
	SnapshotTime       *time.Time      `json:"snapshotTime"`
}

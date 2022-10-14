package shared

import (
	"time"
)

type CloneDefinition struct {
	BaseTableReference *TableReference `json:"baseTableReference,omitempty"`
	CloneTime          *time.Time      `json:"cloneTime,omitempty"`
}

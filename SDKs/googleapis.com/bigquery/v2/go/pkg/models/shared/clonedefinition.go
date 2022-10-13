package shared

import (
	"time"
)

type CloneDefinition struct {
	BaseTableReference *TableReference `json:"baseTableReference"`
	CloneTime          *time.Time      `json:"cloneTime"`
}

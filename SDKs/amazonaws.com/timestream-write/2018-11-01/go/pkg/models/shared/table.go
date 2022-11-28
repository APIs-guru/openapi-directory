package shared

import (
	"time"
)

// Table
// Table represents a database table in Timestream. Tables contain one or more related time series. You can modify the retention duration of the memory store and the magnetic store for a table.
type Table struct {
	Arn                 *string              `json:"Arn,omitempty"`
	CreationTime        *time.Time           `json:"CreationTime,omitempty"`
	DatabaseName        *string              `json:"DatabaseName,omitempty"`
	LastUpdatedTime     *time.Time           `json:"LastUpdatedTime,omitempty"`
	RetentionProperties *RetentionProperties `json:"RetentionProperties,omitempty"`
	TableName           *string              `json:"TableName,omitempty"`
	TableStatus         *TableStatusEnum     `json:"TableStatus,omitempty"`
}

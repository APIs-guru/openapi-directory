package shared

import (
	"time"
)

type Table struct {
	Arn                 *string              `json:"Arn,omitempty"`
	CreationTime        *time.Time           `json:"CreationTime,omitempty"`
	DatabaseName        *string              `json:"DatabaseName,omitempty"`
	LastUpdatedTime     *time.Time           `json:"LastUpdatedTime,omitempty"`
	RetentionProperties *RetentionProperties `json:"RetentionProperties,omitempty"`
	TableName           *string              `json:"TableName,omitempty"`
	TableStatus         *TableStatusEnum     `json:"TableStatus,omitempty"`
}

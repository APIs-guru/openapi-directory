package shared

import (
	"time"
)

type Table struct {
	Arn                 *string              `json:"Arn"`
	CreationTime        *time.Time           `json:"CreationTime"`
	DatabaseName        *string              `json:"DatabaseName"`
	LastUpdatedTime     *time.Time           `json:"LastUpdatedTime"`
	RetentionProperties *RetentionProperties `json:"RetentionProperties"`
	TableName           *string              `json:"TableName"`
	TableStatus         *TableStatusEnum     `json:"TableStatus"`
}

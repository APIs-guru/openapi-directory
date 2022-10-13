package shared

import (
	"time"
)

type DescribeTaskOutput struct {
	CompletedAt   *time.Time        `json:"completedAt"`
	CreatedAt     *time.Time        `json:"createdAt"`
	Description   *string           `json:"description"`
	LastUpdatedAt *time.Time        `json:"lastUpdatedAt"`
	State         *TaskStateEnum    `json:"state"`
	Tags          map[string]string `json:"tags"`
	Targets       []string          `json:"targets"`
	TaskArn       *string           `json:"taskArn"`
	TaskID        *string           `json:"taskId"`
}

package shared

import (
	"time"
)

type DescribeTaskOutput struct {
	CompletedAt   *time.Time        `json:"completedAt,omitempty"`
	CreatedAt     *time.Time        `json:"createdAt,omitempty"`
	Description   *string           `json:"description,omitempty"`
	LastUpdatedAt *time.Time        `json:"lastUpdatedAt,omitempty"`
	State         *TaskStateEnum    `json:"state,omitempty"`
	Tags          map[string]string `json:"tags,omitempty"`
	Targets       []string          `json:"targets,omitempty"`
	TaskArn       *string           `json:"taskArn,omitempty"`
	TaskID        *string           `json:"taskId,omitempty"`
}

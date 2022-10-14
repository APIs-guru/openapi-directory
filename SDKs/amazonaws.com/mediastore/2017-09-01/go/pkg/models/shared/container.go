package shared

import (
	"time"
)

type Container struct {
	Arn                  *string              `json:"ARN,omitempty"`
	AccessLoggingEnabled *bool                `json:"AccessLoggingEnabled,omitempty"`
	CreationTime         *time.Time           `json:"CreationTime,omitempty"`
	Endpoint             *string              `json:"Endpoint,omitempty"`
	Name                 *string              `json:"Name,omitempty"`
	Status               *ContainerStatusEnum `json:"Status,omitempty"`
}

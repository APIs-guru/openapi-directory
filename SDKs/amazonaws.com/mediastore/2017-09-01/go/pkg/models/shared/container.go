package shared

import (
	"time"
)

type Container struct {
	Arn                  *string              `json:"ARN"`
	AccessLoggingEnabled *bool                `json:"AccessLoggingEnabled"`
	CreationTime         *time.Time           `json:"CreationTime"`
	Endpoint             *string              `json:"Endpoint"`
	Name                 *string              `json:"Name"`
	Status               *ContainerStatusEnum `json:"Status"`
}

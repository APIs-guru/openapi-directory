package shared

import (
	"time"
)

type GetContainerLogRequest struct {
	ContainerName string     `json:"containerName"`
	EndTime       *time.Time `json:"endTime"`
	FilterPattern *string    `json:"filterPattern"`
	PageToken     *string    `json:"pageToken"`
	ServiceName   string     `json:"serviceName"`
	StartTime     *time.Time `json:"startTime"`
}

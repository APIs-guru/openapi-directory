package shared

import (
"time")

type GetContainerLogRequest struct {
    ContainerName string `json:"containerName"`
    EndTime *time.Time `json:"endTime,omitempty"`
    FilterPattern *string `json:"filterPattern,omitempty"`
    PageToken *string `json:"pageToken,omitempty"`
    ServiceName string `json:"serviceName"`
    StartTime *time.Time `json:"startTime,omitempty"`
    
}


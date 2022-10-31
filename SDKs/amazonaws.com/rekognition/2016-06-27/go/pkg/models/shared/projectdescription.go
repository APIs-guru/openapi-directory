package shared

import (
"time")

type ProjectDescription struct {
    CreationTimestamp *time.Time `json:"CreationTimestamp,omitempty"`
    ProjectArn *string `json:"ProjectArn,omitempty"`
    Status *ProjectStatusEnum `json:"Status,omitempty"`
    
}


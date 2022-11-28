package shared

import (
	"time"
)

// ProjectDescription
// A description of a Amazon Rekognition Custom Labels project.
type ProjectDescription struct {
	CreationTimestamp *time.Time         `json:"CreationTimestamp,omitempty"`
	ProjectArn        *string            `json:"ProjectArn,omitempty"`
	Status            *ProjectStatusEnum `json:"Status,omitempty"`
}

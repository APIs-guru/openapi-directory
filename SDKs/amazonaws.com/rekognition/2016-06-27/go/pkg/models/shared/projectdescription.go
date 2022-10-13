package shared

import (
	"time"
)

type ProjectDescription struct {
	CreationTimestamp *time.Time         `json:"CreationTimestamp"`
	ProjectArn        *string            `json:"ProjectArn"`
	Status            *ProjectStatusEnum `json:"Status"`
}

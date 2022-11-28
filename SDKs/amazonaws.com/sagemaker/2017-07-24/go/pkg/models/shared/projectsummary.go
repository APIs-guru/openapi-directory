package shared

import (
	"time"
)

// ProjectSummary
// Information about a project.
type ProjectSummary struct {
	CreationTime       time.Time         `json:"CreationTime"`
	ProjectArn         string            `json:"ProjectArn"`
	ProjectDescription *string           `json:"ProjectDescription,omitempty"`
	ProjectID          string            `json:"ProjectId"`
	ProjectName        string            `json:"ProjectName"`
	ProjectStatus      ProjectStatusEnum `json:"ProjectStatus"`
}

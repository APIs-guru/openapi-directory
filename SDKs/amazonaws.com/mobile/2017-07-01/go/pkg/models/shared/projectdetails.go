package shared

import (
	"time"
)

// ProjectDetails
//
//	Detailed information about an AWS Mobile Hub project.
type ProjectDetails struct {
	ConsoleURL      *string           `json:"consoleUrl,omitempty"`
	CreatedDate     *time.Time        `json:"createdDate,omitempty"`
	LastUpdatedDate *time.Time        `json:"lastUpdatedDate,omitempty"`
	Name            *string           `json:"name,omitempty"`
	ProjectID       *string           `json:"projectId,omitempty"`
	Region          *string           `json:"region,omitempty"`
	Resources       []Resource        `json:"resources,omitempty"`
	State           *ProjectStateEnum `json:"state,omitempty"`
}

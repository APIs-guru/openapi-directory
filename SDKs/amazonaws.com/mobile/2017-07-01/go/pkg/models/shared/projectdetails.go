package shared

import (
	"time"
)

type ProjectDetails struct {
	ConsoleURL      *string           `json:"consoleUrl"`
	CreatedDate     *time.Time        `json:"createdDate"`
	LastUpdatedDate *time.Time        `json:"lastUpdatedDate"`
	Name            *string           `json:"name"`
	ProjectID       *string           `json:"projectId"`
	Region          *string           `json:"region"`
	Resources       []Resource        `json:"resources"`
	State           *ProjectStateEnum `json:"state"`
}

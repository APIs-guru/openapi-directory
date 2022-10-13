package shared

import (
	"time"
)

type ServiceUpdate struct {
	AutoUpdateStartDate *time.Time               `json:"AutoUpdateStartDate"`
	ClusterName         *string                  `json:"ClusterName"`
	Description         *string                  `json:"Description"`
	NodesUpdated        *string                  `json:"NodesUpdated"`
	ReleaseDate         *time.Time               `json:"ReleaseDate"`
	ServiceUpdateName   *string                  `json:"ServiceUpdateName"`
	Status              *ServiceUpdateStatusEnum `json:"Status"`
	Type                *ServiceUpdateTypeEnum   `json:"Type"`
}

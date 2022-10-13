package shared

import (
	"time"
)

type ContainerServiceDeployment struct {
	Containers     map[string]Container                 `json:"containers"`
	CreatedAt      *time.Time                           `json:"createdAt"`
	PublicEndpoint *ContainerServiceEndpoint            `json:"publicEndpoint"`
	State          *ContainerServiceDeploymentStateEnum `json:"state"`
	Version        *int64                               `json:"version"`
}

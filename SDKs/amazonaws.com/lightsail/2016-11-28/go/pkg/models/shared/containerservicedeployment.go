package shared

import (
	"time"
)

// ContainerServiceDeployment
// <p>Describes a container deployment configuration of an Amazon Lightsail container service.</p> <p>A deployment specifies the settings, such as the ports and launch command, of containers that are deployed to your container service.</p>
type ContainerServiceDeployment struct {
	Containers     map[string]Container                 `json:"containers,omitempty"`
	CreatedAt      *time.Time                           `json:"createdAt,omitempty"`
	PublicEndpoint *ContainerServiceEndpoint            `json:"publicEndpoint,omitempty"`
	State          *ContainerServiceDeploymentStateEnum `json:"state,omitempty"`
	Version        *int64                               `json:"version,omitempty"`
}

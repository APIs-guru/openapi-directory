package shared

import (
"time")

type ContainerServiceDeployment struct {
    Containers map[string]Container `json:"containers,omitempty"`
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    PublicEndpoint *ContainerServiceEndpoint `json:"publicEndpoint,omitempty"`
    State *ContainerServiceDeploymentStateEnum `json:"state,omitempty"`
    Version *int64 `json:"version,omitempty"`
    
}


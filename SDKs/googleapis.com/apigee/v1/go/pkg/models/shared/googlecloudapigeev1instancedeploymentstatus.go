package shared



type GoogleCloudApigeeV1InstanceDeploymentStatus struct {
    DeployedRevisions []GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevision `json:"deployedRevisions,omitempty"`
    DeployedRoutes []GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute `json:"deployedRoutes,omitempty"`
    Instance *string `json:"instance,omitempty"`
    
}


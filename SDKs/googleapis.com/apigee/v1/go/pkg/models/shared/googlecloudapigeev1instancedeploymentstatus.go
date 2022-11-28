package shared

// GoogleCloudApigeeV1InstanceDeploymentStatus
// The status of a deployment as reported by a single instance.
type GoogleCloudApigeeV1InstanceDeploymentStatus struct {
	DeployedRevisions []GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevision `json:"deployedRevisions,omitempty"`
	DeployedRoutes    []GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute    `json:"deployedRoutes,omitempty"`
	Instance          *string                                                       `json:"instance,omitempty"`
}

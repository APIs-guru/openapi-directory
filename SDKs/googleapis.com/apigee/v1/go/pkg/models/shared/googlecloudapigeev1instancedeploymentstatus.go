package shared

type GoogleCloudApigeeV1InstanceDeploymentStatus struct {
	DeployedRevisions []GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevision `json:"deployedRevisions"`
	DeployedRoutes    []GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute    `json:"deployedRoutes"`
	Instance          *string                                                       `json:"instance"`
}

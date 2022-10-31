package shared

type DeploySystemInstanceResponse struct {
	GreengrassDeploymentID *string               `json:"greengrassDeploymentId,omitempty"`
	Summary                SystemInstanceSummary `json:"summary"`
}

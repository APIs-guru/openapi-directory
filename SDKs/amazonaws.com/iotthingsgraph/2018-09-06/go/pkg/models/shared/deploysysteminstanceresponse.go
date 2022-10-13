package shared

type DeploySystemInstanceResponse struct {
	GreengrassDeploymentID *string               `json:"greengrassDeploymentId"`
	Summary                SystemInstanceSummary `json:"summary"`
}

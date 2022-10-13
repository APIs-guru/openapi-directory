package shared

type GetContainerServiceDeploymentsResult struct {
	Deployments []ContainerServiceDeployment `json:"deployments"`
}

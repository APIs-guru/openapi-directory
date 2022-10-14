package shared

type DescribeDeploymentsRequest struct {
	AppID         *string  `json:"AppId,omitempty"`
	DeploymentIds []string `json:"DeploymentIds,omitempty"`
	StackID       *string  `json:"StackId,omitempty"`
}

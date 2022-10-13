package shared

type DescribeDeploymentsRequest struct {
	AppID         *string  `json:"AppId"`
	DeploymentIds []string `json:"DeploymentIds"`
	StackID       *string  `json:"StackId"`
}

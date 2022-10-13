package shared

type DescribeCommandsRequest struct {
	CommandIds   []string `json:"CommandIds"`
	DeploymentID *string  `json:"DeploymentId"`
	InstanceID   *string  `json:"InstanceId"`
}

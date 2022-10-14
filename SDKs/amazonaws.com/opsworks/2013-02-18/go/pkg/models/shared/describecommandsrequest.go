package shared

type DescribeCommandsRequest struct {
	CommandIds   []string `json:"CommandIds,omitempty"`
	DeploymentID *string  `json:"DeploymentId,omitempty"`
	InstanceID   *string  `json:"InstanceId,omitempty"`
}

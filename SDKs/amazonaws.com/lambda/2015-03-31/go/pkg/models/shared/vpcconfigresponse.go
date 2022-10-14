package shared

type VpcConfigResponse struct {
	SecurityGroupIds []string `json:"SecurityGroupIds,omitempty"`
	SubnetIds        []string `json:"SubnetIds,omitempty"`
	VpcID            *string  `json:"VpcId,omitempty"`
}

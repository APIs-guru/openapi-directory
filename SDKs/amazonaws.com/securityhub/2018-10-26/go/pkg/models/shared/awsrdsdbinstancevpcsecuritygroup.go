package shared

type AwsRdsDbInstanceVpcSecurityGroup struct {
	Status             *string `json:"Status,omitempty"`
	VpcSecurityGroupID *string `json:"VpcSecurityGroupId,omitempty"`
}

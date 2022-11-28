package shared

// AwsRdsDbInstanceVpcSecurityGroup
// A VPC security groups that the DB instance belongs to.
type AwsRdsDbInstanceVpcSecurityGroup struct {
	Status             *string `json:"Status,omitempty"`
	VpcSecurityGroupID *string `json:"VpcSecurityGroupId,omitempty"`
}

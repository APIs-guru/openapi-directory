package shared

// AwsRedshiftClusterVpcSecurityGroup
// A VPC security group that the cluster belongs to, if the cluster is in a VPC.
type AwsRedshiftClusterVpcSecurityGroup struct {
	Status             *string `json:"Status,omitempty"`
	VpcSecurityGroupID *string `json:"VpcSecurityGroupId,omitempty"`
}

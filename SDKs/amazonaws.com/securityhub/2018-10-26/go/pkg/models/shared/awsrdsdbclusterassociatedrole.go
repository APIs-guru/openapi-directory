package shared

// AwsRdsDbClusterAssociatedRole
// An IAM role that is associated with the Amazon RDS DB cluster.
type AwsRdsDbClusterAssociatedRole struct {
	RoleArn *string `json:"RoleArn,omitempty"`
	Status  *string `json:"Status,omitempty"`
}

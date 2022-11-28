package shared

// AwsRedshiftClusterIamRole
// An IAM role that the cluster can use to access other Amazon Web Services services.
type AwsRedshiftClusterIamRole struct {
	ApplyStatus *string `json:"ApplyStatus,omitempty"`
	IamRoleArn  *string `json:"IamRoleArn,omitempty"`
}

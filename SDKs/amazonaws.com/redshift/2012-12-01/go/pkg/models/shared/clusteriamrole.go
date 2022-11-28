package shared

// ClusterIamRole
// An Identity and Access Management (IAM) role that can be used by the associated Amazon Redshift cluster to access other Amazon Web Services services.
type ClusterIamRole struct {
	ApplyStatus *string
	IamRoleArn  *string
}

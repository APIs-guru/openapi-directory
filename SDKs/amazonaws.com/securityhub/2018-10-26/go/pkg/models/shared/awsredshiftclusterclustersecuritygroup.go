package shared

// AwsRedshiftClusterClusterSecurityGroup
// A security group that is associated with the cluster.
type AwsRedshiftClusterClusterSecurityGroup struct {
	ClusterSecurityGroupName *string `json:"ClusterSecurityGroupName,omitempty"`
	Status                   *string `json:"Status,omitempty"`
}

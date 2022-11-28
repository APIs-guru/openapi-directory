package shared

// AwsRedshiftClusterClusterNode
// A node in an Amazon Redshift cluster.
type AwsRedshiftClusterClusterNode struct {
	NodeRole         *string `json:"NodeRole,omitempty"`
	PrivateIPAddress *string `json:"PrivateIpAddress,omitempty"`
	PublicIPAddress  *string `json:"PublicIpAddress,omitempty"`
}

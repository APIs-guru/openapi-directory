package shared

// AwsRedshiftClusterEndpoint
// The connection endpoint for an Amazon Redshift cluster.
type AwsRedshiftClusterEndpoint struct {
	Address *string `json:"Address,omitempty"`
	Port    *int64  `json:"Port,omitempty"`
}

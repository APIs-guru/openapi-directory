package shared

// AwsRedshiftClusterElasticIPStatus
// The status of the elastic IP (EIP) address for an Amazon Redshift cluster.
type AwsRedshiftClusterElasticIPStatus struct {
	ElasticIP *string `json:"ElasticIp,omitempty"`
	Status    *string `json:"Status,omitempty"`
}

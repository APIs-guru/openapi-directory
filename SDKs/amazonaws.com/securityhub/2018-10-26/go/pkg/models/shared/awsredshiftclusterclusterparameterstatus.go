package shared

// AwsRedshiftClusterClusterParameterStatus
// The status of a parameter in a cluster parameter group for an Amazon Redshift cluster.
type AwsRedshiftClusterClusterParameterStatus struct {
	ParameterApplyErrorDescription *string `json:"ParameterApplyErrorDescription,omitempty"`
	ParameterApplyStatus           *string `json:"ParameterApplyStatus,omitempty"`
	ParameterName                  *string `json:"ParameterName,omitempty"`
}

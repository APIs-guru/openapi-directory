package shared

// AwsRedshiftClusterClusterParameterGroup
// A cluster parameter group that is associated with an Amazon Redshift cluster.
type AwsRedshiftClusterClusterParameterGroup struct {
	ClusterParameterStatusList []AwsRedshiftClusterClusterParameterStatus `json:"ClusterParameterStatusList,omitempty"`
	ParameterApplyStatus       *string                                    `json:"ParameterApplyStatus,omitempty"`
	ParameterGroupName         *string                                    `json:"ParameterGroupName,omitempty"`
}

package shared

type AwsRedshiftClusterClusterParameterGroup struct {
	ClusterParameterStatusList []AwsRedshiftClusterClusterParameterStatus `json:"ClusterParameterStatusList"`
	ParameterApplyStatus       *string                                    `json:"ParameterApplyStatus"`
	ParameterGroupName         *string                                    `json:"ParameterGroupName"`
}

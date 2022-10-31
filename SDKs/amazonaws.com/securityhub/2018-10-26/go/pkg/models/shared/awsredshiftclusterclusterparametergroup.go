package shared



type AwsRedshiftClusterClusterParameterGroup struct {
    ClusterParameterStatusList []AwsRedshiftClusterClusterParameterStatus `json:"ClusterParameterStatusList,omitempty"`
    ParameterApplyStatus *string `json:"ParameterApplyStatus,omitempty"`
    ParameterGroupName *string `json:"ParameterGroupName,omitempty"`
    
}


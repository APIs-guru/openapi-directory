package shared

// ClusterParameterGroupStatus
// Describes the status of a parameter group.
type ClusterParameterGroupStatus struct {
	ClusterParameterStatusList []ClusterParameterStatus
	ParameterApplyStatus       *string
	ParameterGroupName         *string
}

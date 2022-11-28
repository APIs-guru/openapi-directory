package shared

// ClusterParameterGroupsMessage
// Contains the output from the <a>DescribeClusterParameterGroups</a> action.
type ClusterParameterGroupsMessage struct {
	Marker          *string
	ParameterGroups []ClusterParameterGroup
}

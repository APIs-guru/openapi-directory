package shared

// DbClusterParameterGroupsMessage
// <p/>
type DbClusterParameterGroupsMessage struct {
	DbClusterParameterGroups []DbClusterParameterGroup
	Marker                   *string
}

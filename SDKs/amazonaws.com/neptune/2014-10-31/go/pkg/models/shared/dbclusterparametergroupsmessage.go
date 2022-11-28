package shared

type DbClusterParameterGroupsMessage struct {
	DbClusterParameterGroups []DbClusterParameterGroup
	Marker                   *string
}

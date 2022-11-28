package shared

type DbParameterGroupsMessage struct {
	DbParameterGroups []DbParameterGroup
	Marker            *string
}

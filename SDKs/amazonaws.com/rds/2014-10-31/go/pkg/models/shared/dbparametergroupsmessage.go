package shared

// DbParameterGroupsMessage
//
//	Contains the result of a successful invocation of the <code>DescribeDBParameterGroups</code> action.
type DbParameterGroupsMessage struct {
	DbParameterGroups []DbParameterGroup
	Marker            *string
}

package shared

// DbParameterGroupNameMessage
//
//	Contains the result of a successful invocation of the <code>ModifyDBParameterGroup</code> or <code>ResetDBParameterGroup</code> action.
type DbParameterGroupNameMessage struct {
	DbParameterGroupName *string
}

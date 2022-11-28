package shared

// DbParameterGroupDetails
//
//	Contains the result of a successful invocation of the <code>DescribeDBParameters</code> action.
type DbParameterGroupDetails struct {
	Marker     *string
	Parameters []Parameter
}

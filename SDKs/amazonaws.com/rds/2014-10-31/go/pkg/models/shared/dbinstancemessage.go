package shared

// DbInstanceMessage
//
//	Contains the result of a successful invocation of the <code>DescribeDBInstances</code> action.
type DbInstanceMessage struct {
	DbInstances []DbInstance
	Marker      *string
}

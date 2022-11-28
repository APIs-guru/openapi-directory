package shared

// DbEngineVersionMessage
//
//	Contains the result of a successful invocation of the <code>DescribeDBEngineVersions</code> action.
type DbEngineVersionMessage struct {
	DbEngineVersions []DbEngineVersion
	Marker           *string
}

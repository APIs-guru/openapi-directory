package shared

// CharacterSet
//
//	This data type is used as a response element in the action <code>DescribeDBEngineVersions</code>.
type CharacterSet struct {
	CharacterSetDescription *string
	CharacterSetName        *string
}

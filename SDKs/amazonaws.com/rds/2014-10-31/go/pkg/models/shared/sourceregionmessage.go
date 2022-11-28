package shared

// SourceRegionMessage
// Contains the result of a successful invocation of the <code>DescribeSourceRegions</code> action.
type SourceRegionMessage struct {
	Marker        *string
	SourceRegions []SourceRegion
}

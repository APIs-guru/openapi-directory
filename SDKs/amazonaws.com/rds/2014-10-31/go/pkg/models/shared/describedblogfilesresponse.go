package shared

// DescribeDbLogFilesResponse
//
//	The response from a call to <code>DescribeDBLogFiles</code>.
type DescribeDbLogFilesResponse struct {
	DescribeDbLogFiles []DescribeDbLogFilesDetails
	Marker             *string
}

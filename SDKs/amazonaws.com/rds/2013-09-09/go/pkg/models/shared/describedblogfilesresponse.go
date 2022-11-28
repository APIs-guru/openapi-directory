package shared

type DescribeDbLogFilesResponse struct {
	DescribeDbLogFiles []DescribeDbLogFilesDetails
	Marker             *string
}

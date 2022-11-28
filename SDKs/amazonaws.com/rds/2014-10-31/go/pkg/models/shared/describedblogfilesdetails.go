package shared

// DescribeDbLogFilesDetails
// This data type is used as a response element to <code>DescribeDBLogFiles</code>.
type DescribeDbLogFilesDetails struct {
	LastWritten *int64
	LogFileName *string
	Size        *int64
}

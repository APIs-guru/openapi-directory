package shared

type DescribeDbLogFilesDetails struct {
	LastWritten *int64
	LogFileName *string
	Size        *int64
}

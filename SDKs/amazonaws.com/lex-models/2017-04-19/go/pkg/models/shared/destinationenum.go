package shared

type DestinationEnum string

const (
	DestinationEnumCloudwatchLogs DestinationEnum = "CLOUDWATCH_LOGS"
	DestinationEnumS3             DestinationEnum = "S3"
)

package shared




type LogDestinationTypeEnum string

const (
    LogDestinationTypeEnumS3 LogDestinationTypeEnum = "S3"
LogDestinationTypeEnumCloudWatchLogs LogDestinationTypeEnum = "CloudWatchLogs"
LogDestinationTypeEnumKinesisDataFirehose LogDestinationTypeEnum = "KinesisDataFirehose"
)



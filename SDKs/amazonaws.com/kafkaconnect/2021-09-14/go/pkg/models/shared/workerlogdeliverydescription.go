package shared

type WorkerLogDeliveryDescription struct {
	CloudWatchLogs *CloudWatchLogsLogDeliveryDescription `json:"cloudWatchLogs"`
	Firehose       *FirehoseLogDeliveryDescription       `json:"firehose"`
	S3             *S3LogDeliveryDescription             `json:"s3"`
}

package shared

type WorkerLogDelivery struct {
	CloudWatchLogs *CloudWatchLogsLogDelivery `json:"cloudWatchLogs"`
	Firehose       *FirehoseLogDelivery       `json:"firehose"`
	S3             *S3LogDelivery             `json:"s3"`
}

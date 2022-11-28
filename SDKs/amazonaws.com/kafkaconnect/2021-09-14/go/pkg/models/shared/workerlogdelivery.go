package shared

// WorkerLogDelivery
// Workers can send worker logs to different destination types. This configuration specifies the details of these destinations.
type WorkerLogDelivery struct {
	CloudWatchLogs *CloudWatchLogsLogDelivery `json:"cloudWatchLogs,omitempty"`
	Firehose       *FirehoseLogDelivery       `json:"firehose,omitempty"`
	S3             *S3LogDelivery             `json:"s3,omitempty"`
}

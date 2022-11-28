package shared

// WorkerLogDeliveryDescription
// Workers can send worker logs to different destination types. This configuration specifies the details of these destinations.
type WorkerLogDeliveryDescription struct {
	CloudWatchLogs *CloudWatchLogsLogDeliveryDescription `json:"cloudWatchLogs,omitempty"`
	Firehose       *FirehoseLogDeliveryDescription       `json:"firehose,omitempty"`
	S3             *S3LogDeliveryDescription             `json:"s3,omitempty"`
}

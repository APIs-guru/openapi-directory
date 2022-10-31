package shared



type WorkerLogDelivery struct {
    CloudWatchLogs *CloudWatchLogsLogDelivery `json:"cloudWatchLogs,omitempty"`
    Firehose *FirehoseLogDelivery `json:"firehose,omitempty"`
    S3 *S3LogDelivery `json:"s3,omitempty"`
    
}


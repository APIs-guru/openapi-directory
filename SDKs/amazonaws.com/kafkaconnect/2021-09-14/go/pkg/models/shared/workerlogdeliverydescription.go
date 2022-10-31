package shared



type WorkerLogDeliveryDescription struct {
    CloudWatchLogs *CloudWatchLogsLogDeliveryDescription `json:"cloudWatchLogs,omitempty"`
    Firehose *FirehoseLogDeliveryDescription `json:"firehose,omitempty"`
    S3 *S3LogDeliveryDescription `json:"s3,omitempty"`
    
}


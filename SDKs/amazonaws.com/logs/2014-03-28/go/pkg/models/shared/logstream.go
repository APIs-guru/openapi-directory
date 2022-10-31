package shared



type LogStream struct {
    Arn *string `json:"arn,omitempty"`
    CreationTime *int64 `json:"creationTime,omitempty"`
    FirstEventTimestamp *int64 `json:"firstEventTimestamp,omitempty"`
    LastEventTimestamp *int64 `json:"lastEventTimestamp,omitempty"`
    LastIngestionTime *int64 `json:"lastIngestionTime,omitempty"`
    LogStreamName *string `json:"logStreamName,omitempty"`
    StoredBytes *int64 `json:"storedBytes,omitempty"`
    UploadSequenceToken *string `json:"uploadSequenceToken,omitempty"`
    
}


package shared



type LogGroup struct {
    Arn *string `json:"arn,omitempty"`
    CreationTime *int64 `json:"creationTime,omitempty"`
    KmsKeyID *string `json:"kmsKeyId,omitempty"`
    LogGroupName *string `json:"logGroupName,omitempty"`
    MetricFilterCount *int64 `json:"metricFilterCount,omitempty"`
    RetentionInDays *int64 `json:"retentionInDays,omitempty"`
    StoredBytes *int64 `json:"storedBytes,omitempty"`
    
}


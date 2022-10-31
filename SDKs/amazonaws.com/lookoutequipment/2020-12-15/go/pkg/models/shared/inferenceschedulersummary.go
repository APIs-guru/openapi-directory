package shared



type InferenceSchedulerSummary struct {
    DataDelayOffsetInMinutes *int64 `json:"DataDelayOffsetInMinutes,omitempty"`
    DataUploadFrequency *DataUploadFrequencyEnum `json:"DataUploadFrequency,omitempty"`
    InferenceSchedulerArn *string `json:"InferenceSchedulerArn,omitempty"`
    InferenceSchedulerName *string `json:"InferenceSchedulerName,omitempty"`
    ModelArn *string `json:"ModelArn,omitempty"`
    ModelName *string `json:"ModelName,omitempty"`
    Status *InferenceSchedulerStatusEnum `json:"Status,omitempty"`
    
}


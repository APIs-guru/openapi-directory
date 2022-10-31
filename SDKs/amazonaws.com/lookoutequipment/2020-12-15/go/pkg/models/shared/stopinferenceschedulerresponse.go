package shared



type StopInferenceSchedulerResponse struct {
    InferenceSchedulerArn *string `json:"InferenceSchedulerArn,omitempty"`
    InferenceSchedulerName *string `json:"InferenceSchedulerName,omitempty"`
    ModelArn *string `json:"ModelArn,omitempty"`
    ModelName *string `json:"ModelName,omitempty"`
    Status *InferenceSchedulerStatusEnum `json:"Status,omitempty"`
    
}


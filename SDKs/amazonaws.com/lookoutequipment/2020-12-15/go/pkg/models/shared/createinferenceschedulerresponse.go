package shared



type CreateInferenceSchedulerResponse struct {
    InferenceSchedulerArn *string `json:"InferenceSchedulerArn,omitempty"`
    InferenceSchedulerName *string `json:"InferenceSchedulerName,omitempty"`
    Status *InferenceSchedulerStatusEnum `json:"Status,omitempty"`
    
}


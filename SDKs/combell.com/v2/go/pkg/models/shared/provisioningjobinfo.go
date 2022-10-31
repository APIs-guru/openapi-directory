package shared



type ProvisioningJobInfo struct {
    Completion *CompletionEstimation `json:"completion,omitempty"`
    ID *string `json:"id,omitempty"`
    Status *ProvisioningJobStatusEnum `json:"status,omitempty"`
    
}


package shared



type ListExecutionsInput struct {
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    StateMachineArn string `json:"stateMachineArn"`
    StatusFilter *ExecutionStatusEnum `json:"statusFilter,omitempty"`
    
}


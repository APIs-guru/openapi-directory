package shared



type DescribeServiceErrorsRequest struct {
    InstanceID *string `json:"InstanceId,omitempty"`
    ServiceErrorIds []string `json:"ServiceErrorIds,omitempty"`
    StackID *string `json:"StackId,omitempty"`
    
}


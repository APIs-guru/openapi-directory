package shared



type GetInstancesHealthStatusRequest struct {
    Instances []string `json:"Instances,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    ServiceID string `json:"ServiceId"`
    
}


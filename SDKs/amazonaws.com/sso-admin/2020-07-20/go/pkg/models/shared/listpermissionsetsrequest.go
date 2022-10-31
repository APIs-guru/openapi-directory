package shared



type ListPermissionSetsRequest struct {
    InstanceArn string `json:"InstanceArn"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}


package shared



type DescribeWorkspaceImagePermissionsRequest struct {
    ImageID string `json:"ImageId"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}


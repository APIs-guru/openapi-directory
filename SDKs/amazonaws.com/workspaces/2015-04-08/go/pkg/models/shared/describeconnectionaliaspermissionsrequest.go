package shared



type DescribeConnectionAliasPermissionsRequest struct {
    AliasID string `json:"AliasId"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}


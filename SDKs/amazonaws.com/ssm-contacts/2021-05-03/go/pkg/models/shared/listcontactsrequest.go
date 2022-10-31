package shared



type ListContactsRequest struct {
    AliasPrefix *string `json:"AliasPrefix,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    Type *ContactTypeEnum `json:"Type,omitempty"`
    
}


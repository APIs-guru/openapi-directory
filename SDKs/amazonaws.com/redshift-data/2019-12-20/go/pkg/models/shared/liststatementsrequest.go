package shared



type ListStatementsRequest struct {
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    RoleLevel *bool `json:"RoleLevel,omitempty"`
    StatementName *string `json:"StatementName,omitempty"`
    Status *StatusStringEnum `json:"Status,omitempty"`
    
}


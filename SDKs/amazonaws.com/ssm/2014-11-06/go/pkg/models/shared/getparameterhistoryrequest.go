package shared



type GetParameterHistoryRequest struct {
    MaxResults *int64 `json:"MaxResults,omitempty"`
    Name string `json:"Name"`
    NextToken *string `json:"NextToken,omitempty"`
    WithDecryption *bool `json:"WithDecryption,omitempty"`
    
}


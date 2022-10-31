package shared



type GetStatementResultResponse struct {
    ColumnMetadata []ColumnMetadata `json:"ColumnMetadata,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    Records [][]Field `json:"Records"`
    TotalNumRows *int64 `json:"TotalNumRows,omitempty"`
    
}


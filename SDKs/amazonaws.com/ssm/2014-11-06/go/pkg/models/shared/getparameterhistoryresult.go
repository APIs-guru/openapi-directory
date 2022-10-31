package shared



type GetParameterHistoryResult struct {
    NextToken *string `json:"NextToken,omitempty"`
    Parameters []ParameterHistory `json:"Parameters,omitempty"`
    
}


package shared



type GetTraceGraphResult struct {
    NextToken *string `json:"NextToken,omitempty"`
    Services []Service `json:"Services,omitempty"`
    
}


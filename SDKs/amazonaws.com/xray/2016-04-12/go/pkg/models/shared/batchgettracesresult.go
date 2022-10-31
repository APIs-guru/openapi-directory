package shared



type BatchGetTracesResult struct {
    NextToken *string `json:"NextToken,omitempty"`
    Traces []Trace `json:"Traces,omitempty"`
    UnprocessedTraceIds []string `json:"UnprocessedTraceIds,omitempty"`
    
}


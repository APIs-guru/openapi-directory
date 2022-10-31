package shared



type GetSamplingStatisticSummariesResult struct {
    NextToken *string `json:"NextToken,omitempty"`
    SamplingStatisticSummaries []SamplingStatisticSummary `json:"SamplingStatisticSummaries,omitempty"`
    
}


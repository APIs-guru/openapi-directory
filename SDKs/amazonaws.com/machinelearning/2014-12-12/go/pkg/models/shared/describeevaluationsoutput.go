package shared



type DescribeEvaluationsOutput struct {
    NextToken *string `json:"NextToken,omitempty"`
    Results []Evaluation `json:"Results,omitempty"`
    
}


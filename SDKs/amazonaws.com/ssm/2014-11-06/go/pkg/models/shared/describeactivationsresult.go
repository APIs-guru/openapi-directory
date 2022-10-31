package shared



type DescribeActivationsResult struct {
    ActivationList []Activation `json:"ActivationList,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}


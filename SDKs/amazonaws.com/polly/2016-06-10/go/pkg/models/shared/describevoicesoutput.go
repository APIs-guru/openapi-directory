package shared



type DescribeVoicesOutput struct {
    NextToken *string `json:"NextToken,omitempty"`
    Voices []Voice `json:"Voices,omitempty"`
    
}


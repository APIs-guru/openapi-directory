package shared



type DescribeAvailablePatchesResult struct {
    NextToken *string `json:"NextToken,omitempty"`
    Patches []Patch `json:"Patches,omitempty"`
    
}


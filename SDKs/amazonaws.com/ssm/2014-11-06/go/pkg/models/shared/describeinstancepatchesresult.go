package shared



type DescribeInstancePatchesResult struct {
    NextToken *string `json:"NextToken,omitempty"`
    Patches []PatchComplianceData `json:"Patches,omitempty"`
    
}


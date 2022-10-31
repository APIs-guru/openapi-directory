package shared



type ListLicenseVersionsResponse struct {
    Licenses []License `json:"Licenses,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}


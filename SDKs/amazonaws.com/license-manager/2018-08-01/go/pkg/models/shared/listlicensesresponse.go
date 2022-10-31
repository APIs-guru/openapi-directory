package shared



type ListLicensesResponse struct {
    Licenses []License `json:"Licenses,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}


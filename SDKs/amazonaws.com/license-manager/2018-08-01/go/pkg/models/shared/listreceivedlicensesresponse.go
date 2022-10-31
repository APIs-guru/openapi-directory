package shared



type ListReceivedLicensesResponse struct {
    Licenses []GrantedLicense `json:"Licenses,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}


package shared



type ListReceivedLicensesRequest struct {
    Filters []Filter `json:"Filters,omitempty"`
    LicenseArns []string `json:"LicenseArns,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}


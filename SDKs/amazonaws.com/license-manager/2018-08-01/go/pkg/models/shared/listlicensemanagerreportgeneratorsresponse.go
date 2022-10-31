package shared



type ListLicenseManagerReportGeneratorsResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    ReportGenerators []ReportGenerator `json:"ReportGenerators,omitempty"`
    
}


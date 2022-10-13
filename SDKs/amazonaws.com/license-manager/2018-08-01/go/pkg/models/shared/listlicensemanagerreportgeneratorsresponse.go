package shared

type ListLicenseManagerReportGeneratorsResponse struct {
	NextToken        *string           `json:"NextToken"`
	ReportGenerators []ReportGenerator `json:"ReportGenerators"`
}

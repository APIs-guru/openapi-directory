package shared



type UpdateLicenseManagerReportGeneratorRequest struct {
    ClientToken string `json:"ClientToken"`
    Description *string `json:"Description,omitempty"`
    LicenseManagerReportGeneratorArn string `json:"LicenseManagerReportGeneratorArn"`
    ReportContext ReportContext `json:"ReportContext"`
    ReportFrequency ReportFrequency `json:"ReportFrequency"`
    ReportGeneratorName string `json:"ReportGeneratorName"`
    Type []ReportTypeEnum `json:"Type"`
    
}


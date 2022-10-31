package shared



type CreateLicenseManagerReportGeneratorRequest struct {
    ClientToken string `json:"ClientToken"`
    Description *string `json:"Description,omitempty"`
    ReportContext ReportContext `json:"ReportContext"`
    ReportFrequency ReportFrequency `json:"ReportFrequency"`
    ReportGeneratorName string `json:"ReportGeneratorName"`
    Tags []Tag `json:"Tags,omitempty"`
    Type []ReportTypeEnum `json:"Type"`
    
}


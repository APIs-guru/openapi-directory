package shared

type CreateLicenseManagerReportGeneratorRequest struct {
	ClientToken         string           `json:"ClientToken"`
	Description         *string          `json:"Description"`
	ReportContext       ReportContext    `json:"ReportContext"`
	ReportFrequency     ReportFrequency  `json:"ReportFrequency"`
	ReportGeneratorName string           `json:"ReportGeneratorName"`
	Tags                []Tag            `json:"Tags"`
	Type                []ReportTypeEnum `json:"Type"`
}

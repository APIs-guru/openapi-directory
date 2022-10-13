package shared

type ReportGenerator struct {
	CreateTime                       *string          `json:"CreateTime"`
	Description                      *string          `json:"Description"`
	LastReportGenerationTime         *string          `json:"LastReportGenerationTime"`
	LastRunFailureReason             *string          `json:"LastRunFailureReason"`
	LastRunStatus                    *string          `json:"LastRunStatus"`
	LicenseManagerReportGeneratorArn *string          `json:"LicenseManagerReportGeneratorArn"`
	ReportContext                    *ReportContext   `json:"ReportContext"`
	ReportCreatorAccount             *string          `json:"ReportCreatorAccount"`
	ReportFrequency                  *ReportFrequency `json:"ReportFrequency"`
	ReportGeneratorName              *string          `json:"ReportGeneratorName"`
	ReportType                       []ReportTypeEnum `json:"ReportType"`
	S3Location                       *S3Location      `json:"S3Location"`
	Tags                             []Tag            `json:"Tags"`
}

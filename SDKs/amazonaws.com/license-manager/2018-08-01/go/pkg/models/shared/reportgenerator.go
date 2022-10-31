package shared



type ReportGenerator struct {
    CreateTime *string `json:"CreateTime,omitempty"`
    Description *string `json:"Description,omitempty"`
    LastReportGenerationTime *string `json:"LastReportGenerationTime,omitempty"`
    LastRunFailureReason *string `json:"LastRunFailureReason,omitempty"`
    LastRunStatus *string `json:"LastRunStatus,omitempty"`
    LicenseManagerReportGeneratorArn *string `json:"LicenseManagerReportGeneratorArn,omitempty"`
    ReportContext *ReportContext `json:"ReportContext,omitempty"`
    ReportCreatorAccount *string `json:"ReportCreatorAccount,omitempty"`
    ReportFrequency *ReportFrequency `json:"ReportFrequency,omitempty"`
    ReportGeneratorName *string `json:"ReportGeneratorName,omitempty"`
    ReportType []ReportTypeEnum `json:"ReportType,omitempty"`
    S3Location *S3Location `json:"S3Location,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    
}


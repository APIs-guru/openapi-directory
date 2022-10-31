package shared



type GoogleCloudApigeeV1SecurityReportQuery struct {
    CsvDelimiter *string `json:"csvDelimiter,omitempty"`
    Dimensions []string `json:"dimensions,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    EnvgroupHostname *string `json:"envgroupHostname,omitempty"`
    Filter *string `json:"filter,omitempty"`
    GroupByTimeUnit *string `json:"groupByTimeUnit,omitempty"`
    Limit *int32 `json:"limit,omitempty"`
    Metrics []GoogleCloudApigeeV1SecurityReportQueryMetric `json:"metrics,omitempty"`
    MimeType *string `json:"mimeType,omitempty"`
    ReportDefinitionID *string `json:"reportDefinitionId,omitempty"`
    TimeRange *interface{} `json:"timeRange,omitempty"`
    
}


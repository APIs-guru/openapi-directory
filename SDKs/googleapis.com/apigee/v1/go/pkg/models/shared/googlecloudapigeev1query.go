package shared



type GoogleCloudApigeeV1Query struct {
    CsvDelimiter *string `json:"csvDelimiter,omitempty"`
    Dimensions []string `json:"dimensions,omitempty"`
    EnvgroupHostname *string `json:"envgroupHostname,omitempty"`
    Filter *string `json:"filter,omitempty"`
    GroupByTimeUnit *string `json:"groupByTimeUnit,omitempty"`
    Limit *int32 `json:"limit,omitempty"`
    Metrics []GoogleCloudApigeeV1QueryMetric `json:"metrics,omitempty"`
    Name *string `json:"name,omitempty"`
    OutputFormat *string `json:"outputFormat,omitempty"`
    ReportDefinitionID *string `json:"reportDefinitionId,omitempty"`
    TimeRange *interface{} `json:"timeRange,omitempty"`
    
}


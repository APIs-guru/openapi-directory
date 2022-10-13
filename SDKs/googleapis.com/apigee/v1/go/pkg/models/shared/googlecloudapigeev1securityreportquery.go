package shared

type GoogleCloudApigeeV1SecurityReportQuery struct {
	CsvDelimiter       *string                                        `json:"csvDelimiter"`
	Dimensions         []string                                       `json:"dimensions"`
	DisplayName        *string                                        `json:"displayName"`
	EnvgroupHostname   *string                                        `json:"envgroupHostname"`
	Filter             *string                                        `json:"filter"`
	GroupByTimeUnit    *string                                        `json:"groupByTimeUnit"`
	Limit              *int32                                         `json:"limit"`
	Metrics            []GoogleCloudApigeeV1SecurityReportQueryMetric `json:"metrics"`
	MimeType           *string                                        `json:"mimeType"`
	ReportDefinitionID *string                                        `json:"reportDefinitionId"`
	TimeRange          *interface{}                                   `json:"timeRange"`
}

package shared

type GoogleCloudApigeeV1Query struct {
	CsvDelimiter       *string                          `json:"csvDelimiter"`
	Dimensions         []string                         `json:"dimensions"`
	EnvgroupHostname   *string                          `json:"envgroupHostname"`
	Filter             *string                          `json:"filter"`
	GroupByTimeUnit    *string                          `json:"groupByTimeUnit"`
	Limit              *int32                           `json:"limit"`
	Metrics            []GoogleCloudApigeeV1QueryMetric `json:"metrics"`
	Name               *string                          `json:"name"`
	OutputFormat       *string                          `json:"outputFormat"`
	ReportDefinitionID *string                          `json:"reportDefinitionId"`
	TimeRange          *interface{}                     `json:"timeRange"`
}

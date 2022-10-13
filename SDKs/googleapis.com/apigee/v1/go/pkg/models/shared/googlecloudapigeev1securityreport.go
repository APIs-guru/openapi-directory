package shared

type GoogleCloudApigeeV1SecurityReport struct {
	Created            *string                                          `json:"created"`
	DisplayName        *string                                          `json:"displayName"`
	EnvgroupHostname   *string                                          `json:"envgroupHostname"`
	Error              *string                                          `json:"error"`
	ExecutionTime      *string                                          `json:"executionTime"`
	QueryParams        *GoogleCloudApigeeV1SecurityReportMetadata       `json:"queryParams"`
	ReportDefinitionID *string                                          `json:"reportDefinitionId"`
	Result             *GoogleCloudApigeeV1SecurityReportResultMetadata `json:"result"`
	ResultFileSize     *string                                          `json:"resultFileSize"`
	ResultRows         *string                                          `json:"resultRows"`
	Self               *string                                          `json:"self"`
	State              *string                                          `json:"state"`
	Updated            *string                                          `json:"updated"`
}

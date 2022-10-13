package shared

type GoogleCloudApigeeV1AsyncQuery struct {
	Created            *string                              `json:"created"`
	EnvgroupHostname   *string                              `json:"envgroupHostname"`
	Error              *string                              `json:"error"`
	ExecutionTime      *string                              `json:"executionTime"`
	Name               *string                              `json:"name"`
	QueryParams        *GoogleCloudApigeeV1QueryMetadata    `json:"queryParams"`
	ReportDefinitionID *string                              `json:"reportDefinitionId"`
	Result             *GoogleCloudApigeeV1AsyncQueryResult `json:"result"`
	ResultFileSize     *string                              `json:"resultFileSize"`
	ResultRows         *string                              `json:"resultRows"`
	Self               *string                              `json:"self"`
	State              *string                              `json:"state"`
	Updated            *string                              `json:"updated"`
}

package shared

type GoogleCloudApigeeV1AsyncQuery struct {
	Created            *string                              `json:"created,omitempty"`
	EnvgroupHostname   *string                              `json:"envgroupHostname,omitempty"`
	Error              *string                              `json:"error,omitempty"`
	ExecutionTime      *string                              `json:"executionTime,omitempty"`
	Name               *string                              `json:"name,omitempty"`
	QueryParams        *GoogleCloudApigeeV1QueryMetadata    `json:"queryParams,omitempty"`
	ReportDefinitionID *string                              `json:"reportDefinitionId,omitempty"`
	Result             *GoogleCloudApigeeV1AsyncQueryResult `json:"result,omitempty"`
	ResultFileSize     *string                              `json:"resultFileSize,omitempty"`
	ResultRows         *string                              `json:"resultRows,omitempty"`
	Self               *string                              `json:"self,omitempty"`
	State              *string                              `json:"state,omitempty"`
	Updated            *string                              `json:"updated,omitempty"`
}

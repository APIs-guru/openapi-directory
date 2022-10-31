package shared



type GoogleCloudApigeeV1SecurityReport struct {
    Created *string `json:"created,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    EnvgroupHostname *string `json:"envgroupHostname,omitempty"`
    Error *string `json:"error,omitempty"`
    ExecutionTime *string `json:"executionTime,omitempty"`
    QueryParams *GoogleCloudApigeeV1SecurityReportMetadata `json:"queryParams,omitempty"`
    ReportDefinitionID *string `json:"reportDefinitionId,omitempty"`
    Result *GoogleCloudApigeeV1SecurityReportResultMetadata `json:"result,omitempty"`
    ResultFileSize *string `json:"resultFileSize,omitempty"`
    ResultRows *string `json:"resultRows,omitempty"`
    Self *string `json:"self,omitempty"`
    State *string `json:"state,omitempty"`
    Updated *string `json:"updated,omitempty"`
    
}


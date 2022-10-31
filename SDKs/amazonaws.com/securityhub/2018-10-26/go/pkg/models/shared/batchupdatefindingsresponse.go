package shared

type BatchUpdateFindingsResponse struct {
	ProcessedFindings   []AwsSecurityFindingIdentifier          `json:"ProcessedFindings"`
	UnprocessedFindings []BatchUpdateFindingsUnprocessedFinding `json:"UnprocessedFindings"`
}

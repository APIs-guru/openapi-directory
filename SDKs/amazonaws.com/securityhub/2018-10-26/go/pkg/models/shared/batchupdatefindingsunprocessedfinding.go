package shared

// BatchUpdateFindingsUnprocessedFinding
// A finding from a <code>BatchUpdateFindings</code> request that Security Hub was unable to update.
type BatchUpdateFindingsUnprocessedFinding struct {
	ErrorCode         string                       `json:"ErrorCode"`
	ErrorMessage      string                       `json:"ErrorMessage"`
	FindingIdentifier AwsSecurityFindingIdentifier `json:"FindingIdentifier"`
}

package shared

type BatchUpdateFindingsUnprocessedFinding struct {
	ErrorCode         string                       `json:"ErrorCode"`
	ErrorMessage      string                       `json:"ErrorMessage"`
	FindingIdentifier AwsSecurityFindingIdentifier `json:"FindingIdentifier"`
}

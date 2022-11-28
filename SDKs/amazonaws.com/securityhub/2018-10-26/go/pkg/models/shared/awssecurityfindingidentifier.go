package shared

// AwsSecurityFindingIdentifier
// Identifies a finding to update using <code>BatchUpdateFindings</code>.
type AwsSecurityFindingIdentifier struct {
	ID         string `json:"Id"`
	ProductArn string `json:"ProductArn"`
}

package shared

// ComplianceDetails
// Information that shows whether a resource is compliant with the effective tag policy, including details on any noncompliant tag keys.
type ComplianceDetails struct {
	ComplianceStatus           *bool    `json:"ComplianceStatus,omitempty"`
	KeysWithNoncompliantValues []string `json:"KeysWithNoncompliantValues,omitempty"`
	NoncompliantKeys           []string `json:"NoncompliantKeys,omitempty"`
}

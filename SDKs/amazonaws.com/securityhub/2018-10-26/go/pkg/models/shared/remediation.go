package shared

// Remediation
// Details about the remediation steps for a finding.
type Remediation struct {
	Recommendation *Recommendation `json:"Recommendation,omitempty"`
}

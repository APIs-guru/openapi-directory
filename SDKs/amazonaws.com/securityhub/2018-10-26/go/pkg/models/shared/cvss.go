package shared

// Cvss
// CVSS scores from the advisory related to the vulnerability.
type Cvss struct {
	Adjustments []Adjustment `json:"Adjustments,omitempty"`
	BaseScore   *float64     `json:"BaseScore,omitempty"`
	BaseVector  *string      `json:"BaseVector,omitempty"`
	Source      *string      `json:"Source,omitempty"`
	Version     *string      `json:"Version,omitempty"`
}

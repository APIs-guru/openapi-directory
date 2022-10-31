package shared

type VulnerableComponent struct {
	Category        *string         `json:"category,omitempty"`
	CvssMax         *float64        `json:"cvss_max,omitempty"`
	Name            *string         `json:"name,omitempty"`
	Version         *string         `json:"version,omitempty"`
	Vulnerabilities []Vulnerability `json:"vulnerabilities,omitempty"`
}

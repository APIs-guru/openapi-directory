package shared

type VulnerableComponent struct {
	Category        *string         `json:"category"`
	CvssMax         *float64        `json:"cvss_max"`
	Name            *string         `json:"name"`
	Version         *string         `json:"version"`
	Vulnerabilities []Vulnerability `json:"vulnerabilities"`
}

package shared

// APIOverview
// Api Overview
type APIOverview struct {
	Dependabot                       []string `json:"dependabot,omitempty"`
	InstalledVersion                 *string  `json:"installed_version,omitempty"`
	Packages                         []string `json:"packages,omitempty"`
	VerifiablePasswordAuthentication bool     `json:"verifiable_password_authentication"`
}

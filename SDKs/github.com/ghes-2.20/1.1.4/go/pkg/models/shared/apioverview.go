package shared

type APIOverview struct {
	Dependabot                       []string `json:"dependabot"`
	InstalledVersion                 *string  `json:"installed_version"`
	Packages                         []string `json:"packages"`
	VerifiablePasswordAuthentication bool     `json:"verifiable_password_authentication"`
}

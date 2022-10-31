package shared

type GetLicenseRequest struct {
	LicenseArn string  `json:"LicenseArn"`
	Version    *string `json:"Version,omitempty"`
}

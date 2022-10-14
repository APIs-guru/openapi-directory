package shared

type CreateLicenseResponse struct {
	LicenseArn *string            `json:"LicenseArn,omitempty"`
	Status     *LicenseStatusEnum `json:"Status,omitempty"`
	Version    *string            `json:"Version,omitempty"`
}

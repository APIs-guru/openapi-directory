package shared

type CreateLicenseVersionResponse struct {
	LicenseArn *string            `json:"LicenseArn"`
	Status     *LicenseStatusEnum `json:"Status"`
	Version    *string            `json:"Version"`
}

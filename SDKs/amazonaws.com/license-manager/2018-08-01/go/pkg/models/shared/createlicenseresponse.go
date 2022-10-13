package shared

type CreateLicenseResponse struct {
	LicenseArn *string            `json:"LicenseArn"`
	Status     *LicenseStatusEnum `json:"Status"`
	Version    *string            `json:"Version"`
}

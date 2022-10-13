package shared

type ExtendLicenseConsumptionRequest struct {
	DryRun                  *bool  `json:"DryRun"`
	LicenseConsumptionToken string `json:"LicenseConsumptionToken"`
}

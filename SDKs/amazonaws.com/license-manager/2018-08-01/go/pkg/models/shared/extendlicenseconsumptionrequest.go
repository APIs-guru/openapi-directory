package shared

type ExtendLicenseConsumptionRequest struct {
	DryRun                  *bool  `json:"DryRun,omitempty"`
	LicenseConsumptionToken string `json:"LicenseConsumptionToken"`
}

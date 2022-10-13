package shared

type ExtendLicenseConsumptionResponse struct {
	Expiration              *string `json:"Expiration"`
	LicenseConsumptionToken *string `json:"LicenseConsumptionToken"`
}

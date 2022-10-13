package shared

type CheckInLicenseRequest struct {
	Beneficiary             *string `json:"Beneficiary"`
	LicenseConsumptionToken string  `json:"LicenseConsumptionToken"`
}

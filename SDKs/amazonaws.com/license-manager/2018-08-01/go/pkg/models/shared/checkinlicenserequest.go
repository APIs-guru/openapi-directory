package shared

type CheckInLicenseRequest struct {
	Beneficiary             *string `json:"Beneficiary,omitempty"`
	LicenseConsumptionToken string  `json:"LicenseConsumptionToken"`
}

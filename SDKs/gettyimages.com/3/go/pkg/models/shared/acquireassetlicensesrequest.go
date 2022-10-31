package shared



type AcquireAssetLicensesRequest struct {
    LicenseTypes []ExtendedLicensesEnum `json:"LicenseTypes"`
    UseTeamCredits *bool `json:"UseTeamCredits,omitempty"`
    
}


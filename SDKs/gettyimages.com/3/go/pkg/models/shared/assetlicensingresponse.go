package shared



type AssetLicensingResponse struct {
    AcquiredLicenses []AssetLicenseNameEnum `json:"AcquiredLicenses,omitempty"`
    CreditsUsed *int32 `json:"CreditsUsed,omitempty"`
    
}


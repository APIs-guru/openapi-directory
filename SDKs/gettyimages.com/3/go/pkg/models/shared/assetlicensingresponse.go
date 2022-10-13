package shared

type AssetLicensingResponse struct {
	AcquiredLicenses []AssetLicenseNameEnum `json:"AcquiredLicenses"`
	CreditsUsed      *int32                 `json:"CreditsUsed"`
}

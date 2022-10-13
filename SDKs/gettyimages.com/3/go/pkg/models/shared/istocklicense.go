package shared

type IStockLicense struct {
	Credits     *int32                `json:"credits"`
	LicenseType *AssetLicenseNameEnum `json:"license_type"`
}

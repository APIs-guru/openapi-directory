package shared



type IStockLicense struct {
    Credits *int32 `json:"credits,omitempty"`
    LicenseType *AssetLicenseNameEnum `json:"license_type,omitempty"`
    
}


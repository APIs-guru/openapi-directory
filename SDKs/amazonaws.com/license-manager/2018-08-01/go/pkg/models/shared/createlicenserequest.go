package shared



type CreateLicenseRequest struct {
    Beneficiary string `json:"Beneficiary"`
    ClientToken string `json:"ClientToken"`
    ConsumptionConfiguration ConsumptionConfiguration `json:"ConsumptionConfiguration"`
    Entitlements []Entitlement `json:"Entitlements"`
    HomeRegion string `json:"HomeRegion"`
    Issuer Issuer `json:"Issuer"`
    LicenseMetadata []Metadata `json:"LicenseMetadata,omitempty"`
    LicenseName string `json:"LicenseName"`
    ProductName string `json:"ProductName"`
    ProductSku string `json:"ProductSKU"`
    Validity DatetimeRange `json:"Validity"`
    
}


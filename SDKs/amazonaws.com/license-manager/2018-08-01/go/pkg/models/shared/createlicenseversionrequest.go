package shared



type CreateLicenseVersionRequest struct {
    ClientToken string `json:"ClientToken"`
    ConsumptionConfiguration ConsumptionConfiguration `json:"ConsumptionConfiguration"`
    Entitlements []Entitlement `json:"Entitlements"`
    HomeRegion string `json:"HomeRegion"`
    Issuer Issuer `json:"Issuer"`
    LicenseArn string `json:"LicenseArn"`
    LicenseMetadata []Metadata `json:"LicenseMetadata,omitempty"`
    LicenseName string `json:"LicenseName"`
    ProductName string `json:"ProductName"`
    SourceVersion *string `json:"SourceVersion,omitempty"`
    Status LicenseStatusEnum `json:"Status"`
    Validity DatetimeRange `json:"Validity"`
    
}


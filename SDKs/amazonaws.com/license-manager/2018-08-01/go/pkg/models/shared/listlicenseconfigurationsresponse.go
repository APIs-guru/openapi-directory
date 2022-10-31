package shared



type ListLicenseConfigurationsResponse struct {
    LicenseConfigurations []LicenseConfiguration `json:"LicenseConfigurations,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}


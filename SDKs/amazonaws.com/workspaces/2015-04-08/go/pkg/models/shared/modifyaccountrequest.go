package shared



type ModifyAccountRequest struct {
    DedicatedTenancyManagementCidrRange *string `json:"DedicatedTenancyManagementCidrRange,omitempty"`
    DedicatedTenancySupport *DedicatedTenancySupportEnumEnum `json:"DedicatedTenancySupport,omitempty"`
    
}


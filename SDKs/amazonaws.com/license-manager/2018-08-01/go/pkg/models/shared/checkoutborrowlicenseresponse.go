package shared



type CheckoutBorrowLicenseResponse struct {
    CheckoutMetadata []Metadata `json:"CheckoutMetadata,omitempty"`
    EntitlementsAllowed []EntitlementData `json:"EntitlementsAllowed,omitempty"`
    Expiration *string `json:"Expiration,omitempty"`
    IssuedAt *string `json:"IssuedAt,omitempty"`
    LicenseArn *string `json:"LicenseArn,omitempty"`
    LicenseConsumptionToken *string `json:"LicenseConsumptionToken,omitempty"`
    NodeID *string `json:"NodeId,omitempty"`
    SignedToken *string `json:"SignedToken,omitempty"`
    
}


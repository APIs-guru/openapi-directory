package shared

type CheckoutLicenseResponse struct {
	CheckoutType            *CheckoutTypeEnum `json:"CheckoutType,omitempty"`
	EntitlementsAllowed     []EntitlementData `json:"EntitlementsAllowed,omitempty"`
	Expiration              *string           `json:"Expiration,omitempty"`
	IssuedAt                *string           `json:"IssuedAt,omitempty"`
	LicenseConsumptionToken *string           `json:"LicenseConsumptionToken,omitempty"`
	NodeID                  *string           `json:"NodeId,omitempty"`
	SignedToken             *string           `json:"SignedToken,omitempty"`
}

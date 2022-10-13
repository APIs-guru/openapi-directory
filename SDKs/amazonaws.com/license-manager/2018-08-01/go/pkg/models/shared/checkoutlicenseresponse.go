package shared

type CheckoutLicenseResponse struct {
	CheckoutType            *CheckoutTypeEnum `json:"CheckoutType"`
	EntitlementsAllowed     []EntitlementData `json:"EntitlementsAllowed"`
	Expiration              *string           `json:"Expiration"`
	IssuedAt                *string           `json:"IssuedAt"`
	LicenseConsumptionToken *string           `json:"LicenseConsumptionToken"`
	NodeID                  *string           `json:"NodeId"`
	SignedToken             *string           `json:"SignedToken"`
}

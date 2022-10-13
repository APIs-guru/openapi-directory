package shared

type CheckoutBorrowLicenseResponse struct {
	CheckoutMetadata        []Metadata        `json:"CheckoutMetadata"`
	EntitlementsAllowed     []EntitlementData `json:"EntitlementsAllowed"`
	Expiration              *string           `json:"Expiration"`
	IssuedAt                *string           `json:"IssuedAt"`
	LicenseArn              *string           `json:"LicenseArn"`
	LicenseConsumptionToken *string           `json:"LicenseConsumptionToken"`
	NodeID                  *string           `json:"NodeId"`
	SignedToken             *string           `json:"SignedToken"`
}

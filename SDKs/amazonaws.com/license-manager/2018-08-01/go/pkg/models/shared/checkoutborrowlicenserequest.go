package shared

type CheckoutBorrowLicenseRequest struct {
	CheckoutMetadata       []Metadata                 `json:"CheckoutMetadata,omitempty"`
	ClientToken            string                     `json:"ClientToken"`
	DigitalSignatureMethod DigitalSignatureMethodEnum `json:"DigitalSignatureMethod"`
	Entitlements           []EntitlementData          `json:"Entitlements"`
	LicenseArn             string                     `json:"LicenseArn"`
	NodeID                 *string                    `json:"NodeId,omitempty"`
}

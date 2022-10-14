package shared

type CheckoutLicenseRequest struct {
	Beneficiary    *string           `json:"Beneficiary,omitempty"`
	CheckoutType   CheckoutTypeEnum  `json:"CheckoutType"`
	ClientToken    string            `json:"ClientToken"`
	Entitlements   []EntitlementData `json:"Entitlements"`
	KeyFingerprint string            `json:"KeyFingerprint"`
	NodeID         *string           `json:"NodeId,omitempty"`
	ProductSku     string            `json:"ProductSKU"`
}

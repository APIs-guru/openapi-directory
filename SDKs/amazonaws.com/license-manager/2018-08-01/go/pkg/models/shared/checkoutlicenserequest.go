package shared

type CheckoutLicenseRequest struct {
	Beneficiary    *string           `json:"Beneficiary"`
	CheckoutType   CheckoutTypeEnum  `json:"CheckoutType"`
	ClientToken    string            `json:"ClientToken"`
	Entitlements   []EntitlementData `json:"Entitlements"`
	KeyFingerprint string            `json:"KeyFingerprint"`
	NodeID         *string           `json:"NodeId"`
	ProductSku     string            `json:"ProductSKU"`
}

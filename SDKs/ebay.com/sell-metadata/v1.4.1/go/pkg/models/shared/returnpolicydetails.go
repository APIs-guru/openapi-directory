package shared

// ReturnPolicyDetails
// This container defines the category policies that relate to domestic and international return policies (the return shipping is made via a domestic or an international shipping service, respectively).
type ReturnPolicyDetails struct {
	PolicyDescriptionEnabled *bool          `json:"policyDescriptionEnabled,omitempty"`
	RefundMethods            []string       `json:"refundMethods,omitempty"`
	ReturnMethods            []string       `json:"returnMethods,omitempty"`
	ReturnPeriods            []TimeDuration `json:"returnPeriods,omitempty"`
	ReturnShippingCostPayers []string       `json:"returnShippingCostPayers,omitempty"`
	ReturnsAcceptanceEnabled *bool          `json:"returnsAcceptanceEnabled,omitempty"`
}

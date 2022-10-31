package shared

type ReturnPolicyDetails struct {
	PolicyDescriptionEnabled *bool          `json:"policyDescriptionEnabled,omitempty"`
	RefundMethods            []string       `json:"refundMethods,omitempty"`
	ReturnMethods            []string       `json:"returnMethods,omitempty"`
	ReturnPeriods            []TimeDuration `json:"returnPeriods,omitempty"`
	ReturnShippingCostPayers []string       `json:"returnShippingCostPayers,omitempty"`
	ReturnsAcceptanceEnabled *bool          `json:"returnsAcceptanceEnabled,omitempty"`
}

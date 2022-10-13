package shared

type ReturnPolicyDetails struct {
	PolicyDescriptionEnabled *bool          `json:"policyDescriptionEnabled"`
	RefundMethods            []string       `json:"refundMethods"`
	ReturnMethods            []string       `json:"returnMethods"`
	ReturnPeriods            []TimeDuration `json:"returnPeriods"`
	ReturnShippingCostPayers []string       `json:"returnShippingCostPayers"`
	ReturnsAcceptanceEnabled *bool          `json:"returnsAcceptanceEnabled"`
}

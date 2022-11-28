package shared

// InternationalReturnOverrideType
// This type defines the fields for a seller's international return policy. If a seller does not populate the fields in this complex type, the international return policy defaults to the return policy set for domestic returns.
type InternationalReturnOverrideType struct {
	ReturnMethod            *string       `json:"returnMethod,omitempty"`
	ReturnPeriod            *TimeDuration `json:"returnPeriod,omitempty"`
	ReturnShippingCostPayer *string       `json:"returnShippingCostPayer,omitempty"`
	ReturnsAccepted         *bool         `json:"returnsAccepted,omitempty"`
}

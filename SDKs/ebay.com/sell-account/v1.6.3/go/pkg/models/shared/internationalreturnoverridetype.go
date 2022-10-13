package shared

type InternationalReturnOverrideType struct {
	ReturnMethod            *string       `json:"returnMethod"`
	ReturnPeriod            *TimeDuration `json:"returnPeriod"`
	ReturnShippingCostPayer *string       `json:"returnShippingCostPayer"`
	ReturnsAccepted         *bool         `json:"returnsAccepted"`
}

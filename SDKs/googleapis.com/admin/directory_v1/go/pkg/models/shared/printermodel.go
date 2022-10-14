package shared

type PrinterModel struct {
	DisplayName  *string `json:"displayName,omitempty"`
	MakeAndModel *string `json:"makeAndModel,omitempty"`
	Manufacturer *string `json:"manufacturer,omitempty"`
}

package shared

type ProductItemAPIModel struct {
	Cost            *float64 `json:"Cost"`
	Description     *string  `json:"Description"`
	ID              *int32   `json:"Id"`
	MinimumQuantity *float64 `json:"MinimumQuantity"`
	ReferenceID     *string  `json:"ReferenceId"`
	SubTotalAmount  *float64 `json:"SubTotalAmount"`
	TaxAmount       *float64 `json:"TaxAmount"`
	TaxID           *int32   `json:"TaxId"`
	TaxPercentage   *float64 `json:"TaxPercentage"`
	TotalAmount     *float64 `json:"TotalAmount"`
	WorkTypeID      *int32   `json:"WorkTypeId"`
}

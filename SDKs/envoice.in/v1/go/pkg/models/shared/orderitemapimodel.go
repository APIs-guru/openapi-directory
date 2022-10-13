package shared

type OrderItemAPIModel struct {
	Cost           *float64 `json:"Cost"`
	Description    *string  `json:"Description"`
	ProductItemID  *int32   `json:"ProductItemId"`
	Quantity       *float64 `json:"Quantity"`
	ReferenceID    *string  `json:"ReferenceId"`
	SubTotalAmount *float64 `json:"SubTotalAmount"`
	TaxAmount      *float64 `json:"TaxAmount"`
	TaxID          *int32   `json:"TaxId"`
	TaxPercentage  *float64 `json:"TaxPercentage"`
	TotalAmount    *float64 `json:"TotalAmount"`
	WorkTypeID     *int32   `json:"WorkTypeId"`
}

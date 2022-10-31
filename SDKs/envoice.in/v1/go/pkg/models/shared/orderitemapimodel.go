package shared

type OrderItemAPIModel struct {
	Cost           *float64 `json:"Cost,omitempty"`
	Description    *string  `json:"Description,omitempty"`
	ProductItemID  *int32   `json:"ProductItemId,omitempty"`
	Quantity       *float64 `json:"Quantity,omitempty"`
	ReferenceID    *string  `json:"ReferenceId,omitempty"`
	SubTotalAmount *float64 `json:"SubTotalAmount,omitempty"`
	TaxAmount      *float64 `json:"TaxAmount,omitempty"`
	TaxID          *int32   `json:"TaxId,omitempty"`
	TaxPercentage  *float64 `json:"TaxPercentage,omitempty"`
	TotalAmount    *float64 `json:"TotalAmount,omitempty"`
	WorkTypeID     *int32   `json:"WorkTypeId,omitempty"`
}

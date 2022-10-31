package shared

type EstimationItemAPIModel struct {
	Cost               *float64 `json:"Cost,omitempty"`
	Description        *string  `json:"Description,omitempty"`
	DiscountAmount     *float64 `json:"DiscountAmount,omitempty"`
	DiscountPercentage *float64 `json:"DiscountPercentage,omitempty"`
	ID                 *int32   `json:"Id,omitempty"`
	Quantity           *float64 `json:"Quantity,omitempty"`
	SubTotalAmount     *float64 `json:"SubTotalAmount,omitempty"`
	TaxAmount          *float64 `json:"TaxAmount,omitempty"`
	TaxID              *int32   `json:"TaxId,omitempty"`
	TaxPercentage      *float64 `json:"TaxPercentage,omitempty"`
	TotalAmount        *float64 `json:"TotalAmount,omitempty"`
	WorkTypeID         *int32   `json:"WorkTypeId,omitempty"`
}

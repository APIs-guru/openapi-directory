package shared

type EstimationCreateItemAPIModel struct {
	Cost               *float64 `json:"Cost,omitempty"`
	Description        *string  `json:"Description,omitempty"`
	DiscountPercentage *float64 `json:"DiscountPercentage,omitempty"`
	Quantity           *float64 `json:"Quantity,omitempty"`
	TaxID              *int32   `json:"TaxId,omitempty"`
	TaxPercentage      *float64 `json:"TaxPercentage,omitempty"`
	WorkTypeID         *int32   `json:"WorkTypeId,omitempty"`
}

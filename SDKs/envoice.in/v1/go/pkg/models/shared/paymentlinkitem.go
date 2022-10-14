package shared

type PaymentLinkItem struct {
	Cost               *float64  `json:"Cost,omitempty"`
	DiscountAmount     *float64  `json:"DiscountAmount,omitempty"`
	DiscountPercentage *float64  `json:"DiscountPercentage,omitempty"`
	ID                 *int32    `json:"Id,omitempty"`
	PaymentLinkID      *int32    `json:"PaymentLinkId,omitempty"`
	Quantity           *float64  `json:"Quantity,omitempty"`
	SubTotalAmount     *float64  `json:"SubTotalAmount,omitempty"`
	Tax                *Tax      `json:"Tax,omitempty"`
	TaxAmount          *float64  `json:"TaxAmount,omitempty"`
	TaxID              *int32    `json:"TaxId,omitempty"`
	TaxPercentage      *float64  `json:"TaxPercentage,omitempty"`
	TotalAmount        *float64  `json:"TotalAmount,omitempty"`
	WorkType           *WorkType `json:"WorkType,omitempty"`
	WorkTypeID         *int32    `json:"WorkTypeId,omitempty"`
}

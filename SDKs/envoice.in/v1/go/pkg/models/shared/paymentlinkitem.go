package shared

type PaymentLinkItem struct {
	Cost               *float64  `json:"Cost"`
	DiscountAmount     *float64  `json:"DiscountAmount"`
	DiscountPercentage *float64  `json:"DiscountPercentage"`
	ID                 *int32    `json:"Id"`
	PaymentLinkID      *int32    `json:"PaymentLinkId"`
	Quantity           *float64  `json:"Quantity"`
	SubTotalAmount     *float64  `json:"SubTotalAmount"`
	Tax                *Tax      `json:"Tax"`
	TaxAmount          *float64  `json:"TaxAmount"`
	TaxID              *int32    `json:"TaxId"`
	TaxPercentage      *float64  `json:"TaxPercentage"`
	TotalAmount        *float64  `json:"TotalAmount"`
	WorkType           *WorkType `json:"WorkType"`
	WorkTypeID         *int32    `json:"WorkTypeId"`
}

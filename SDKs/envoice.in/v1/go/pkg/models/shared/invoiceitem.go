package shared

type InvoiceItem struct {
	Cost               *float64 `json:"Cost"`
	Description        *string  `json:"Description"`
	DiscountAmount     *float64 `json:"DiscountAmount"`
	DiscountPercentage *float64 `json:"DiscountPercentage"`
	ID                 *int32   `json:"Id"`
	InvoiceID          *int32   `json:"InvoiceId"`
	Quantity           *float64 `json:"Quantity"`
	SubTotalAmount     *float64 `json:"SubTotalAmount"`
	TaxAmount          *float64 `json:"TaxAmount"`
	TaxID              *int32   `json:"TaxId"`
	TaxPercentage      *float64 `json:"TaxPercentage"`
	TotalAmount        *float64 `json:"TotalAmount"`
	WorkTypeID         *int32   `json:"WorkTypeId"`
}

package shared

import (
	"time"
)

type SalesInvoiceCreditNoteDto struct {
	AcCode         *string          `json:"acCode"`
	BookTranTypeID *int64           `json:"bookTranTypeId"`
	CustomFields   []AcudfValueDto  `json:"customFields"`
	CustomerID     *int64           `json:"customerId"`
	DeliveryTo     []string         `json:"deliveryTo"`
	Details        *string          `json:"details"`
	EntryDate      *time.Time       `json:"entryDate"`
	ID             *int64           `json:"id"`
	LoType         *string          `json:"loType"`
	NetGoods       *float64         `json:"netGoods"`
	NetServices    *float64         `json:"netServices"`
	Note           *string          `json:"note"`
	OurReference   *string          `json:"ourReference"`
	ProcDate       *time.Time       `json:"procDate"`
	ProductTrans   []ProductTranDto `json:"productTrans"`
	QuoteID        *int64           `json:"quoteId"`
	Reference      *string          `json:"reference"`
	SaleRepCode    *string          `json:"saleRepCode"`
	SaleRepID      *int64           `json:"saleRepId"`
	Timestamp      *string          `json:"timestamp"`
	Total          *float64         `json:"total"`
	TotalNet       *float64         `json:"totalNet"`
	TotalVat       *float64         `json:"totalVAT"`
	Unpaid         *float64         `json:"unpaid"`
	VatTypeID      *int64           `json:"vatTypeId"`
	YourReference  *string          `json:"yourReference"`
}

package shared

import (
	"time"
)

type SalesCreditNoteQueryDto struct {
	AcCode         *string               `json:"acCode,omitempty"`
	BookTranTypeID *int64                `json:"bookTranTypeId,omitempty"`
	CustomFields   []AcudfValueDto       `json:"customFields,omitempty"`
	CustomerID     *int64                `json:"customerId,omitempty"`
	DeliveryTo     []string              `json:"deliveryTo,omitempty"`
	Details        *string               `json:"details,omitempty"`
	EntryDate      *time.Time            `json:"entryDate,omitempty"`
	ID             *int64                `json:"id,omitempty"`
	LoType         *string               `json:"loType,omitempty"`
	NetGoods       *float64              `json:"netGoods,omitempty"`
	NetServices    *float64              `json:"netServices,omitempty"`
	Note           *string               `json:"note,omitempty"`
	OurReference   *string               `json:"ourReference,omitempty"`
	ProcDate       *time.Time            `json:"procDate,omitempty"`
	ProductTrans   []ProductTranQueryDto `json:"productTrans,omitempty"`
	QuoteID        *int64                `json:"quoteId,omitempty"`
	Reference      *string               `json:"reference,omitempty"`
	SaleRepCode    *string               `json:"saleRepCode,omitempty"`
	SaleRepID      *int64                `json:"saleRepId,omitempty"`
	Timestamp      *string               `json:"timestamp,omitempty"`
	Total          *float64              `json:"total,omitempty"`
	TotalNet       *float64              `json:"totalNet,omitempty"`
	TotalVat       *float64              `json:"totalVAT,omitempty"`
	Unpaid         *float64              `json:"unpaid,omitempty"`
	VatTypeID      *int64                `json:"vatTypeId,omitempty"`
	YourReference  *string               `json:"yourReference,omitempty"`
}

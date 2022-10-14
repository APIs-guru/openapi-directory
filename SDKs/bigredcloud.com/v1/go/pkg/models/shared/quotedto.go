package shared

import (
	"time"
)

type QuoteDto struct {
	AcCode            *string                `json:"acCode,omitempty"`
	ClosedDate        *time.Time             `json:"closedDate,omitempty"`
	Comments          *string                `json:"comments,omitempty"`
	CompanyID         *int64                 `json:"companyId,omitempty"`
	CustomFields      []AcudfValueDto        `json:"customFields,omitempty"`
	CustomerOwnerID   *int64                 `json:"customerOwnerId,omitempty"`
	CustomerOwnerName *string                `json:"customerOwnerName,omitempty"`
	DdNumber          *string                `json:"ddNumber,omitempty"`
	DeliveryList      *string                `json:"deliveryList,omitempty"`
	DeliveryTo        []string               `json:"deliveryTo,omitempty"`
	EntryDate         *time.Time             `json:"entryDate,omitempty"`
	ID                *int64                 `json:"id,omitempty"`
	LayoutType        *int32                 `json:"layoutType,omitempty"`
	Note              *string                `json:"note,omitempty"`
	PoNumber          *string                `json:"poNumber,omitempty"`
	ProcDate          *time.Time             `json:"procDate,omitempty"`
	ProductTrans      []QuoteProductTransDto `json:"productTrans,omitempty"`
	Reference         *string                `json:"reference,omitempty"`
	SaleInvoiceID     *int64                 `json:"saleInvoiceId,omitempty"`
	SaleRepCode       *string                `json:"saleRepCode,omitempty"`
	SaleRepID         *int64                 `json:"saleRepId,omitempty"`
	TimeStamp         *string                `json:"timeStamp,omitempty"`
	Total             *float64               `json:"total,omitempty"`
	TotalNet          *float64               `json:"totalNet,omitempty"`
	TotalVat          *float64               `json:"totalVat,omitempty"`
	VatTypeID         *int64                 `json:"vatTypeId,omitempty"`
}

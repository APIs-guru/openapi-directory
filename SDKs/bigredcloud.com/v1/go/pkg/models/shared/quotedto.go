package shared

import (
	"time"
)

type QuoteDto struct {
	AcCode            *string                `json:"acCode"`
	ClosedDate        *time.Time             `json:"closedDate"`
	Comments          *string                `json:"comments"`
	CompanyID         *int64                 `json:"companyId"`
	CustomFields      []AcudfValueDto        `json:"customFields"`
	CustomerOwnerID   *int64                 `json:"customerOwnerId"`
	CustomerOwnerName *string                `json:"customerOwnerName"`
	DdNumber          *string                `json:"ddNumber"`
	DeliveryList      *string                `json:"deliveryList"`
	DeliveryTo        []string               `json:"deliveryTo"`
	EntryDate         *time.Time             `json:"entryDate"`
	ID                *int64                 `json:"id"`
	LayoutType        *int32                 `json:"layoutType"`
	Note              *string                `json:"note"`
	PoNumber          *string                `json:"poNumber"`
	ProcDate          *time.Time             `json:"procDate"`
	ProductTrans      []QuoteProductTransDto `json:"productTrans"`
	Reference         *string                `json:"reference"`
	SaleInvoiceID     *int64                 `json:"saleInvoiceId"`
	SaleRepCode       *string                `json:"saleRepCode"`
	SaleRepID         *int64                 `json:"saleRepId"`
	TimeStamp         *string                `json:"timeStamp"`
	Total             *float64               `json:"total"`
	TotalNet          *float64               `json:"totalNet"`
	TotalVat          *float64               `json:"totalVat"`
	VatTypeID         *int64                 `json:"vatTypeId"`
}

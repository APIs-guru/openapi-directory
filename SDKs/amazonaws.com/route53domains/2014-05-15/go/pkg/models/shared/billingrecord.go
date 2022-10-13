package shared

import (
	"time"
)

type BillingRecord struct {
	BillDate   *time.Time         `json:"BillDate"`
	DomainName *string            `json:"DomainName"`
	InvoiceID  *string            `json:"InvoiceId"`
	Operation  *OperationTypeEnum `json:"Operation"`
	Price      *float64           `json:"Price"`
}

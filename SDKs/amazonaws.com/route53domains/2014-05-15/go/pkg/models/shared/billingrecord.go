package shared

import (
	"time"
)

// BillingRecord
// Information for one billing record.
type BillingRecord struct {
	BillDate   *time.Time         `json:"BillDate,omitempty"`
	DomainName *string            `json:"DomainName,omitempty"`
	InvoiceID  *string            `json:"InvoiceId,omitempty"`
	Operation  *OperationTypeEnum `json:"Operation,omitempty"`
	Price      *float64           `json:"Price,omitempty"`
}

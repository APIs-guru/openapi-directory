package shared

import (
	"time"
)

type CashReceiptQueryDto struct {
	AcCode             *string         `json:"acCode"`
	AcEntries          []AcEntryDto    `json:"acEntries"`
	BookTranTypeID     *int64          `json:"bookTranTypeId"`
	CustomFields       []AcudfValueDto `json:"customFields"`
	CustomerID         *int64          `json:"customerId"`
	DetailCollection   []string        `json:"detailCollection"`
	Discount           *float64        `json:"discount"`
	EntryDate          *time.Time      `json:"entryDate"`
	ID                 *int64          `json:"id"`
	Ledger             *float64        `json:"ledger"`
	Note               *string         `json:"note"`
	PlaidTransactionID *string         `json:"plaidTransactionId"`
	ProcDate           *time.Time      `json:"procDate"`
	Timestamp          *string         `json:"timestamp"`
	Total              *float64        `json:"total"`
	Unallocated        *float64        `json:"unallocated"`
	VatEntries         []VatEntryDto   `json:"vatEntries"`
	VatTypeID          *int64          `json:"vatTypeId"`
}

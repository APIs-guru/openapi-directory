package shared

import (
	"time"
)

type CashPaymentDto struct {
	AcCode             *string         `json:"acCode"`
	AcEntries          []AcEntryDto    `json:"acEntries"`
	BankAccountCode    *string         `json:"bankAccountCode"`
	BankAccountID      *int64          `json:"bankAccountId"`
	BookTranTypeID     *int64          `json:"bookTranTypeId"`
	CustomFields       []AcudfValueDto `json:"customFields"`
	DetailCollection   []string        `json:"detailCollection"`
	Discount           *float64        `json:"discount"`
	EntryDate          *time.Time      `json:"entryDate"`
	ID                 *int64          `json:"id"`
	Ledger             *float64        `json:"ledger"`
	Lodgement          *float64        `json:"lodgement"`
	Note               *string         `json:"note"`
	PlaidTransactionID *string         `json:"plaidTransactionId"`
	ProcDate           *time.Time      `json:"procDate"`
	SupplierID         *int64          `json:"supplierId"`
	Timestamp          *string         `json:"timestamp"`
	Total              *float64        `json:"total"`
}

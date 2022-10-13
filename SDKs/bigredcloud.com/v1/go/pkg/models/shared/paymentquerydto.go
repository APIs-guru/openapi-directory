package shared

import (
	"time"
)

type PaymentQueryDto struct {
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
	Note               *string         `json:"note"`
	PlaidTransactionID *string         `json:"plaidTransactionId"`
	ProcDate           *time.Time      `json:"procDate"`
	Reference          *string         `json:"reference"`
	SupplierID         *int64          `json:"supplierId"`
	Timestamp          *string         `json:"timestamp"`
	Total              *float64        `json:"total"`
	TransferBankCode   *string         `json:"transferBankCode"`
	TransferBankID     *int64          `json:"transferBankId"`
	Unallocated        *float64        `json:"unallocated"`
}

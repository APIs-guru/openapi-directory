package shared

import (
"time")

type CashPaymentQueryDto struct {
    AcCode *string `json:"acCode,omitempty"`
    AcEntries []AcEntryDto `json:"acEntries,omitempty"`
    BankAccountCode *string `json:"bankAccountCode,omitempty"`
    BankAccountID *int64 `json:"bankAccountId,omitempty"`
    BookTranTypeID *int64 `json:"bookTranTypeId,omitempty"`
    CustomFields []AcudfValueDto `json:"customFields,omitempty"`
    DetailCollection []string `json:"detailCollection,omitempty"`
    Discount *float64 `json:"discount,omitempty"`
    EntryDate *time.Time `json:"entryDate,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Ledger *float64 `json:"ledger,omitempty"`
    Lodgement *float64 `json:"lodgement,omitempty"`
    Note *string `json:"note,omitempty"`
    PlaidTransactionID *string `json:"plaidTransactionId,omitempty"`
    ProcDate *time.Time `json:"procDate,omitempty"`
    SupplierID *int64 `json:"supplierId,omitempty"`
    Timestamp *string `json:"timestamp,omitempty"`
    Total *float64 `json:"total,omitempty"`
    Unallocated *float64 `json:"unallocated,omitempty"`
    
}


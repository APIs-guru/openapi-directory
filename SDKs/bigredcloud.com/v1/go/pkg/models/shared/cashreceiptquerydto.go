package shared

import (
"time")

type CashReceiptQueryDto struct {
    AcCode *string `json:"acCode,omitempty"`
    AcEntries []AcEntryDto `json:"acEntries,omitempty"`
    BookTranTypeID *int64 `json:"bookTranTypeId,omitempty"`
    CustomFields []AcudfValueDto `json:"customFields,omitempty"`
    CustomerID *int64 `json:"customerId,omitempty"`
    DetailCollection []string `json:"detailCollection,omitempty"`
    Discount *float64 `json:"discount,omitempty"`
    EntryDate *time.Time `json:"entryDate,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Ledger *float64 `json:"ledger,omitempty"`
    Note *string `json:"note,omitempty"`
    PlaidTransactionID *string `json:"plaidTransactionId,omitempty"`
    ProcDate *time.Time `json:"procDate,omitempty"`
    Timestamp *string `json:"timestamp,omitempty"`
    Total *float64 `json:"total,omitempty"`
    Unallocated *float64 `json:"unallocated,omitempty"`
    VatEntries []VatEntryDto `json:"vatEntries,omitempty"`
    VatTypeID *int64 `json:"vatTypeId,omitempty"`
    
}


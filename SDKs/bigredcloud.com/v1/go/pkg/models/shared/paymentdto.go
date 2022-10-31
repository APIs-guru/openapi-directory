package shared

import (
"time")

type PaymentDto struct {
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
    Note *string `json:"note,omitempty"`
    PlaidTransactionID *string `json:"plaidTransactionId,omitempty"`
    ProcDate *time.Time `json:"procDate,omitempty"`
    Reference *string `json:"reference,omitempty"`
    SupplierID *int64 `json:"supplierId,omitempty"`
    Timestamp *string `json:"timestamp,omitempty"`
    Total *float64 `json:"total,omitempty"`
    TransferBankCode *string `json:"transferBankCode,omitempty"`
    TransferBankID *int64 `json:"transferBankId,omitempty"`
    Unallocated *float64 `json:"unallocated,omitempty"`
    
}


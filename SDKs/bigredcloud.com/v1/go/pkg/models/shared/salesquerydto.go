package shared

import (
"time")

type SalesQueryDto struct {
    AcCode *string `json:"acCode,omitempty"`
    AcEntries []AcEntryDto `json:"acEntries,omitempty"`
    BookTranTypeID *int64 `json:"bookTranTypeId,omitempty"`
    CustomFields []AcudfValueDto `json:"customFields,omitempty"`
    CustomerID *int64 `json:"customerId,omitempty"`
    Details *string `json:"details,omitempty"`
    EntryDate *time.Time `json:"entryDate,omitempty"`
    ID *int64 `json:"id,omitempty"`
    LoType *string `json:"loType,omitempty"`
    Note *string `json:"note,omitempty"`
    ProcDate *time.Time `json:"procDate,omitempty"`
    Reference *string `json:"reference,omitempty"`
    Timestamp *string `json:"timestamp,omitempty"`
    Total *float64 `json:"total,omitempty"`
    TotalNet *float64 `json:"totalNet,omitempty"`
    TotalVat *float64 `json:"totalVAT,omitempty"`
    Unpaid *float64 `json:"unpaid,omitempty"`
    VatEntries []VatEntryDto `json:"vatEntries,omitempty"`
    VatTypeID *int64 `json:"vatTypeId,omitempty"`
    
}


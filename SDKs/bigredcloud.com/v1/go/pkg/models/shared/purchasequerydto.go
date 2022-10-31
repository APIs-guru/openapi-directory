package shared

import (
"time")

type PurchaseQueryDto struct {
    AcCode *string `json:"acCode,omitempty"`
    AcEntries []AcEntryDto `json:"acEntries,omitempty"`
    BookTranTypeID *int64 `json:"bookTranTypeId,omitempty"`
    CustomFields []AcudfValueDto `json:"customFields,omitempty"`
    DetailCollection []string `json:"detailCollection,omitempty"`
    EntryDate *time.Time `json:"entryDate,omitempty"`
    ID *int64 `json:"id,omitempty"`
    NetGoods *float64 `json:"netGoods,omitempty"`
    NetServices *float64 `json:"netServices,omitempty"`
    Note *string `json:"note,omitempty"`
    PostponedAccounting *bool `json:"postponedAccounting,omitempty"`
    ProcDate *time.Time `json:"procDate,omitempty"`
    Reference *string `json:"reference,omitempty"`
    SupplierID *int64 `json:"supplierId,omitempty"`
    Timestamp *string `json:"timestamp,omitempty"`
    Total *float64 `json:"total,omitempty"`
    TotalNet *float64 `json:"totalNet,omitempty"`
    TotalVat *float64 `json:"totalVAT,omitempty"`
    Unallocated *float64 `json:"unallocated,omitempty"`
    Unpaid *float64 `json:"unpaid,omitempty"`
    VatEntries []VatEntryDto `json:"vatEntries,omitempty"`
    VatTypeID *int64 `json:"vatTypeId,omitempty"`
    
}


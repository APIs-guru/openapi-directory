package shared

import (
	"time"
)

type PurchaseDto struct {
	AcCode              *string         `json:"acCode"`
	AcEntries           []AcEntryDto    `json:"acEntries"`
	BookTranTypeID      *int64          `json:"bookTranTypeId"`
	CustomFields        []AcudfValueDto `json:"customFields"`
	DetailCollection    []string        `json:"detailCollection"`
	EntryDate           *time.Time      `json:"entryDate"`
	ID                  *int64          `json:"id"`
	NetGoods            *float64        `json:"netGoods"`
	NetServices         *float64        `json:"netServices"`
	Note                *string         `json:"note"`
	PostponedAccounting *bool           `json:"postponedAccounting"`
	ProcDate            *time.Time      `json:"procDate"`
	Reference           *string         `json:"reference"`
	SupplierID          *int64          `json:"supplierId"`
	Timestamp           *string         `json:"timestamp"`
	Total               *float64        `json:"total"`
	TotalNet            *float64        `json:"totalNet"`
	TotalVat            *float64        `json:"totalVAT"`
	Unallocated         *float64        `json:"unallocated"`
	Unpaid              *float64        `json:"unpaid"`
	VatEntries          []VatEntryDto   `json:"vatEntries"`
	VatTypeID           *int64          `json:"vatTypeId"`
}

package shared

import (
	"time"
)

type SalesEntryDto struct {
	AcCode         *string         `json:"acCode"`
	AcEntries      []AcEntryDto    `json:"acEntries"`
	BookTranTypeID *int64          `json:"bookTranTypeId"`
	CustomFields   []AcudfValueDto `json:"customFields"`
	CustomerID     *int64          `json:"customerId"`
	Details        *string         `json:"details"`
	EntryDate      *time.Time      `json:"entryDate"`
	ID             *int64          `json:"id"`
	NetGoods       *float64        `json:"netGoods"`
	NetServices    *float64        `json:"netServices"`
	Note           *string         `json:"note"`
	ProcDate       *time.Time      `json:"procDate"`
	Reference      *string         `json:"reference"`
	Timestamp      *string         `json:"timestamp"`
	Total          *float64        `json:"total"`
	TotalNet       *float64        `json:"totalNet"`
	TotalVat       *float64        `json:"totalVAT"`
	Unpaid         *float64        `json:"unpaid"`
	VatEntries     []VatEntryDto   `json:"vatEntries"`
	VatTypeID      *int64          `json:"vatTypeId"`
}

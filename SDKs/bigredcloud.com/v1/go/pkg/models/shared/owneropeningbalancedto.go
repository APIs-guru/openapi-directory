package shared

import (
	"time"
)

type OwnerOpeningBalanceDto struct {
	EntryDate  *time.Time                       `json:"entryDate"`
	ID         *int64                           `json:"id"`
	IsChanged  *bool                            `json:"isChanged"`
	ProcDate   *time.Time                       `json:"procDate"`
	Reference  *string                          `json:"reference"`
	Timestamp  *string                          `json:"timestamp"`
	Total      *float64                         `json:"total"`
	TotalVat   *float64                         `json:"totalVAT"`
	Unpaid     *float64                         `json:"unpaid"`
	VatEntries []OwnerOpeningBalanceVatEntryDto `json:"vatEntries"`
}

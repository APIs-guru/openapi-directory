package shared

import (
	"time"
)

type OwnerOpeningBalanceDto struct {
	EntryDate  *time.Time                       `json:"entryDate,omitempty"`
	ID         *int64                           `json:"id,omitempty"`
	IsChanged  *bool                            `json:"isChanged,omitempty"`
	ProcDate   *time.Time                       `json:"procDate,omitempty"`
	Reference  *string                          `json:"reference,omitempty"`
	Timestamp  *string                          `json:"timestamp,omitempty"`
	Total      *float64                         `json:"total,omitempty"`
	TotalVat   *float64                         `json:"totalVAT,omitempty"`
	Unpaid     *float64                         `json:"unpaid,omitempty"`
	VatEntries []OwnerOpeningBalanceVatEntryDto `json:"vatEntries,omitempty"`
}

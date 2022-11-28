package shared

import (
	"time"
)

// SubStatementData
// Information about an SQL statement.
type SubStatementData struct {
	CreatedAt       *time.Time                 `json:"CreatedAt,omitempty"`
	Duration        *int64                     `json:"Duration,omitempty"`
	Error           *string                    `json:"Error,omitempty"`
	HasResultSet    *bool                      `json:"HasResultSet,omitempty"`
	ID              string                     `json:"Id"`
	QueryString     *string                    `json:"QueryString,omitempty"`
	RedshiftQueryID *int64                     `json:"RedshiftQueryId,omitempty"`
	ResultRows      *int64                     `json:"ResultRows,omitempty"`
	ResultSize      *int64                     `json:"ResultSize,omitempty"`
	Status          *StatementStatusStringEnum `json:"Status,omitempty"`
	UpdatedAt       *time.Time                 `json:"UpdatedAt,omitempty"`
}

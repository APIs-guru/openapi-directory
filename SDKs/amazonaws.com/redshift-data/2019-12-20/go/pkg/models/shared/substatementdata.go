package shared

import (
	"time"
)

type SubStatementData struct {
	CreatedAt       *time.Time                 `json:"CreatedAt"`
	Duration        *int64                     `json:"Duration"`
	Error           *string                    `json:"Error"`
	HasResultSet    *bool                      `json:"HasResultSet"`
	ID              string                     `json:"Id"`
	QueryString     *string                    `json:"QueryString"`
	RedshiftQueryID *int64                     `json:"RedshiftQueryId"`
	ResultRows      *int64                     `json:"ResultRows"`
	ResultSize      *int64                     `json:"ResultSize"`
	Status          *StatementStatusStringEnum `json:"Status"`
	UpdatedAt       *time.Time                 `json:"UpdatedAt"`
}

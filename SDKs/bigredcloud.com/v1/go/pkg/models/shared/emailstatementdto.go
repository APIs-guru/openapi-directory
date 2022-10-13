package shared

import (
	"time"
)

type EmailStatementDto struct {
	BccAddresses   []string   `json:"bccAddresses"`
	CustomerID     *int64     `json:"customerId"`
	FromPeriod     *time.Time `json:"fromPeriod"`
	MessageBody    *string    `json:"messageBody"`
	MinimumBalance *float64   `json:"minimumBalance"`
	ToAddress      *string    `json:"toAddress"`
	ToPeriod       *time.Time `json:"toPeriod"`
}

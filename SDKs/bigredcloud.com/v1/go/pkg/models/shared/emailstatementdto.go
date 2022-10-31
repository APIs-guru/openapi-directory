package shared

import (
"time")

type EmailStatementDto struct {
    BccAddresses []string `json:"bccAddresses,omitempty"`
    CustomerID *int64 `json:"customerId,omitempty"`
    FromPeriod *time.Time `json:"fromPeriod,omitempty"`
    MessageBody *string `json:"messageBody,omitempty"`
    MinimumBalance *float64 `json:"minimumBalance,omitempty"`
    ToAddress *string `json:"toAddress,omitempty"`
    ToPeriod *time.Time `json:"toPeriod,omitempty"`
    
}


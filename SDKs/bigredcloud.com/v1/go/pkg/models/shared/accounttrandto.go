package shared

import (
	"time"
)

type AccountTranDto struct {
	BookTranID               *int64     `json:"bookTranId"`
	BookTranTypeID           *int64     `json:"bookTranTypeId"`
	BookTransactionReference *string    `json:"bookTransactionReference"`
	BookTypeDesc             *string    `json:"bookTypeDesc"`
	Credit                   *float64   `json:"credit"`
	Debit                    *float64   `json:"debit"`
	ID                       *int64     `json:"id"`
	ProcDate                 *time.Time `json:"procDate"`
}

package shared

import (
"time")

type AccountTranDto struct {
    BookTranID *int64 `json:"bookTranId,omitempty"`
    BookTranTypeID *int64 `json:"bookTranTypeId,omitempty"`
    BookTransactionReference *string `json:"bookTransactionReference,omitempty"`
    BookTypeDesc *string `json:"bookTypeDesc,omitempty"`
    Credit *float64 `json:"credit,omitempty"`
    Debit *float64 `json:"debit,omitempty"`
    ID *int64 `json:"id,omitempty"`
    ProcDate *time.Time `json:"procDate,omitempty"`
    
}


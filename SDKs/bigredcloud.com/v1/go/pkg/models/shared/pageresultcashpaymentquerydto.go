package shared



type PageResultCashPaymentQueryDto struct {
    Count *int64 `json:"Count,omitempty"`
    Items []CashPaymentQueryDto `json:"Items,omitempty"`
    NextPageLink *string `json:"NextPageLink,omitempty"`
    
}


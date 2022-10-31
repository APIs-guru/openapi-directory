package shared



type ListBonusPaymentsResponse struct {
    BonusPayments []BonusPayment `json:"BonusPayments,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    NumResults *int64 `json:"NumResults,omitempty"`
    
}


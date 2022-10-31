package shared



type PaymentSummary struct {
    Payments []Payment `json:"payments,omitempty"`
    Refunds []OrderRefund `json:"refunds,omitempty"`
    TotalDueSeller *Amount `json:"totalDueSeller,omitempty"`
    
}


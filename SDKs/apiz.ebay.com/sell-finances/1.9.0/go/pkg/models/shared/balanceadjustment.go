package shared



type BalanceAdjustment struct {
    AdjustmentAmount *Amount `json:"adjustmentAmount,omitempty"`
    AdjustmentType *string `json:"adjustmentType,omitempty"`
    
}


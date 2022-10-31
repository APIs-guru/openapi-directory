package shared



type TransferDetail struct {
    BalanceAdjustment *BalanceAdjustment `json:"balanceAdjustment,omitempty"`
    Charges []Charge `json:"charges,omitempty"`
    TotalChargeNetAmount *Amount `json:"totalChargeNetAmount,omitempty"`
    
}


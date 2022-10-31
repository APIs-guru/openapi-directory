package shared



type SellerFundsSummaryResponse struct {
    AvailableFunds *Amount `json:"availableFunds,omitempty"`
    FundsOnHold *Amount `json:"fundsOnHold,omitempty"`
    ProcessingFunds *Amount `json:"processingFunds,omitempty"`
    TotalFunds *Amount `json:"totalFunds,omitempty"`
    
}


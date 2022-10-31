package shared



type SummaryReportResponse struct {
    BaseSale *Amount `json:"baseSale,omitempty"`
    LastUpdated *string `json:"lastUpdated,omitempty"`
    PercentageSalesLift *string `json:"percentageSalesLift,omitempty"`
    PromotionSale *Amount `json:"promotionSale,omitempty"`
    TotalSale *Amount `json:"totalSale,omitempty"`
    
}


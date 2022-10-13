package shared

type SummaryReportResponse struct {
	BaseSale            *Amount `json:"baseSale"`
	LastUpdated         *string `json:"lastUpdated"`
	PercentageSalesLift *string `json:"percentageSalesLift"`
	PromotionSale       *Amount `json:"promotionSale"`
	TotalSale           *Amount `json:"totalSale"`
}

package shared

// SummaryReportResponse
// This type defines the fields in an Promotions Manager Summary report. Reports are formatted in JSON. For more details, see Reading item promotion Summary reports.
type SummaryReportResponse struct {
	BaseSale            *Amount `json:"baseSale,omitempty"`
	LastUpdated         *string `json:"lastUpdated,omitempty"`
	PercentageSalesLift *string `json:"percentageSalesLift,omitempty"`
	PromotionSale       *Amount `json:"promotionSale,omitempty"`
	TotalSale           *Amount `json:"totalSale,omitempty"`
}

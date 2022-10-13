package shared

type PromotionsReportPagedCollection struct {
	Href             *string                 `json:"href"`
	Limit            *int32                  `json:"limit"`
	Next             *string                 `json:"next"`
	Offset           *int32                  `json:"offset"`
	Prev             *string                 `json:"prev"`
	PromotionReports []PromotionReportDetail `json:"promotionReports"`
	Total            *int32                  `json:"total"`
}

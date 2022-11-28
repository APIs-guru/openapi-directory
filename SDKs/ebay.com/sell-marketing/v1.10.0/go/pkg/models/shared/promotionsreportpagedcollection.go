package shared

// PromotionsReportPagedCollection
// This type defines the fields in a paginated result set of promotion-level reports. The response consists of 0 or more sequenced pages that are returned from the complete result set, where each page consists of 0 or more items.
type PromotionsReportPagedCollection struct {
	Href             *string                 `json:"href,omitempty"`
	Limit            *int32                  `json:"limit,omitempty"`
	Next             *string                 `json:"next,omitempty"`
	Offset           *int32                  `json:"offset,omitempty"`
	Prev             *string                 `json:"prev,omitempty"`
	PromotionReports []PromotionReportDetail `json:"promotionReports,omitempty"`
	Total            *int32                  `json:"total,omitempty"`
}

package shared

// PromotionsPagedCollection
// This type defines the fields in a paginated result set of seller promotions. The response consists of 0 or more sequenced pages that are returned from the complete result set, where each page consists of 0 or more items.
type PromotionsPagedCollection struct {
	Href       *string           `json:"href,omitempty"`
	Limit      *int32            `json:"limit,omitempty"`
	Next       *string           `json:"next,omitempty"`
	Offset     *int32            `json:"offset,omitempty"`
	Prev       *string           `json:"prev,omitempty"`
	Promotions []PromotionDetail `json:"promotions,omitempty"`
	Total      *int32            `json:"total,omitempty"`
}

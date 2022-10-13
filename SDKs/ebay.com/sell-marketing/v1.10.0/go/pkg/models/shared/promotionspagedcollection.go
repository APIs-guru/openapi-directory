package shared

type PromotionsPagedCollection struct {
	Href       *string           `json:"href"`
	Limit      *int32            `json:"limit"`
	Next       *string           `json:"next"`
	Offset     *int32            `json:"offset"`
	Prev       *string           `json:"prev"`
	Promotions []PromotionDetail `json:"promotions"`
	Total      *int32            `json:"total"`
}

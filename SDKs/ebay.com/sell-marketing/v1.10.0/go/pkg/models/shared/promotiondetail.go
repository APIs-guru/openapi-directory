package shared

type PromotionDetail struct {
	CouponCode        *string `json:"couponCode"`
	Description       *string `json:"description"`
	EndDate           *string `json:"endDate"`
	MarketplaceID     *string `json:"marketplaceId"`
	Name              *string `json:"name"`
	Priority          *string `json:"priority"`
	PromotionHref     *string `json:"promotionHref"`
	PromotionID       *string `json:"promotionId"`
	PromotionImageURL *string `json:"promotionImageUrl"`
	PromotionStatus   *string `json:"promotionStatus"`
	PromotionType     *string `json:"promotionType"`
	StartDate         *string `json:"startDate"`
}

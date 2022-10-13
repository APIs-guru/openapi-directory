package shared

type AppliedPromotion struct {
	Description    *string `json:"description"`
	DiscountAmount *Amount `json:"discountAmount"`
	PromotionID    *string `json:"promotionId"`
}

package shared

type AppliedPromotion struct {
	Description    *string `json:"description,omitempty"`
	DiscountAmount *Amount `json:"discountAmount,omitempty"`
	PromotionID    *string `json:"promotionId,omitempty"`
}

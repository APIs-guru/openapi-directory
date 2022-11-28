package shared

// AppliedPromotion
// This type contains information about a sales promotion that is applied to a line item.
type AppliedPromotion struct {
	Description    *string `json:"description,omitempty"`
	DiscountAmount *Amount `json:"discountAmount,omitempty"`
	PromotionID    *string `json:"promotionId,omitempty"`
}

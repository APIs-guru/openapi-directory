package shared

type ItemPromotion struct {
	ApplyDiscountToSingleItemOnly *bool                `json:"applyDiscountToSingleItemOnly,omitempty"`
	Budget                        *Amount              `json:"budget,omitempty"`
	CouponConfiguration           *CouponConfiguration `json:"couponConfiguration,omitempty"`
	Description                   *string              `json:"description,omitempty"`
	DiscountRules                 []DiscountRule       `json:"discountRules,omitempty"`
	EndDate                       *string              `json:"endDate,omitempty"`
	InventoryCriterion            *InventoryCriterion  `json:"inventoryCriterion,omitempty"`
	MarketplaceID                 *string              `json:"marketplaceId,omitempty"`
	Name                          *string              `json:"name,omitempty"`
	Priority                      *string              `json:"priority,omitempty"`
	PromotionImageURL             *string              `json:"promotionImageUrl,omitempty"`
	PromotionStatus               *string              `json:"promotionStatus,omitempty"`
	PromotionType                 *string              `json:"promotionType,omitempty"`
	StartDate                     *string              `json:"startDate,omitempty"`
}

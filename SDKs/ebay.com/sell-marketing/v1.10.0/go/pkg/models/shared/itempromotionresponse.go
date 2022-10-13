package shared

type ItemPromotionResponse struct {
	ApplyDiscountToSingleItemOnly *bool                `json:"applyDiscountToSingleItemOnly"`
	Budget                        *Amount              `json:"budget"`
	CouponConfiguration           *CouponConfiguration `json:"couponConfiguration"`
	Description                   *string              `json:"description"`
	DiscountRules                 []DiscountRule       `json:"discountRules"`
	EndDate                       *string              `json:"endDate"`
	InventoryCriterion            *InventoryCriterion  `json:"inventoryCriterion"`
	MarketplaceID                 *string              `json:"marketplaceId"`
	Name                          *string              `json:"name"`
	Priority                      *string              `json:"priority"`
	PromotionID                   *string              `json:"promotionId"`
	PromotionImageURL             *string              `json:"promotionImageUrl"`
	PromotionStatus               *string              `json:"promotionStatus"`
	PromotionType                 *string              `json:"promotionType"`
	StartDate                     *string              `json:"startDate"`
}

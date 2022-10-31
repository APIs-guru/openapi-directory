package shared



type PromotionDetail struct {
    CouponCode *string `json:"couponCode,omitempty"`
    Description *string `json:"description,omitempty"`
    EndDate *string `json:"endDate,omitempty"`
    MarketplaceID *string `json:"marketplaceId,omitempty"`
    Name *string `json:"name,omitempty"`
    Priority *string `json:"priority,omitempty"`
    PromotionHref *string `json:"promotionHref,omitempty"`
    PromotionID *string `json:"promotionId,omitempty"`
    PromotionImageURL *string `json:"promotionImageUrl,omitempty"`
    PromotionStatus *string `json:"promotionStatus,omitempty"`
    PromotionType *string `json:"promotionType,omitempty"`
    StartDate *string `json:"startDate,omitempty"`
    
}


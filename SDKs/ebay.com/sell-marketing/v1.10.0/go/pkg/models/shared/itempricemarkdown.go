package shared



type ItemPriceMarkdown struct {
    ApplyFreeShipping *bool `json:"applyFreeShipping,omitempty"`
    AutoSelectFutureInventory *bool `json:"autoSelectFutureInventory,omitempty"`
    BlockPriceIncreaseInItemRevision *bool `json:"blockPriceIncreaseInItemRevision,omitempty"`
    Description *string `json:"description,omitempty"`
    EndDate *string `json:"endDate,omitempty"`
    MarketplaceID *string `json:"marketplaceId,omitempty"`
    Name *string `json:"name,omitempty"`
    Priority *string `json:"priority,omitempty"`
    PromotionImageURL *string `json:"promotionImageUrl,omitempty"`
    PromotionStatus *string `json:"promotionStatus,omitempty"`
    SelectedInventoryDiscounts []SelectedInventoryDiscount `json:"selectedInventoryDiscounts,omitempty"`
    StartDate *string `json:"startDate,omitempty"`
    
}


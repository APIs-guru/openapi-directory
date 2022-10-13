package shared

type ItemPriceMarkdown struct {
	ApplyFreeShipping                *bool                       `json:"applyFreeShipping"`
	AutoSelectFutureInventory        *bool                       `json:"autoSelectFutureInventory"`
	BlockPriceIncreaseInItemRevision *bool                       `json:"blockPriceIncreaseInItemRevision"`
	Description                      *string                     `json:"description"`
	EndDate                          *string                     `json:"endDate"`
	MarketplaceID                    *string                     `json:"marketplaceId"`
	Name                             *string                     `json:"name"`
	Priority                         *string                     `json:"priority"`
	PromotionImageURL                *string                     `json:"promotionImageUrl"`
	PromotionStatus                  *string                     `json:"promotionStatus"`
	SelectedInventoryDiscounts       []SelectedInventoryDiscount `json:"selectedInventoryDiscounts"`
	StartDate                        *string                     `json:"startDate"`
}

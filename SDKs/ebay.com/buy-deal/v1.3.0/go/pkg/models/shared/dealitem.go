package shared



type DealItem struct {
    AdditionalImages []Image `json:"additionalImages,omitempty"`
    CategoryAncestorIds []string `json:"categoryAncestorIds,omitempty"`
    CategoryID *string `json:"categoryId,omitempty"`
    Commissionable *bool `json:"commissionable,omitempty"`
    DealAffiliateWebURL *string `json:"dealAffiliateWebUrl,omitempty"`
    DealEndDate *string `json:"dealEndDate,omitempty"`
    DealStartDate *string `json:"dealStartDate,omitempty"`
    DealWebURL *string `json:"dealWebUrl,omitempty"`
    EnergyEfficiencyClass *string `json:"energyEfficiencyClass,omitempty"`
    Image *Image `json:"image,omitempty"`
    ItemAffiliateWebURL *string `json:"itemAffiliateWebUrl,omitempty"`
    ItemGroupID *string `json:"itemGroupId,omitempty"`
    ItemGroupType *string `json:"itemGroupType,omitempty"`
    ItemID *string `json:"itemId,omitempty"`
    ItemWebURL *string `json:"itemWebUrl,omitempty"`
    LegacyItemID *string `json:"legacyItemId,omitempty"`
    MarketingPrice *MarketingPrice `json:"marketingPrice,omitempty"`
    Price *Amount `json:"price,omitempty"`
    QualifiedPrograms []string `json:"qualifiedPrograms,omitempty"`
    ShippingOptions []ShippingOption `json:"shippingOptions,omitempty"`
    Title *string `json:"title,omitempty"`
    UnitPrice *Amount `json:"unitPrice,omitempty"`
    UnitPricingMeasure *string `json:"unitPricingMeasure,omitempty"`
    
}


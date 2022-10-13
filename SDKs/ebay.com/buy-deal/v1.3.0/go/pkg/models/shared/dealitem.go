package shared

type DealItem struct {
	AdditionalImages      []Image          `json:"additionalImages"`
	CategoryAncestorIds   []string         `json:"categoryAncestorIds"`
	CategoryID            *string          `json:"categoryId"`
	Commissionable        *bool            `json:"commissionable"`
	DealAffiliateWebURL   *string          `json:"dealAffiliateWebUrl"`
	DealEndDate           *string          `json:"dealEndDate"`
	DealStartDate         *string          `json:"dealStartDate"`
	DealWebURL            *string          `json:"dealWebUrl"`
	EnergyEfficiencyClass *string          `json:"energyEfficiencyClass"`
	Image                 *Image           `json:"image"`
	ItemAffiliateWebURL   *string          `json:"itemAffiliateWebUrl"`
	ItemGroupID           *string          `json:"itemGroupId"`
	ItemGroupType         *string          `json:"itemGroupType"`
	ItemID                *string          `json:"itemId"`
	ItemWebURL            *string          `json:"itemWebUrl"`
	LegacyItemID          *string          `json:"legacyItemId"`
	MarketingPrice        *MarketingPrice  `json:"marketingPrice"`
	Price                 *Amount          `json:"price"`
	QualifiedPrograms     []string         `json:"qualifiedPrograms"`
	ShippingOptions       []ShippingOption `json:"shippingOptions"`
	Title                 *string          `json:"title"`
	UnitPrice             *Amount          `json:"unitPrice"`
	UnitPricingMeasure    *string          `json:"unitPricingMeasure"`
}

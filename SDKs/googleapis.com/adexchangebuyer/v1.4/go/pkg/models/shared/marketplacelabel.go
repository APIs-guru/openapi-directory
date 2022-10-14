package shared

type MarketplaceLabel struct {
	AccountID                      *string               `json:"accountId,omitempty"`
	CreateTimeMs                   *string               `json:"createTimeMs,omitempty"`
	DeprecatedMarketplaceDealParty *MarketplaceDealParty `json:"deprecatedMarketplaceDealParty,omitempty"`
	Label                          *string               `json:"label,omitempty"`
}

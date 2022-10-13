package shared

type MarketplaceLabel struct {
	AccountID                      *string               `json:"accountId"`
	CreateTimeMs                   *string               `json:"createTimeMs"`
	DeprecatedMarketplaceDealParty *MarketplaceDealParty `json:"deprecatedMarketplaceDealParty"`
	Label                          *string               `json:"label"`
}

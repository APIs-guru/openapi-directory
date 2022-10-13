package shared

type MarketplacePurchaseMarketplacePendingChange struct {
	EffectiveDate *string                 `json:"effective_date"`
	ID            *int64                  `json:"id"`
	IsInstalled   *bool                   `json:"is_installed"`
	Plan          *MarketplaceListingPlan `json:"plan"`
	UnitCount     *int64                  `json:"unit_count"`
}

type MarketplacePurchaseMarketplacePurchase struct {
	BillingCycle    *string                 `json:"billing_cycle"`
	FreeTrialEndsOn *string                 `json:"free_trial_ends_on"`
	IsInstalled     *bool                   `json:"is_installed"`
	NextBillingDate *string                 `json:"next_billing_date"`
	OnFreeTrial     *bool                   `json:"on_free_trial"`
	Plan            *MarketplaceListingPlan `json:"plan"`
	UnitCount       *int64                  `json:"unit_count"`
	UpdatedAt       *string                 `json:"updated_at"`
}

type MarketplacePurchase struct {
	ID                       int64                                        `json:"id"`
	Login                    string                                       `json:"login"`
	MarketplacePendingChange *MarketplacePurchaseMarketplacePendingChange `json:"marketplace_pending_change"`
	MarketplacePurchase      MarketplacePurchaseMarketplacePurchase       `json:"marketplace_purchase"`
	OrganizationBillingEmail *string                                      `json:"organization_billing_email"`
	Type                     string                                       `json:"type"`
	URL                      string                                       `json:"url"`
}

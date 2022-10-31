package shared



type MarketplacePurchaseMarketplacePendingChange struct {
    EffectiveDate *string `json:"effective_date,omitempty"`
    ID *int64 `json:"id,omitempty"`
    IsInstalled *bool `json:"is_installed,omitempty"`
    Plan *MarketplaceListingPlan `json:"plan,omitempty"`
    UnitCount *int64 `json:"unit_count,omitempty"`
    
}

type MarketplacePurchaseMarketplacePurchase struct {
    BillingCycle *string `json:"billing_cycle,omitempty"`
    FreeTrialEndsOn *string `json:"free_trial_ends_on,omitempty"`
    IsInstalled *bool `json:"is_installed,omitempty"`
    NextBillingDate *string `json:"next_billing_date,omitempty"`
    OnFreeTrial *bool `json:"on_free_trial,omitempty"`
    Plan *MarketplaceListingPlan `json:"plan,omitempty"`
    UnitCount *int64 `json:"unit_count,omitempty"`
    UpdatedAt *string `json:"updated_at,omitempty"`
    
}

type MarketplacePurchase struct {
    ID int64 `json:"id"`
    Login string `json:"login"`
    MarketplacePendingChange *MarketplacePurchaseMarketplacePendingChange `json:"marketplace_pending_change,omitempty"`
    MarketplacePurchase MarketplacePurchaseMarketplacePurchase `json:"marketplace_purchase"`
    OrganizationBillingEmail *string `json:"organization_billing_email,omitempty"`
    Type string `json:"type"`
    URL string `json:"url"`
    
}


package shared

import (
	"time"
)

type UserMarketplacePurchase struct {
	Account         MarketplaceAccount     `json:"account"`
	BillingCycle    string                 `json:"billing_cycle"`
	FreeTrialEndsOn time.Time              `json:"free_trial_ends_on"`
	NextBillingDate time.Time              `json:"next_billing_date"`
	OnFreeTrial     bool                   `json:"on_free_trial"`
	Plan            MarketplaceListingPlan `json:"plan"`
	UnitCount       int64                  `json:"unit_count"`
	UpdatedAt       time.Time              `json:"updated_at"`
}

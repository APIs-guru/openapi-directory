package shared

// Subscription
// A single subscription for an app.
type Subscription struct {
	Archived                 *bool                                 `json:"archived,omitempty"`
	BasePlans                []BasePlan                            `json:"basePlans,omitempty"`
	Listings                 []SubscriptionListing                 `json:"listings,omitempty"`
	PackageName              *string                               `json:"packageName,omitempty"`
	ProductID                *string                               `json:"productId,omitempty"`
	TaxAndComplianceSettings *SubscriptionTaxAndComplianceSettings `json:"taxAndComplianceSettings,omitempty"`
}

// SubscriptionInput
// A single subscription for an app.
type SubscriptionInput struct {
	BasePlans                []BasePlanInput                       `json:"basePlans,omitempty"`
	Listings                 []SubscriptionListing                 `json:"listings,omitempty"`
	PackageName              *string                               `json:"packageName,omitempty"`
	ProductID                *string                               `json:"productId,omitempty"`
	TaxAndComplianceSettings *SubscriptionTaxAndComplianceSettings `json:"taxAndComplianceSettings,omitempty"`
}

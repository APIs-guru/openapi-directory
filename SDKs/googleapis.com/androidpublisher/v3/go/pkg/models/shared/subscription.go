package shared

type Subscription struct {
	Archived                 *bool                                 `json:"archived"`
	BasePlans                []BasePlan                            `json:"basePlans"`
	Listings                 []SubscriptionListing                 `json:"listings"`
	PackageName              *string                               `json:"packageName"`
	ProductID                *string                               `json:"productId"`
	TaxAndComplianceSettings *SubscriptionTaxAndComplianceSettings `json:"taxAndComplianceSettings"`
}

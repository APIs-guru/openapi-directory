package shared

// SubscriptionOfferTargeting
// Defines the rule a user needs to satisfy to receive this offer.
type SubscriptionOfferTargeting struct {
	AcquisitionRule *AcquisitionTargetingRule `json:"acquisitionRule,omitempty"`
	UpgradeRule     *UpgradeTargetingRule     `json:"upgradeRule,omitempty"`
}

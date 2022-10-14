package shared

type SubscriptionOfferTargeting struct {
	AcquisitionRule *AcquisitionTargetingRule `json:"acquisitionRule,omitempty"`
	UpgradeRule     *UpgradeTargetingRule     `json:"upgradeRule,omitempty"`
}

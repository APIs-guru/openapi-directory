package shared

type SubscriptionOfferTargeting struct {
	AcquisitionRule *AcquisitionTargetingRule `json:"acquisitionRule"`
	UpgradeRule     *UpgradeTargetingRule     `json:"upgradeRule"`
}

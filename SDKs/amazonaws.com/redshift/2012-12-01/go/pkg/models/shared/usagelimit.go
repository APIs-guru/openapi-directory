package shared

// UsageLimit
// Describes a usage limit object for a cluster.
type UsageLimit struct {
	Amount            *int64
	BreachAction      *UsageLimitBreachActionEnum
	ClusterIdentifier *string
	FeatureType       *UsageLimitFeatureTypeEnum
	LimitType         *UsageLimitLimitTypeEnum
	Period            *UsageLimitPeriodEnum
	Tags              []Tag
	UsageLimitID      *string
}

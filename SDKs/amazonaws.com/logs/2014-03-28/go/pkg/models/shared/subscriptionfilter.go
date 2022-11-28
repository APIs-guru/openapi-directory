package shared

// SubscriptionFilter
// Represents a subscription filter.
type SubscriptionFilter struct {
	CreationTime   *int64            `json:"creationTime,omitempty"`
	DestinationArn *string           `json:"destinationArn,omitempty"`
	Distribution   *DistributionEnum `json:"distribution,omitempty"`
	FilterName     *string           `json:"filterName,omitempty"`
	FilterPattern  *string           `json:"filterPattern,omitempty"`
	LogGroupName   *string           `json:"logGroupName,omitempty"`
	RoleArn        *string           `json:"roleArn,omitempty"`
}

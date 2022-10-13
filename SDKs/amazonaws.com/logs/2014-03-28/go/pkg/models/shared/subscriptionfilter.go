package shared

type SubscriptionFilter struct {
	CreationTime   *int64            `json:"creationTime"`
	DestinationArn *string           `json:"destinationArn"`
	Distribution   *DistributionEnum `json:"distribution"`
	FilterName     *string           `json:"filterName"`
	FilterPattern  *string           `json:"filterPattern"`
	LogGroupName   *string           `json:"logGroupName"`
	RoleArn        *string           `json:"roleArn"`
}

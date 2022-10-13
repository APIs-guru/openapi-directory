package shared

type PutSubscriptionFilterRequest struct {
	DestinationArn string            `json:"destinationArn"`
	Distribution   *DistributionEnum `json:"distribution"`
	FilterName     string            `json:"filterName"`
	FilterPattern  string            `json:"filterPattern"`
	LogGroupName   string            `json:"logGroupName"`
	RoleArn        *string           `json:"roleArn"`
}

package shared

type Destination struct {
	AccessPolicy    *string `json:"accessPolicy"`
	Arn             *string `json:"arn"`
	CreationTime    *int64  `json:"creationTime"`
	DestinationName *string `json:"destinationName"`
	RoleArn         *string `json:"roleArn"`
	TargetArn       *string `json:"targetArn"`
}

package shared

type ResolverQueryLogConfig struct {
	Arn              *string                           `json:"Arn"`
	AssociationCount *int64                            `json:"AssociationCount"`
	CreationTime     *string                           `json:"CreationTime"`
	CreatorRequestID *string                           `json:"CreatorRequestId"`
	DestinationArn   *string                           `json:"DestinationArn"`
	ID               *string                           `json:"Id"`
	Name             *string                           `json:"Name"`
	OwnerID          *string                           `json:"OwnerId"`
	ShareStatus      *ShareStatusEnum                  `json:"ShareStatus"`
	Status           *ResolverQueryLogConfigStatusEnum `json:"Status"`
}

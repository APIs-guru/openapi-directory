package shared

type ResolverQueryLogConfig struct {
	Arn              *string                           `json:"Arn,omitempty"`
	AssociationCount *int64                            `json:"AssociationCount,omitempty"`
	CreationTime     *string                           `json:"CreationTime,omitempty"`
	CreatorRequestID *string                           `json:"CreatorRequestId,omitempty"`
	DestinationArn   *string                           `json:"DestinationArn,omitempty"`
	ID               *string                           `json:"Id,omitempty"`
	Name             *string                           `json:"Name,omitempty"`
	OwnerID          *string                           `json:"OwnerId,omitempty"`
	ShareStatus      *ShareStatusEnum                  `json:"ShareStatus,omitempty"`
	Status           *ResolverQueryLogConfigStatusEnum `json:"Status,omitempty"`
}

package shared

type FirewallRuleGroupMetadata struct {
	Arn              *string          `json:"Arn"`
	CreatorRequestID *string          `json:"CreatorRequestId"`
	ID               *string          `json:"Id"`
	Name             *string          `json:"Name"`
	OwnerID          *string          `json:"OwnerId"`
	ShareStatus      *ShareStatusEnum `json:"ShareStatus"`
}

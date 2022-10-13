package shared

type FirewallRuleGroup struct {
	Arn              *string                      `json:"Arn"`
	CreationTime     *string                      `json:"CreationTime"`
	CreatorRequestID *string                      `json:"CreatorRequestId"`
	ID               *string                      `json:"Id"`
	ModificationTime *string                      `json:"ModificationTime"`
	Name             *string                      `json:"Name"`
	OwnerID          *string                      `json:"OwnerId"`
	RuleCount        *int64                       `json:"RuleCount"`
	ShareStatus      *ShareStatusEnum             `json:"ShareStatus"`
	Status           *FirewallRuleGroupStatusEnum `json:"Status"`
	StatusMessage    *string                      `json:"StatusMessage"`
}

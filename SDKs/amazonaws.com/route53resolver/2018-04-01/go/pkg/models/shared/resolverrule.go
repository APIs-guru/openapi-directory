package shared

type ResolverRule struct {
	Arn                *string                 `json:"Arn"`
	CreationTime       *string                 `json:"CreationTime"`
	CreatorRequestID   *string                 `json:"CreatorRequestId"`
	DomainName         *string                 `json:"DomainName"`
	ID                 *string                 `json:"Id"`
	ModificationTime   *string                 `json:"ModificationTime"`
	Name               *string                 `json:"Name"`
	OwnerID            *string                 `json:"OwnerId"`
	ResolverEndpointID *string                 `json:"ResolverEndpointId"`
	RuleType           *RuleTypeOptionEnum     `json:"RuleType"`
	ShareStatus        *ShareStatusEnum        `json:"ShareStatus"`
	Status             *ResolverRuleStatusEnum `json:"Status"`
	StatusMessage      *string                 `json:"StatusMessage"`
	TargetIps          []TargetAddress         `json:"TargetIps"`
}

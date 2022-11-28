package shared

// PolicyTargetSummary
// Contains information about a root, OU, or account that a policy is attached to.
type PolicyTargetSummary struct {
	Arn      *string         `json:"Arn,omitempty"`
	Name     *string         `json:"Name,omitempty"`
	TargetID *string         `json:"TargetId,omitempty"`
	Type     *TargetTypeEnum `json:"Type,omitempty"`
}

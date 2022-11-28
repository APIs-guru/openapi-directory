package shared

// Summary
// A count of noncompliant resources.
type Summary struct {
	LastUpdated           *string           `json:"LastUpdated,omitempty"`
	NonCompliantResources *int64            `json:"NonCompliantResources,omitempty"`
	Region                *string           `json:"Region,omitempty"`
	ResourceType          *string           `json:"ResourceType,omitempty"`
	TargetID              *string           `json:"TargetId,omitempty"`
	TargetIDType          *TargetIDTypeEnum `json:"TargetIdType,omitempty"`
}

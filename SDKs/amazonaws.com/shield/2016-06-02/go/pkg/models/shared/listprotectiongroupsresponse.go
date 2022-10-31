package shared

type ListProtectionGroupsResponse struct {
	NextToken        *string           `json:"NextToken,omitempty"`
	ProtectionGroups []ProtectionGroup `json:"ProtectionGroups"`
}

package shared

type ListProtectionGroupsResponse struct {
	NextToken        *string           `json:"NextToken"`
	ProtectionGroups []ProtectionGroup `json:"ProtectionGroups"`
}

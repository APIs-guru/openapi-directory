package shared

type SecurityGroupMembership struct {
	SecurityGroupID *string `json:"SecurityGroupId,omitempty"`
	Status          *string `json:"Status,omitempty"`
}

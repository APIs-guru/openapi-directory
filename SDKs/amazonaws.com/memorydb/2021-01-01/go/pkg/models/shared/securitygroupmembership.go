package shared

// SecurityGroupMembership
// Represents a single security group and its status.
type SecurityGroupMembership struct {
	SecurityGroupID *string `json:"SecurityGroupId,omitempty"`
	Status          *string `json:"Status,omitempty"`
}

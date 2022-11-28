package shared

// SecurityGroupIdentifier
// Information about the device's security group.
type SecurityGroupIdentifier struct {
	GroupID   *string `json:"groupId,omitempty"`
	GroupName *string `json:"groupName,omitempty"`
}

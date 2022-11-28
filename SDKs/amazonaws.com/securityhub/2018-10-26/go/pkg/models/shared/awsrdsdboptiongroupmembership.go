package shared

// AwsRdsDbOptionGroupMembership
// An option group membership.
type AwsRdsDbOptionGroupMembership struct {
	OptionGroupName *string `json:"OptionGroupName,omitempty"`
	Status          *string `json:"Status,omitempty"`
}

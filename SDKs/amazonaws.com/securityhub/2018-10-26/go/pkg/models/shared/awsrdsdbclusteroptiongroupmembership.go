package shared

// AwsRdsDbClusterOptionGroupMembership
// Information about an option group membership for a DB cluster.
type AwsRdsDbClusterOptionGroupMembership struct {
	DbClusterOptionGroupName *string `json:"DbClusterOptionGroupName,omitempty"`
	Status                   *string `json:"Status,omitempty"`
}

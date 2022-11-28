package shared

// ACL
// An Access Control List. You can authenticate users with Access Contol Lists. ACLs enable you to control cluster access by grouping users. These Access control lists are designed as a way to organize access to clusters.
type ACL struct {
	Arn                  *string            `json:"ARN,omitempty"`
	Clusters             []string           `json:"Clusters,omitempty"`
	MinimumEngineVersion *string            `json:"MinimumEngineVersion,omitempty"`
	Name                 *string            `json:"Name,omitempty"`
	PendingChanges       *ACLPendingChanges `json:"PendingChanges,omitempty"`
	Status               *string            `json:"Status,omitempty"`
	UserNames            []string           `json:"UserNames,omitempty"`
}

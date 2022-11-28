package shared

// ACLPendingChanges
// Returns the updates being applied to the ACL.
type ACLPendingChanges struct {
	UserNamesToAdd    []string `json:"UserNamesToAdd,omitempty"`
	UserNamesToRemove []string `json:"UserNamesToRemove,omitempty"`
}

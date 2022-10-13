package shared

type ACLPendingChanges struct {
	UserNamesToAdd    []string `json:"UserNamesToAdd"`
	UserNamesToRemove []string `json:"UserNamesToRemove"`
}

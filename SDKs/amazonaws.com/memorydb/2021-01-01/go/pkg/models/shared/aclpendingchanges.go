package shared



type ACLPendingChanges struct {
    UserNamesToAdd []string `json:"UserNamesToAdd,omitempty"`
    UserNamesToRemove []string `json:"UserNamesToRemove,omitempty"`
    
}


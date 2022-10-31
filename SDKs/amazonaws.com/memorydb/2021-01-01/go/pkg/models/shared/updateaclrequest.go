package shared

type UpdateACLRequest struct {
	ACLName           string   `json:"ACLName"`
	UserNamesToAdd    []string `json:"UserNamesToAdd,omitempty"`
	UserNamesToRemove []string `json:"UserNamesToRemove,omitempty"`
}

package shared

type UpdateACLRequest struct {
	ACLName           string   `json:"ACLName"`
	UserNamesToAdd    []string `json:"UserNamesToAdd"`
	UserNamesToRemove []string `json:"UserNamesToRemove"`
}

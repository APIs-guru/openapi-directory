package shared

type CreateACLRequest struct {
	ACLName   string   `json:"ACLName"`
	Tags      []Tag    `json:"Tags"`
	UserNames []string `json:"UserNames"`
}

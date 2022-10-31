package shared



type CreateACLRequest struct {
    ACLName string `json:"ACLName"`
    Tags []Tag `json:"Tags,omitempty"`
    UserNames []string `json:"UserNames,omitempty"`
    
}


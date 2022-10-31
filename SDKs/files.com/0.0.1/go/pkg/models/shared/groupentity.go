package shared



type GroupEntity struct {
    AdminIds *string `json:"admin_ids,omitempty"`
    ID *int32 `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    Notes *string `json:"notes,omitempty"`
    UserIds []int32 `json:"user_ids,omitempty"`
    Usernames []string `json:"usernames,omitempty"`
    
}


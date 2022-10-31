package shared



type GroupUserEntity struct {
    Admin *bool `json:"admin,omitempty"`
    GroupID *int32 `json:"group_id,omitempty"`
    GroupName *string `json:"group_name,omitempty"`
    UserID *int32 `json:"user_id,omitempty"`
    Usernames []string `json:"usernames,omitempty"`
    
}


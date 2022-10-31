package shared



type GroupUser struct {
    DisplayName string `json:"displayName"`
    Email string `json:"email"`
    ID int64 `json:"id"`
    IsMember bool `json:"isMember"`
    Login string `json:"login"`
    UserInfo UserInfo `json:"userInfo"`
    
}


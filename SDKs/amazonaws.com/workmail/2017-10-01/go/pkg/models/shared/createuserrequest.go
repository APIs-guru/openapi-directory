package shared



type CreateUserRequest struct {
    DisplayName string `json:"DisplayName"`
    Name string `json:"Name"`
    OrganizationID string `json:"OrganizationId"`
    Password string `json:"Password"`
    
}


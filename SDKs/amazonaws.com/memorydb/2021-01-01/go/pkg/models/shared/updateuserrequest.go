package shared



type UpdateUserRequest struct {
    AccessString *string `json:"AccessString,omitempty"`
    AuthenticationMode *AuthenticationMode `json:"AuthenticationMode,omitempty"`
    UserName string `json:"UserName"`
    
}


package shared

type UpdateUserRequest struct {
	AccessString       *string             `json:"AccessString"`
	AuthenticationMode *AuthenticationMode `json:"AuthenticationMode"`
	UserName           string              `json:"UserName"`
}

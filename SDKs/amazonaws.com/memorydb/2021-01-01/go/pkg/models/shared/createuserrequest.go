package shared

type CreateUserRequest struct {
	AccessString       string             `json:"AccessString"`
	AuthenticationMode AuthenticationMode `json:"AuthenticationMode"`
	Tags               []Tag              `json:"Tags,omitempty"`
	UserName           string             `json:"UserName"`
}

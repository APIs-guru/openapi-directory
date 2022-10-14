package shared

type CreateUserResponse struct {
	Email *string `json:"email,omitempty"`
	GUID  *string `json:"guid,omitempty"`
}

package shared

// CreateUserResponse
// The object that's returned when a user record is created.
type CreateUserResponse struct {
	Email *string `json:"email,omitempty"`
	GUID  *string `json:"guid,omitempty"`
}

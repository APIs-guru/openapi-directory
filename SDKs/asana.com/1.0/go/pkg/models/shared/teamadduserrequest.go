package shared

// TeamAddUserRequest
// A user identification object for specification with the addUser/removeUser endpoints.
type TeamAddUserRequest struct {
	User *string `json:"user,omitempty"`
}

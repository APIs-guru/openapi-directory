package shared

// TeamRemoveUserRequest
// A user identification object for specification with the addUser/removeUser endpoints.
type TeamRemoveUserRequest struct {
	User *string `json:"user,omitempty"`
}

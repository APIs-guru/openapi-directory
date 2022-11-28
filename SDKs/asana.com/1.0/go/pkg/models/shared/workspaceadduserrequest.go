package shared

// WorkspaceAddUserRequest
// A user identification object for specification with the addUser/removeUser endpoints.
type WorkspaceAddUserRequest struct {
	User *string `json:"user,omitempty"`
}

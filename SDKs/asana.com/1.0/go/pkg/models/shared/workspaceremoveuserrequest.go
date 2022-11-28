package shared

// WorkspaceRemoveUserRequest
// A user identification object for specification with the addUser/removeUser endpoints.
type WorkspaceRemoveUserRequest struct {
	User *string `json:"user,omitempty"`
}

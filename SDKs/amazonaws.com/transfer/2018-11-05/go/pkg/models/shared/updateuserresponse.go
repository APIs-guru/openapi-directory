package shared

// UpdateUserResponse
//
//	<code>UpdateUserResponse</code> returns the user name and identifier for the request to update a user's properties.
type UpdateUserResponse struct {
	ServerID string `json:"ServerId"`
	UserName string `json:"UserName"`
}

package shared

// ListUsersResponse
// A response containing one or more users with access to an account.
type ListUsersResponse struct {
	NextPageToken *string `json:"nextPageToken,omitempty"`
	Users         []User  `json:"users,omitempty"`
}

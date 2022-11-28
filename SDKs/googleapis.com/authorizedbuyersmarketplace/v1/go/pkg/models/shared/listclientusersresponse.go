package shared

// ListClientUsersResponse
// Response message for the list method.
type ListClientUsersResponse struct {
	ClientUsers   []ClientUser `json:"clientUsers,omitempty"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
}

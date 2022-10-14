package shared

type ListClientUsersResponse struct {
	NextPageToken *string      `json:"nextPageToken,omitempty"`
	Users         []ClientUser `json:"users,omitempty"`
}

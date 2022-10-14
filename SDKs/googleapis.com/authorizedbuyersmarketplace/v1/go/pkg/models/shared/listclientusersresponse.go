package shared

type ListClientUsersResponse struct {
	ClientUsers   []ClientUser `json:"clientUsers,omitempty"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
}

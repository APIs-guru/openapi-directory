package shared

type ListClientUsersResponse struct {
	ClientUsers   []ClientUser `json:"clientUsers"`
	NextPageToken *string      `json:"nextPageToken"`
}

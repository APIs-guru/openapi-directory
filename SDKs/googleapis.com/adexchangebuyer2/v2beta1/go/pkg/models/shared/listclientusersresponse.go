package shared

type ListClientUsersResponse struct {
	NextPageToken *string      `json:"nextPageToken"`
	Users         []ClientUser `json:"users"`
}

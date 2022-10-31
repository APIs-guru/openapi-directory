package shared

type ListUsersResponse struct {
	NextPageToken *string `json:"nextPageToken,omitempty"`
	Users         []User  `json:"users,omitempty"`
}

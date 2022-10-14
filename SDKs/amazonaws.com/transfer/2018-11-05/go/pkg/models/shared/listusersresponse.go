package shared

type ListUsersResponse struct {
	NextToken *string      `json:"NextToken,omitempty"`
	ServerID  string       `json:"ServerId"`
	Users     []ListedUser `json:"Users"`
}

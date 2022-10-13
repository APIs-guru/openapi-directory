package shared

type ListUsersResponse struct {
	NextToken *string      `json:"NextToken"`
	ServerID  string       `json:"ServerId"`
	Users     []ListedUser `json:"Users"`
}

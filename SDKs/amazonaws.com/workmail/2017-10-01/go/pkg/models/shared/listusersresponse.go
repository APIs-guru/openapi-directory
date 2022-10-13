package shared

type ListUsersResponse struct {
	NextToken *string `json:"NextToken"`
	Users     []User  `json:"Users"`
}

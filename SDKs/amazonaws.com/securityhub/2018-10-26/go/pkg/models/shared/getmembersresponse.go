package shared

type GetMembersResponse struct {
	Members             []Member `json:"Members"`
	UnprocessedAccounts []Result `json:"UnprocessedAccounts"`
}

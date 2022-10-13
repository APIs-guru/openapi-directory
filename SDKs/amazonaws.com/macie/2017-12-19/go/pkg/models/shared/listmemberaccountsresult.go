package shared

type ListMemberAccountsResult struct {
	MemberAccounts []MemberAccount `json:"memberAccounts"`
	NextToken      *string         `json:"nextToken"`
}

package shared

type ListMemberAccountsResult struct {
	MemberAccounts []MemberAccount `json:"memberAccounts,omitempty"`
	NextToken      *string         `json:"nextToken,omitempty"`
}

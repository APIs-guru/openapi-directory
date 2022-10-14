package shared

type InviteMembersResponse struct {
	UnprocessedAccounts []Result `json:"UnprocessedAccounts,omitempty"`
}

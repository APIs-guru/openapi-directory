package shared

type CreateInvitationsResponse struct {
	UnprocessedAccounts []UnprocessedAccount `json:"unprocessedAccounts,omitempty"`
}

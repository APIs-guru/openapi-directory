package shared

type DeleteInvitationsResponse struct {
	UnprocessedAccounts []UnprocessedAccount `json:"unprocessedAccounts,omitempty"`
}

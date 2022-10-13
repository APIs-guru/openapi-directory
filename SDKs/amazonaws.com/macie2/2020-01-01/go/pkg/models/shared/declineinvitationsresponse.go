package shared

type DeclineInvitationsResponse struct {
	UnprocessedAccounts []UnprocessedAccount `json:"unprocessedAccounts"`
}

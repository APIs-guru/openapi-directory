package shared

type DeclineInvitationsResponse struct {
	UnprocessedAccounts []Result `json:"UnprocessedAccounts,omitempty"`
}

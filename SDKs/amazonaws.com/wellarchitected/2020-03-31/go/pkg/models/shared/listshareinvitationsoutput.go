package shared

type ListShareInvitationsOutput struct {
	NextToken                *string                  `json:"NextToken"`
	ShareInvitationSummaries []ShareInvitationSummary `json:"ShareInvitationSummaries"`
}

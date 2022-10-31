package shared



type ListShareInvitationsOutput struct {
    NextToken *string `json:"NextToken,omitempty"`
    ShareInvitationSummaries []ShareInvitationSummary `json:"ShareInvitationSummaries,omitempty"`
    
}


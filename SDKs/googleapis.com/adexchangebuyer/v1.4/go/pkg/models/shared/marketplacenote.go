package shared

type MarketplaceNote struct {
	CreatorRole            *string `json:"creatorRole,omitempty"`
	DealID                 *string `json:"dealId,omitempty"`
	Kind                   *string `json:"kind,omitempty"`
	Note                   *string `json:"note,omitempty"`
	NoteID                 *string `json:"noteId,omitempty"`
	ProposalID             *string `json:"proposalId,omitempty"`
	ProposalRevisionNumber *string `json:"proposalRevisionNumber,omitempty"`
	TimestampMs            *string `json:"timestampMs,omitempty"`
}

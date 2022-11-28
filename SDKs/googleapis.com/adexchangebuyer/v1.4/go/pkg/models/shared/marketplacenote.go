package shared

// MarketplaceNote
// A proposal is associated with a bunch of notes which may optionally be associated with a deal and/or revision number.
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

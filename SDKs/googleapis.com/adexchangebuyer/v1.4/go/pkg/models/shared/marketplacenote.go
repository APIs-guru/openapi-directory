package shared

type MarketplaceNote struct {
	CreatorRole            *string `json:"creatorRole"`
	DealID                 *string `json:"dealId"`
	Kind                   *string `json:"kind"`
	Note                   *string `json:"note"`
	NoteID                 *string `json:"noteId"`
	ProposalID             *string `json:"proposalId"`
	ProposalRevisionNumber *string `json:"proposalRevisionNumber"`
	TimestampMs            *string `json:"timestampMs"`
}

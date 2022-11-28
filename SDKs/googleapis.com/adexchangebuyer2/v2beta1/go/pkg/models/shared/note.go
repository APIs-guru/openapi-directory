package shared

type NoteCreatorRoleEnum string

const (
	NoteCreatorRoleEnumBuyerSellerRoleUnspecified NoteCreatorRoleEnum = "BUYER_SELLER_ROLE_UNSPECIFIED"
	NoteCreatorRoleEnumBuyer                      NoteCreatorRoleEnum = "BUYER"
	NoteCreatorRoleEnumSeller                     NoteCreatorRoleEnum = "SELLER"
)

// NoteInput
// A proposal may be associated to several notes.
type NoteInput struct {
	Note *string `json:"note,omitempty"`
}

// Note
// A proposal may be associated to several notes.
type Note struct {
	CreateTime       *string              `json:"createTime,omitempty"`
	CreatorRole      *NoteCreatorRoleEnum `json:"creatorRole,omitempty"`
	Note             *string              `json:"note,omitempty"`
	NoteID           *string              `json:"noteId,omitempty"`
	ProposalRevision *string              `json:"proposalRevision,omitempty"`
}

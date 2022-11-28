package shared

type NoteCreatorRoleEnum string

const (
	NoteCreatorRoleEnumBuyerSellerRoleUnspecified NoteCreatorRoleEnum = "BUYER_SELLER_ROLE_UNSPECIFIED"
	NoteCreatorRoleEnumBuyer                      NoteCreatorRoleEnum = "BUYER"
	NoteCreatorRoleEnumSeller                     NoteCreatorRoleEnum = "SELLER"
)

// NoteInput
// A text note attached to the proposal to facilitate the communication between buyers and sellers.
type NoteInput struct {
	Note *string `json:"note,omitempty"`
}

// Note
// A text note attached to the proposal to facilitate the communication between buyers and sellers.
type Note struct {
	CreateTime  *string              `json:"createTime,omitempty"`
	CreatorRole *NoteCreatorRoleEnum `json:"creatorRole,omitempty"`
	Note        *string              `json:"note,omitempty"`
}

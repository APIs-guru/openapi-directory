package shared

type NoteCreatorRoleEnum string

const (
	NoteCreatorRoleEnumBuyerSellerRoleUnspecified NoteCreatorRoleEnum = "BUYER_SELLER_ROLE_UNSPECIFIED"
	NoteCreatorRoleEnumBuyer                      NoteCreatorRoleEnum = "BUYER"
	NoteCreatorRoleEnumSeller                     NoteCreatorRoleEnum = "SELLER"
)

type Note struct {
	CreateTime  *string              `json:"createTime"`
	CreatorRole *NoteCreatorRoleEnum `json:"creatorRole"`
	Note        *string              `json:"note"`
}

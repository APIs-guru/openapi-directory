package shared




type NoteCreatorRoleEnum string

const (
    NoteCreatorRoleEnumBuyerSellerRoleUnspecified NoteCreatorRoleEnum = "BUYER_SELLER_ROLE_UNSPECIFIED"
NoteCreatorRoleEnumBuyer NoteCreatorRoleEnum = "BUYER"
NoteCreatorRoleEnumSeller NoteCreatorRoleEnum = "SELLER"
)


type Note struct {
    CreateTime *string `json:"createTime,omitempty"`
    CreatorRole *NoteCreatorRoleEnum `json:"creatorRole,omitempty"`
    Note *string `json:"note,omitempty"`
    
}


package operations

type Destiny2GetUniqueWeaponHistoryPathParams struct {
	CharacterID         int64 `pathParam:"style=simple,explode=false,name=characterId"`
	DestinyMembershipID int64 `pathParam:"style=simple,explode=false,name=destinyMembershipId"`
	MembershipType      int32 `pathParam:"style=simple,explode=false,name=membershipType"`
}

type Destiny2GetUniqueWeaponHistoryRequest struct {
	PathParams Destiny2GetUniqueWeaponHistoryPathParams
}

type Destiny2GetUniqueWeaponHistoryResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

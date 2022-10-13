package operations

type Destiny2GetLeaderboardsForCharacterPathParams struct {
	CharacterID         int64 `pathParam:"style=simple,explode=false,name=characterId"`
	DestinyMembershipID int64 `pathParam:"style=simple,explode=false,name=destinyMembershipId"`
	MembershipType      int32 `pathParam:"style=simple,explode=false,name=membershipType"`
}

type Destiny2GetLeaderboardsForCharacterQueryParams struct {
	Maxtop *int32  `queryParam:"style=form,explode=true,name=maxtop"`
	Modes  *string `queryParam:"style=form,explode=true,name=modes"`
	Statid *string `queryParam:"style=form,explode=true,name=statid"`
}

type Destiny2GetLeaderboardsForCharacterRequest struct {
	PathParams  Destiny2GetLeaderboardsForCharacterPathParams
	QueryParams Destiny2GetLeaderboardsForCharacterQueryParams
}

type Destiny2GetLeaderboardsForCharacterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

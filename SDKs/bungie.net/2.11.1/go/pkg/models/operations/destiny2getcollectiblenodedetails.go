package operations

type Destiny2GetCollectibleNodeDetailsPathParams struct {
	CharacterID                     int64 `pathParam:"style=simple,explode=false,name=characterId"`
	CollectiblePresentationNodeHash int64 `pathParam:"style=simple,explode=false,name=collectiblePresentationNodeHash"`
	DestinyMembershipID             int64 `pathParam:"style=simple,explode=false,name=destinyMembershipId"`
	MembershipType                  int32 `pathParam:"style=simple,explode=false,name=membershipType"`
}

type Destiny2GetCollectibleNodeDetailsQueryParams struct {
	Components []int32 `queryParam:"style=form,explode=false,name=components"`
}

type Destiny2GetCollectibleNodeDetailsRequest struct {
	PathParams  Destiny2GetCollectibleNodeDetailsPathParams
	QueryParams Destiny2GetCollectibleNodeDetailsQueryParams
}

type Destiny2GetCollectibleNodeDetailsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

package operations

type Destiny2SearchDestinyPlayerPathParams struct {
	DisplayName    string `pathParam:"style=simple,explode=false,name=displayName"`
	MembershipType int32  `pathParam:"style=simple,explode=false,name=membershipType"`
}

type Destiny2SearchDestinyPlayerQueryParams struct {
	ReturnOriginalProfile *bool `queryParam:"style=form,explode=true,name=returnOriginalProfile"`
}

type Destiny2SearchDestinyPlayerRequest struct {
	PathParams  Destiny2SearchDestinyPlayerPathParams
	QueryParams Destiny2SearchDestinyPlayerQueryParams
}

type Destiny2SearchDestinyPlayerResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

package operations

type Destiny2GetHistoricalStatsForAccountPathParams struct {
	DestinyMembershipID int64 `pathParam:"style=simple,explode=false,name=destinyMembershipId"`
	MembershipType      int32 `pathParam:"style=simple,explode=false,name=membershipType"`
}

type Destiny2GetHistoricalStatsForAccountQueryParams struct {
	Groups []int32 `queryParam:"style=form,explode=false,name=groups"`
}

type Destiny2GetHistoricalStatsForAccountRequest struct {
	PathParams  Destiny2GetHistoricalStatsForAccountPathParams
	QueryParams Destiny2GetHistoricalStatsForAccountQueryParams
}

type Destiny2GetHistoricalStatsForAccountResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

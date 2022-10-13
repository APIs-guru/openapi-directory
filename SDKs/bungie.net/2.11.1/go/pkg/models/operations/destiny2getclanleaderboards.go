package operations

type Destiny2GetClanLeaderboardsPathParams struct {
	GroupID int64 `pathParam:"style=simple,explode=false,name=groupId"`
}

type Destiny2GetClanLeaderboardsQueryParams struct {
	Maxtop *int32  `queryParam:"style=form,explode=true,name=maxtop"`
	Modes  *string `queryParam:"style=form,explode=true,name=modes"`
	Statid *string `queryParam:"style=form,explode=true,name=statid"`
}

type Destiny2GetClanLeaderboardsRequest struct {
	PathParams  Destiny2GetClanLeaderboardsPathParams
	QueryParams Destiny2GetClanLeaderboardsQueryParams
}

type Destiny2GetClanLeaderboardsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

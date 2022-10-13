package operations

type Destiny2GetClanWeeklyRewardStatePathParams struct {
	GroupID int64 `pathParam:"style=simple,explode=false,name=groupId"`
}

type Destiny2GetClanWeeklyRewardStateRequest struct {
	PathParams Destiny2GetClanWeeklyRewardStatePathParams
}

type Destiny2GetClanWeeklyRewardStateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

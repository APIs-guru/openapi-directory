package operations

type ReposGetPunchCardStatsPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposGetPunchCardStatsRequest struct {
	PathParams ReposGetPunchCardStatsPathParams
}

type ReposGetPunchCardStatsResponse struct {
	ContentType        string
	StatusCode         int64
	CodeFrequencyStats [][]int64
}

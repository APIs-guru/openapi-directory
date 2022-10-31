package operations

type TrendingGetTrendingEntryDetailPathParams struct {
	Identifier        string `pathParam:"style=simple,explode=false,name=identifier"`
	TrendingEntryType int32  `pathParam:"style=simple,explode=false,name=trendingEntryType"`
}

type TrendingGetTrendingEntryDetailRequest struct {
	PathParams TrendingGetTrendingEntryDetailPathParams
}

type TrendingGetTrendingEntryDetailResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

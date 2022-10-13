package shared

type RawStatisticsListLiveStreamAnalyticsResponse struct {
	Data       []LiveStreamSession `json:"data"`
	Pagination *Pagination         `json:"pagination"`
}

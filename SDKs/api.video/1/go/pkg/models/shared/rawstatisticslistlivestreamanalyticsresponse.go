package shared



type RawStatisticsListLiveStreamAnalyticsResponse struct {
    Data []LiveStreamSession `json:"data,omitempty"`
    Pagination *Pagination `json:"pagination,omitempty"`
    
}


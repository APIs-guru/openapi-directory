package shared



type ConsumerRequestCountsInDateRangeResponseData struct {
    AggregatedRequestCount *float64 `json:"aggregated_request_count,omitempty"`
    ApplicationID *string `json:"application_id,omitempty"`
    ConsumerID *string `json:"consumer_id,omitempty"`
    EndDatetime *string `json:"end_datetime,omitempty"`
    RequestCounts *RequestCountAllocation `json:"request_counts,omitempty"`
    StartDatetime *string `json:"start_datetime,omitempty"`
    
}

type ConsumerRequestCountsInDateRangeResponse struct {
    Data ConsumerRequestCountsInDateRangeResponseData `json:"data"`
    Status string `json:"status"`
    StatusCode int64 `json:"status_code"`
    
}


package shared

type ConsumerRequestCountsInDateRangeResponseData struct {
	AggregatedRequestCount *float64                `json:"aggregated_request_count"`
	ApplicationID          *string                 `json:"application_id"`
	ConsumerID             *string                 `json:"consumer_id"`
	EndDatetime            *string                 `json:"end_datetime"`
	RequestCounts          *RequestCountAllocation `json:"request_counts"`
	StartDatetime          *string                 `json:"start_datetime"`
}

type ConsumerRequestCountsInDateRangeResponse struct {
	Data       ConsumerRequestCountsInDateRangeResponseData `json:"data"`
	Status     string                                       `json:"status"`
	StatusCode int64                                        `json:"status_code"`
}

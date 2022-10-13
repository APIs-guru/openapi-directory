package shared

type GetConsumersResponseData struct {
	AggregatedRequestCount *float64                `json:"aggregated_request_count"`
	ApplicationID          *string                 `json:"application_id"`
	ConsumerID             *string                 `json:"consumer_id"`
	Created                *string                 `json:"created"`
	Metadata               *ConsumerMetadata       `json:"metadata"`
	Modified               *string                 `json:"modified"`
	RequestCountUpdated    *string                 `json:"request_count_updated"`
	RequestCounts          *RequestCountAllocation `json:"request_counts"`
	Services               []string                `json:"services"`
}

type GetConsumersResponse struct {
	Data       []GetConsumersResponseData `json:"data"`
	Links      *Links                     `json:"links"`
	Meta       *Meta                      `json:"meta"`
	Status     string                     `json:"status"`
	StatusCode int64                      `json:"status_code"`
}

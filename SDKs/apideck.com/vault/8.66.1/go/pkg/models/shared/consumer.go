package shared

type Consumer struct {
	AggregatedRequestCount *float64                `json:"aggregated_request_count"`
	ApplicationID          *string                 `json:"application_id"`
	Connections            []ConsumerConnection    `json:"connections"`
	ConsumerID             *string                 `json:"consumer_id"`
	Created                *string                 `json:"created"`
	Metadata               *ConsumerMetadata       `json:"metadata"`
	Modified               *string                 `json:"modified"`
	RequestCountUpdated    *string                 `json:"request_count_updated"`
	RequestCounts          *RequestCountAllocation `json:"request_counts"`
	Services               []string                `json:"services"`
}

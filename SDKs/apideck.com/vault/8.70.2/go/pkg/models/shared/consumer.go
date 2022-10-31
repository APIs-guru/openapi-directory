package shared

type Consumer struct {
	AggregatedRequestCount *float64                `json:"aggregated_request_count,omitempty"`
	ApplicationID          *string                 `json:"application_id,omitempty"`
	Connections            []ConsumerConnection    `json:"connections,omitempty"`
	ConsumerID             *string                 `json:"consumer_id,omitempty"`
	Created                *string                 `json:"created,omitempty"`
	Metadata               *ConsumerMetadata       `json:"metadata,omitempty"`
	Modified               *string                 `json:"modified,omitempty"`
	RequestCountUpdated    *string                 `json:"request_count_updated,omitempty"`
	RequestCounts          *RequestCountAllocation `json:"request_counts,omitempty"`
	Services               []string                `json:"services,omitempty"`
}

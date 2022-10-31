package shared

type MetricFilterMatchRecord struct {
	EventMessage    *string           `json:"eventMessage,omitempty"`
	EventNumber     *int64            `json:"eventNumber,omitempty"`
	ExtractedValues map[string]string `json:"extractedValues,omitempty"`
}

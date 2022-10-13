package shared

type MetricFilterMatchRecord struct {
	EventMessage    *string           `json:"eventMessage"`
	EventNumber     *int64            `json:"eventNumber"`
	ExtractedValues map[string]string `json:"extractedValues"`
}

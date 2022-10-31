package shared

type Severity struct {
	Label      *SeverityLabelEnum `json:"Label,omitempty"`
	Normalized *int64             `json:"Normalized,omitempty"`
	Original   *string            `json:"Original,omitempty"`
	Product    *float64           `json:"Product,omitempty"`
}

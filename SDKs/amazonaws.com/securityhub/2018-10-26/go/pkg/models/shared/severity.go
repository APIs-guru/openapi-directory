package shared

type Severity struct {
	Label      *SeverityLabelEnum `json:"Label"`
	Normalized *int64             `json:"Normalized"`
	Original   *string            `json:"Original"`
	Product    *float64           `json:"Product"`
}

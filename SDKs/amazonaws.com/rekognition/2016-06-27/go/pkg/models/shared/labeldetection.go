package shared

type LabelDetection struct {
	Label     *Label `json:"Label,omitempty"`
	Timestamp *int64 `json:"Timestamp,omitempty"`
}

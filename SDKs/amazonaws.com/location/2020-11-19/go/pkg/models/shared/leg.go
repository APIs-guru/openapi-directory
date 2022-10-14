package shared

type Leg struct {
	Distance        float64      `json:"Distance"`
	DurationSeconds float64      `json:"DurationSeconds"`
	EndPosition     []float64    `json:"EndPosition"`
	Geometry        *LegGeometry `json:"Geometry,omitempty"`
	StartPosition   []float64    `json:"StartPosition"`
	Steps           []Step       `json:"Steps"`
}

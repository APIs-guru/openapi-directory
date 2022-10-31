package shared



type Step struct {
    Distance float64 `json:"Distance"`
    DurationSeconds float64 `json:"DurationSeconds"`
    EndPosition []float64 `json:"EndPosition"`
    GeometryOffset *int64 `json:"GeometryOffset,omitempty"`
    StartPosition []float64 `json:"StartPosition"`
    
}


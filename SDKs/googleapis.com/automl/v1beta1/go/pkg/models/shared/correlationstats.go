package shared

// CorrelationStats
// A correlation statistics between two series of DataType values. The series may have differing DataType-s, but within a single series the DataType must be the same.
type CorrelationStats struct {
	CramersV *float64 `json:"cramersV,omitempty"`
}

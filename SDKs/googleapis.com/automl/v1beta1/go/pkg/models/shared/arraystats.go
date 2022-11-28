package shared

// ArrayStats
// The data statistics of a series of ARRAY values.
type ArrayStats struct {
	MemberStats *DataStats `json:"memberStats,omitempty"`
}

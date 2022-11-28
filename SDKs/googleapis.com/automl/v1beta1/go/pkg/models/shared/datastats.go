package shared

// DataStats
// The data statistics of a series of values that share the same DataType.
type DataStats struct {
	ArrayStats         *ArrayStats     `json:"arrayStats,omitempty"`
	CategoryStats      *CategoryStats  `json:"categoryStats,omitempty"`
	DistinctValueCount *string         `json:"distinctValueCount,omitempty"`
	Float64Stats       *Float64Stats   `json:"float64Stats,omitempty"`
	NullValueCount     *string         `json:"nullValueCount,omitempty"`
	StringStats        *StringStats    `json:"stringStats,omitempty"`
	StructStats        *StructStats    `json:"structStats,omitempty"`
	TimestampStats     *TimestampStats `json:"timestampStats,omitempty"`
	ValidValueCount    *string         `json:"validValueCount,omitempty"`
}

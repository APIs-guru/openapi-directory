package shared

type DataStats struct {
	ArrayStats         *ArrayStats     `json:"arrayStats"`
	CategoryStats      *CategoryStats  `json:"categoryStats"`
	DistinctValueCount *string         `json:"distinctValueCount"`
	Float64Stats       *Float64Stats   `json:"float64Stats"`
	NullValueCount     *string         `json:"nullValueCount"`
	StringStats        *StringStats    `json:"stringStats"`
	StructStats        *StructStats    `json:"structStats"`
	TimestampStats     *TimestampStats `json:"timestampStats"`
	ValidValueCount    *string         `json:"validValueCount"`
}

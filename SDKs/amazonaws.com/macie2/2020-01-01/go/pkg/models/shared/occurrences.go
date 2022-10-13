package shared

type Occurrences struct {
	Cells        []Cell   `json:"cells"`
	LineRanges   []Range  `json:"lineRanges"`
	OffsetRanges []Range  `json:"offsetRanges"`
	Pages        []Page   `json:"pages"`
	Records      []Record `json:"records"`
}

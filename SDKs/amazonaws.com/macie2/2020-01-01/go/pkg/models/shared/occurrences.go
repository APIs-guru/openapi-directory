package shared

type Occurrences struct {
	Cells        []Cell   `json:"cells,omitempty"`
	LineRanges   []Range  `json:"lineRanges,omitempty"`
	OffsetRanges []Range  `json:"offsetRanges,omitempty"`
	Pages        []Page   `json:"pages,omitempty"`
	Records      []Record `json:"records,omitempty"`
}

package shared

type Occurrences struct {
	Cells        []Cell   `json:"Cells,omitempty"`
	LineRanges   []Range  `json:"LineRanges,omitempty"`
	OffsetRanges []Range  `json:"OffsetRanges,omitempty"`
	Pages        []Page   `json:"Pages,omitempty"`
	Records      []Record `json:"Records,omitempty"`
}

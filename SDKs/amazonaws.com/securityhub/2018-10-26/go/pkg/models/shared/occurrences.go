package shared

type Occurrences struct {
	Cells        []Cell   `json:"Cells"`
	LineRanges   []Range  `json:"LineRanges"`
	OffsetRanges []Range  `json:"OffsetRanges"`
	Pages        []Page   `json:"Pages"`
	Records      []Record `json:"Records"`
}

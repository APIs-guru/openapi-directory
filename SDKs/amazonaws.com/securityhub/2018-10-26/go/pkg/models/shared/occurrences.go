package shared

// Occurrences
// The detected occurrences of sensitive data.
type Occurrences struct {
	Cells        []Cell   `json:"Cells,omitempty"`
	LineRanges   []Range  `json:"LineRanges,omitempty"`
	OffsetRanges []Range  `json:"OffsetRanges,omitempty"`
	Pages        []Page   `json:"Pages,omitempty"`
	Records      []Record `json:"Records,omitempty"`
}

package shared

// Occurrences
// Specifies the location of 1-15 occurrences of sensitive data that was detected by a managed data identifier or a custom data identifier and produced a sensitive data finding.
type Occurrences struct {
	Cells        []Cell   `json:"cells,omitempty"`
	LineRanges   []Range  `json:"lineRanges,omitempty"`
	OffsetRanges []Range  `json:"offsetRanges,omitempty"`
	Pages        []Page   `json:"pages,omitempty"`
	Records      []Record `json:"records,omitempty"`
}

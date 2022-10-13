package shared

type SearchLine struct {
	Line     *int32          `json:"line"`
	Segments []SearchSegment `json:"segments"`
}

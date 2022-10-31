package shared

type Page struct {
	LineRange   *Range `json:"lineRange,omitempty"`
	OffsetRange *Range `json:"offsetRange,omitempty"`
	PageNumber  *int64 `json:"pageNumber,omitempty"`
}

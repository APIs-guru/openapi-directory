package shared

type Page struct {
	LineRange   *Range `json:"lineRange"`
	OffsetRange *Range `json:"offsetRange"`
	PageNumber  *int64 `json:"pageNumber"`
}

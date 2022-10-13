package shared

type Page struct {
	LineRange   *Range `json:"LineRange"`
	OffsetRange *Range `json:"OffsetRange"`
	PageNumber  *int64 `json:"PageNumber"`
}

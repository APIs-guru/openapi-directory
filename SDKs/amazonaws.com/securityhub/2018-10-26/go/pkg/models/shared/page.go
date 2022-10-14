package shared

type Page struct {
	LineRange   *Range `json:"LineRange,omitempty"`
	OffsetRange *Range `json:"OffsetRange,omitempty"`
	PageNumber  *int64 `json:"PageNumber,omitempty"`
}

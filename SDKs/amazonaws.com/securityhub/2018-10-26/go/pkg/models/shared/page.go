package shared

// Page
// An occurrence of sensitive data in an Adobe Portable Document Format (PDF) file.
type Page struct {
	LineRange   *Range `json:"LineRange,omitempty"`
	OffsetRange *Range `json:"OffsetRange,omitempty"`
	PageNumber  *int64 `json:"PageNumber,omitempty"`
}

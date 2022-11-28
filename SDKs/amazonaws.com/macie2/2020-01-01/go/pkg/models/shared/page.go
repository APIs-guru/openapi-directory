package shared

// Page
// Specifies the location of an occurrence of sensitive data in an Adobe Portable Document Format file.
type Page struct {
	LineRange   *Range `json:"lineRange,omitempty"`
	OffsetRange *Range `json:"offsetRange,omitempty"`
	PageNumber  *int64 `json:"pageNumber,omitempty"`
}

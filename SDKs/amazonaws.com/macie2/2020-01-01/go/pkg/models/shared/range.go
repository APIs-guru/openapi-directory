package shared

// Range
// Specifies the location of an occurrence of sensitive data in a non-binary text file, such as an HTML, TXT, or XML file.
type Range struct {
	End         *int64 `json:"end,omitempty"`
	Start       *int64 `json:"start,omitempty"`
	StartColumn *int64 `json:"startColumn,omitempty"`
}

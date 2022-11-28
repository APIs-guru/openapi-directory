package shared

// FileFormatDescriptor
// Contains information about a source file's formatting.
type FileFormatDescriptor struct {
	CsvFormatDescriptor  *CsvFormatDescriptor  `json:"CsvFormatDescriptor,omitempty"`
	JSONFormatDescriptor *JSONFormatDescriptor `json:"JsonFormatDescriptor,omitempty"`
}

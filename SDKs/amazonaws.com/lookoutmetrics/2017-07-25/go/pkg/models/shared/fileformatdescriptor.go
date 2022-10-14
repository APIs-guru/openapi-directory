package shared

type FileFormatDescriptor struct {
	CsvFormatDescriptor  *CsvFormatDescriptor  `json:"CsvFormatDescriptor,omitempty"`
	JSONFormatDescriptor *JSONFormatDescriptor `json:"JsonFormatDescriptor,omitempty"`
}

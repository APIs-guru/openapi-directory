package shared

type FileFormatDescriptor struct {
	CsvFormatDescriptor  *CsvFormatDescriptor  `json:"CsvFormatDescriptor"`
	JSONFormatDescriptor *JSONFormatDescriptor `json:"JsonFormatDescriptor"`
}

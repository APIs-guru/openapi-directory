package shared

type JSONFormatDescriptor struct {
	Charset         *string                  `json:"Charset"`
	FileCompression *JSONFileCompressionEnum `json:"FileCompression"`
}

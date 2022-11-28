package shared

// JSONFormatDescriptor
// Contains information about how a source JSON data file should be analyzed.
type JSONFormatDescriptor struct {
	Charset         *string                  `json:"Charset,omitempty"`
	FileCompression *JSONFileCompressionEnum `json:"FileCompression,omitempty"`
}

package shared



type JSONFormatDescriptor struct {
    Charset *string `json:"Charset,omitempty"`
    FileCompression *JSONFileCompressionEnum `json:"FileCompression,omitempty"`
    
}


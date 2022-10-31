package shared



type CsvFormatDescriptor struct {
    Charset *string `json:"Charset,omitempty"`
    ContainsHeader *bool `json:"ContainsHeader,omitempty"`
    Delimiter *string `json:"Delimiter,omitempty"`
    FileCompression *CsvFileCompressionEnum `json:"FileCompression,omitempty"`
    HeaderList []string `json:"HeaderList,omitempty"`
    QuoteSymbol *string `json:"QuoteSymbol,omitempty"`
    
}


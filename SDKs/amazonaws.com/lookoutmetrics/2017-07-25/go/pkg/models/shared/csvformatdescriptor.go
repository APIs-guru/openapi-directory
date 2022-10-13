package shared

type CsvFormatDescriptor struct {
	Charset         *string                 `json:"Charset"`
	ContainsHeader  *bool                   `json:"ContainsHeader"`
	Delimiter       *string                 `json:"Delimiter"`
	FileCompression *CsvFileCompressionEnum `json:"FileCompression"`
	HeaderList      []string                `json:"HeaderList"`
	QuoteSymbol     *string                 `json:"QuoteSymbol"`
}

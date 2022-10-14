package shared

type CsvOptions struct {
	AllowJaggedRows                *bool   `json:"allowJaggedRows,omitempty"`
	AllowQuotedNewlines            *bool   `json:"allowQuotedNewlines,omitempty"`
	Encoding                       *string `json:"encoding,omitempty"`
	FieldDelimiter                 *string `json:"fieldDelimiter,omitempty"`
	NullMarker                     *string `json:"null_marker,omitempty"`
	PreserveASCIIControlCharacters *bool   `json:"preserveAsciiControlCharacters,omitempty"`
	Quote                          *string `json:"quote,omitempty"`
	SkipLeadingRows                *string `json:"skipLeadingRows,omitempty"`
}

package shared

type CsvOptions struct {
	AllowJaggedRows                *bool   `json:"allowJaggedRows"`
	AllowQuotedNewlines            *bool   `json:"allowQuotedNewlines"`
	Encoding                       *string `json:"encoding"`
	FieldDelimiter                 *string `json:"fieldDelimiter"`
	NullMarker                     *string `json:"null_marker"`
	PreserveASCIIControlCharacters *bool   `json:"preserveAsciiControlCharacters"`
	Quote                          *string `json:"quote"`
	SkipLeadingRows                *string `json:"skipLeadingRows"`
}

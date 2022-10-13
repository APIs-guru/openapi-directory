package shared

type JobConfigurationExtract struct {
	Compression         *string         `json:"compression"`
	DestinationFormat   *string         `json:"destinationFormat"`
	DestinationURI      *string         `json:"destinationUri"`
	DestinationUris     []string        `json:"destinationUris"`
	FieldDelimiter      *string         `json:"fieldDelimiter"`
	PrintHeader         *bool           `json:"printHeader"`
	SourceModel         *ModelReference `json:"sourceModel"`
	SourceTable         *TableReference `json:"sourceTable"`
	UseAvroLogicalTypes *bool           `json:"useAvroLogicalTypes"`
}

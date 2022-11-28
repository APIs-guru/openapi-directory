package shared

// MappingParameters
// When configuring application input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.
type MappingParameters struct {
	CsvMappingParameters  *CsvMappingParameters  `json:"CSVMappingParameters,omitempty"`
	JSONMappingParameters *JSONMappingParameters `json:"JSONMappingParameters,omitempty"`
}

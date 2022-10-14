package shared

type MappingParameters struct {
	CsvMappingParameters  *CsvMappingParameters  `json:"CSVMappingParameters,omitempty"`
	JSONMappingParameters *JSONMappingParameters `json:"JSONMappingParameters,omitempty"`
}

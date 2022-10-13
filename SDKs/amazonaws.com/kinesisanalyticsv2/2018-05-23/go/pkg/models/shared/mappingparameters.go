package shared

type MappingParameters struct {
	CsvMappingParameters  *CsvMappingParameters  `json:"CSVMappingParameters"`
	JSONMappingParameters *JSONMappingParameters `json:"JSONMappingParameters"`
}

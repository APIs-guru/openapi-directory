package shared

// RecordFormat
//
//	For a SQL-based Kinesis Data Analytics application, describes the record format and relevant mapping information that should be applied to schematize the records on the stream.
type RecordFormat struct {
	MappingParameters *MappingParameters   `json:"MappingParameters,omitempty"`
	RecordFormatType  RecordFormatTypeEnum `json:"RecordFormatType"`
}

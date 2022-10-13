package shared

type RecordFormat struct {
	MappingParameters *MappingParameters   `json:"MappingParameters"`
	RecordFormatType  RecordFormatTypeEnum `json:"RecordFormatType"`
}

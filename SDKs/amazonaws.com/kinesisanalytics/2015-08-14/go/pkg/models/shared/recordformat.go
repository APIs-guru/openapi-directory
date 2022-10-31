package shared



type RecordFormat struct {
    MappingParameters *MappingParameters `json:"MappingParameters,omitempty"`
    RecordFormatType RecordFormatTypeEnum `json:"RecordFormatType"`
    
}


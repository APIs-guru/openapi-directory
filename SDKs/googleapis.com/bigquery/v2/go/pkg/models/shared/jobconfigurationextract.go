package shared



type JobConfigurationExtract struct {
    Compression *string `json:"compression,omitempty"`
    DestinationFormat *string `json:"destinationFormat,omitempty"`
    DestinationURI *string `json:"destinationUri,omitempty"`
    DestinationUris []string `json:"destinationUris,omitempty"`
    FieldDelimiter *string `json:"fieldDelimiter,omitempty"`
    PrintHeader *bool `json:"printHeader,omitempty"`
    SourceModel *ModelReference `json:"sourceModel,omitempty"`
    SourceTable *TableReference `json:"sourceTable,omitempty"`
    UseAvroLogicalTypes *bool `json:"useAvroLogicalTypes,omitempty"`
    
}


package shared



type ExternalDataConfiguration struct {
    Autodetect *bool `json:"autodetect,omitempty"`
    AvroOptions *AvroOptions `json:"avroOptions,omitempty"`
    BigtableOptions *BigtableOptions `json:"bigtableOptions,omitempty"`
    Compression *string `json:"compression,omitempty"`
    ConnectionID *string `json:"connectionId,omitempty"`
    CsvOptions *CsvOptions `json:"csvOptions,omitempty"`
    DecimalTargetTypes []string `json:"decimalTargetTypes,omitempty"`
    GoogleSheetsOptions *GoogleSheetsOptions `json:"googleSheetsOptions,omitempty"`
    HivePartitioningOptions *HivePartitioningOptions `json:"hivePartitioningOptions,omitempty"`
    IgnoreUnknownValues *bool `json:"ignoreUnknownValues,omitempty"`
    MaxBadRecords *int32 `json:"maxBadRecords,omitempty"`
    ParquetOptions *ParquetOptions `json:"parquetOptions,omitempty"`
    ReferenceFileSchemaURI *string `json:"referenceFileSchemaUri,omitempty"`
    Schema *TableSchema `json:"schema,omitempty"`
    SourceFormat *string `json:"sourceFormat,omitempty"`
    SourceUris []string `json:"sourceUris,omitempty"`
    
}


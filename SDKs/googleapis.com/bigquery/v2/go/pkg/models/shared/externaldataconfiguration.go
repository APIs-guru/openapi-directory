package shared

type ExternalDataConfiguration struct {
	Autodetect              *bool                    `json:"autodetect"`
	AvroOptions             *AvroOptions             `json:"avroOptions"`
	BigtableOptions         *BigtableOptions         `json:"bigtableOptions"`
	Compression             *string                  `json:"compression"`
	ConnectionID            *string                  `json:"connectionId"`
	CsvOptions              *CsvOptions              `json:"csvOptions"`
	DecimalTargetTypes      []string                 `json:"decimalTargetTypes"`
	GoogleSheetsOptions     *GoogleSheetsOptions     `json:"googleSheetsOptions"`
	HivePartitioningOptions *HivePartitioningOptions `json:"hivePartitioningOptions"`
	IgnoreUnknownValues     *bool                    `json:"ignoreUnknownValues"`
	MaxBadRecords           *int32                   `json:"maxBadRecords"`
	ParquetOptions          *ParquetOptions          `json:"parquetOptions"`
	ReferenceFileSchemaURI  *string                  `json:"referenceFileSchemaUri"`
	Schema                  *TableSchema             `json:"schema"`
	SourceFormat            *string                  `json:"sourceFormat"`
	SourceUris              []string                 `json:"sourceUris"`
}

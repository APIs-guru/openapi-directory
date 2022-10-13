package shared

type JobConfigurationLoad struct {
	AllowJaggedRows                    *bool                       `json:"allowJaggedRows"`
	AllowQuotedNewlines                *bool                       `json:"allowQuotedNewlines"`
	Autodetect                         *bool                       `json:"autodetect"`
	Clustering                         *Clustering                 `json:"clustering"`
	ConnectionProperties               []ConnectionProperty        `json:"connectionProperties"`
	CreateDisposition                  *string                     `json:"createDisposition"`
	CreateSession                      *bool                       `json:"createSession"`
	DecimalTargetTypes                 []string                    `json:"decimalTargetTypes"`
	DestinationEncryptionConfiguration *EncryptionConfiguration    `json:"destinationEncryptionConfiguration"`
	DestinationTable                   *TableReference             `json:"destinationTable"`
	DestinationTableProperties         *DestinationTableProperties `json:"destinationTableProperties"`
	Encoding                           *string                     `json:"encoding"`
	FieldDelimiter                     *string                     `json:"fieldDelimiter"`
	HivePartitioningOptions            *HivePartitioningOptions    `json:"hivePartitioningOptions"`
	IgnoreUnknownValues                *bool                       `json:"ignoreUnknownValues"`
	JSONExtension                      *string                     `json:"jsonExtension"`
	MaxBadRecords                      *int32                      `json:"maxBadRecords"`
	NullMarker                         *string                     `json:"nullMarker"`
	ParquetOptions                     *ParquetOptions             `json:"parquetOptions"`
	PreserveASCIIControlCharacters     *bool                       `json:"preserveAsciiControlCharacters"`
	ProjectionFields                   []string                    `json:"projectionFields"`
	Quote                              *string                     `json:"quote"`
	RangePartitioning                  *RangePartitioning          `json:"rangePartitioning"`
	ReferenceFileSchemaURI             *string                     `json:"referenceFileSchemaUri"`
	Schema                             *TableSchema                `json:"schema"`
	SchemaInline                       *string                     `json:"schemaInline"`
	SchemaInlineFormat                 *string                     `json:"schemaInlineFormat"`
	SchemaUpdateOptions                []string                    `json:"schemaUpdateOptions"`
	SkipLeadingRows                    *int32                      `json:"skipLeadingRows"`
	SourceFormat                       *string                     `json:"sourceFormat"`
	SourceUris                         []string                    `json:"sourceUris"`
	TimePartitioning                   *TimePartitioning           `json:"timePartitioning"`
	UseAvroLogicalTypes                *bool                       `json:"useAvroLogicalTypes"`
	WriteDisposition                   *string                     `json:"writeDisposition"`
}

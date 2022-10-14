package shared

type JobConfigurationLoad struct {
	AllowJaggedRows                    *bool                       `json:"allowJaggedRows,omitempty"`
	AllowQuotedNewlines                *bool                       `json:"allowQuotedNewlines,omitempty"`
	Autodetect                         *bool                       `json:"autodetect,omitempty"`
	Clustering                         *Clustering                 `json:"clustering,omitempty"`
	ConnectionProperties               []ConnectionProperty        `json:"connectionProperties,omitempty"`
	CreateDisposition                  *string                     `json:"createDisposition,omitempty"`
	CreateSession                      *bool                       `json:"createSession,omitempty"`
	DecimalTargetTypes                 []string                    `json:"decimalTargetTypes,omitempty"`
	DestinationEncryptionConfiguration *EncryptionConfiguration    `json:"destinationEncryptionConfiguration,omitempty"`
	DestinationTable                   *TableReference             `json:"destinationTable,omitempty"`
	DestinationTableProperties         *DestinationTableProperties `json:"destinationTableProperties,omitempty"`
	Encoding                           *string                     `json:"encoding,omitempty"`
	FieldDelimiter                     *string                     `json:"fieldDelimiter,omitempty"`
	HivePartitioningOptions            *HivePartitioningOptions    `json:"hivePartitioningOptions,omitempty"`
	IgnoreUnknownValues                *bool                       `json:"ignoreUnknownValues,omitempty"`
	JSONExtension                      *string                     `json:"jsonExtension,omitempty"`
	MaxBadRecords                      *int32                      `json:"maxBadRecords,omitempty"`
	NullMarker                         *string                     `json:"nullMarker,omitempty"`
	ParquetOptions                     *ParquetOptions             `json:"parquetOptions,omitempty"`
	PreserveASCIIControlCharacters     *bool                       `json:"preserveAsciiControlCharacters,omitempty"`
	ProjectionFields                   []string                    `json:"projectionFields,omitempty"`
	Quote                              *string                     `json:"quote,omitempty"`
	RangePartitioning                  *RangePartitioning          `json:"rangePartitioning,omitempty"`
	ReferenceFileSchemaURI             *string                     `json:"referenceFileSchemaUri,omitempty"`
	Schema                             *TableSchema                `json:"schema,omitempty"`
	SchemaInline                       *string                     `json:"schemaInline,omitempty"`
	SchemaInlineFormat                 *string                     `json:"schemaInlineFormat,omitempty"`
	SchemaUpdateOptions                []string                    `json:"schemaUpdateOptions,omitempty"`
	SkipLeadingRows                    *int32                      `json:"skipLeadingRows,omitempty"`
	SourceFormat                       *string                     `json:"sourceFormat,omitempty"`
	SourceUris                         []string                    `json:"sourceUris,omitempty"`
	TimePartitioning                   *TimePartitioning           `json:"timePartitioning,omitempty"`
	UseAvroLogicalTypes                *bool                       `json:"useAvroLogicalTypes,omitempty"`
	WriteDisposition                   *string                     `json:"writeDisposition,omitempty"`
}

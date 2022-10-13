package shared

type JobConfigurationQuery struct {
	AllowLargeResults                  *bool                                `json:"allowLargeResults"`
	Clustering                         *Clustering                          `json:"clustering"`
	ConnectionProperties               []ConnectionProperty                 `json:"connectionProperties"`
	CreateDisposition                  *string                              `json:"createDisposition"`
	CreateSession                      *bool                                `json:"createSession"`
	DefaultDataset                     *DatasetReference                    `json:"defaultDataset"`
	DestinationEncryptionConfiguration *EncryptionConfiguration             `json:"destinationEncryptionConfiguration"`
	DestinationTable                   *TableReference                      `json:"destinationTable"`
	FlattenResults                     *bool                                `json:"flattenResults"`
	MaximumBillingTier                 *int32                               `json:"maximumBillingTier"`
	MaximumBytesBilled                 *string                              `json:"maximumBytesBilled"`
	ParameterMode                      *string                              `json:"parameterMode"`
	PreserveNulls                      *bool                                `json:"preserveNulls"`
	Priority                           *string                              `json:"priority"`
	Query                              *string                              `json:"query"`
	QueryParameters                    []QueryParameter                     `json:"queryParameters"`
	RangePartitioning                  *RangePartitioning                   `json:"rangePartitioning"`
	SchemaUpdateOptions                []string                             `json:"schemaUpdateOptions"`
	TableDefinitions                   map[string]ExternalDataConfiguration `json:"tableDefinitions"`
	TimePartitioning                   *TimePartitioning                    `json:"timePartitioning"`
	UseLegacySQL                       *bool                                `json:"useLegacySql"`
	UseQueryCache                      *bool                                `json:"useQueryCache"`
	UserDefinedFunctionResources       []UserDefinedFunctionResource        `json:"userDefinedFunctionResources"`
	WriteDisposition                   *string                              `json:"writeDisposition"`
}

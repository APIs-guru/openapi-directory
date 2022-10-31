package shared



type JobConfigurationQuery struct {
    AllowLargeResults *bool `json:"allowLargeResults,omitempty"`
    Clustering *Clustering `json:"clustering,omitempty"`
    ConnectionProperties []ConnectionProperty `json:"connectionProperties,omitempty"`
    CreateDisposition *string `json:"createDisposition,omitempty"`
    CreateSession *bool `json:"createSession,omitempty"`
    DefaultDataset *DatasetReference `json:"defaultDataset,omitempty"`
    DestinationEncryptionConfiguration *EncryptionConfiguration `json:"destinationEncryptionConfiguration,omitempty"`
    DestinationTable *TableReference `json:"destinationTable,omitempty"`
    FlattenResults *bool `json:"flattenResults,omitempty"`
    MaximumBillingTier *int32 `json:"maximumBillingTier,omitempty"`
    MaximumBytesBilled *string `json:"maximumBytesBilled,omitempty"`
    ParameterMode *string `json:"parameterMode,omitempty"`
    PreserveNulls *bool `json:"preserveNulls,omitempty"`
    Priority *string `json:"priority,omitempty"`
    Query *string `json:"query,omitempty"`
    QueryParameters []QueryParameter `json:"queryParameters,omitempty"`
    RangePartitioning *RangePartitioning `json:"rangePartitioning,omitempty"`
    SchemaUpdateOptions []string `json:"schemaUpdateOptions,omitempty"`
    TableDefinitions map[string]ExternalDataConfiguration `json:"tableDefinitions,omitempty"`
    TimePartitioning *TimePartitioning `json:"timePartitioning,omitempty"`
    UseLegacySQL *bool `json:"useLegacySql,omitempty"`
    UseQueryCache *bool `json:"useQueryCache,omitempty"`
    UserDefinedFunctionResources []UserDefinedFunctionResource `json:"userDefinedFunctionResources,omitempty"`
    WriteDisposition *string `json:"writeDisposition,omitempty"`
    
}


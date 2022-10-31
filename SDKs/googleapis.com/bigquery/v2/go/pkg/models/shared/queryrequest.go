package shared



type QueryRequest struct {
    ConnectionProperties []ConnectionProperty `json:"connectionProperties,omitempty"`
    CreateSession *bool `json:"createSession,omitempty"`
    DefaultDataset *DatasetReference `json:"defaultDataset,omitempty"`
    DryRun *bool `json:"dryRun,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Location *string `json:"location,omitempty"`
    MaxResults *int64 `json:"maxResults,omitempty"`
    MaximumBytesBilled *string `json:"maximumBytesBilled,omitempty"`
    ParameterMode *string `json:"parameterMode,omitempty"`
    PreserveNulls *bool `json:"preserveNulls,omitempty"`
    Query *string `json:"query,omitempty"`
    QueryParameters []QueryParameter `json:"queryParameters,omitempty"`
    RequestID *string `json:"requestId,omitempty"`
    TimeoutMs *int64 `json:"timeoutMs,omitempty"`
    UseLegacySQL *bool `json:"useLegacySql,omitempty"`
    UseQueryCache *bool `json:"useQueryCache,omitempty"`
    
}


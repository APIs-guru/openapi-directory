package shared



type Table struct {
    CloneDefinition *CloneDefinition `json:"cloneDefinition,omitempty"`
    Clustering *Clustering `json:"clustering,omitempty"`
    CreationTime *string `json:"creationTime,omitempty"`
    DefaultCollation *string `json:"defaultCollation,omitempty"`
    Description *string `json:"description,omitempty"`
    EncryptionConfiguration *EncryptionConfiguration `json:"encryptionConfiguration,omitempty"`
    Etag *string `json:"etag,omitempty"`
    ExpirationTime *string `json:"expirationTime,omitempty"`
    ExternalDataConfiguration *ExternalDataConfiguration `json:"externalDataConfiguration,omitempty"`
    FriendlyName *string `json:"friendlyName,omitempty"`
    ID *string `json:"id,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    LastModifiedTime *string `json:"lastModifiedTime,omitempty"`
    Location *string `json:"location,omitempty"`
    MaterializedView *MaterializedViewDefinition `json:"materializedView,omitempty"`
    MaxStaleness *string `json:"maxStaleness,omitempty"`
    Model *ModelDefinition `json:"model,omitempty"`
    NumBytes *string `json:"numBytes,omitempty"`
    NumLongTermBytes *string `json:"numLongTermBytes,omitempty"`
    NumPhysicalBytes *string `json:"numPhysicalBytes,omitempty"`
    NumRows *string `json:"numRows,omitempty"`
    NumActiveLogicalBytes *string `json:"num_active_logical_bytes,omitempty"`
    NumActivePhysicalBytes *string `json:"num_active_physical_bytes,omitempty"`
    NumLongTermLogicalBytes *string `json:"num_long_term_logical_bytes,omitempty"`
    NumLongTermPhysicalBytes *string `json:"num_long_term_physical_bytes,omitempty"`
    NumPartitions *string `json:"num_partitions,omitempty"`
    NumTimeTravelPhysicalBytes *string `json:"num_time_travel_physical_bytes,omitempty"`
    NumTotalLogicalBytes *string `json:"num_total_logical_bytes,omitempty"`
    NumTotalPhysicalBytes *string `json:"num_total_physical_bytes,omitempty"`
    RangePartitioning *RangePartitioning `json:"rangePartitioning,omitempty"`
    RequirePartitionFilter *bool `json:"requirePartitionFilter,omitempty"`
    Schema *TableSchema `json:"schema,omitempty"`
    SelfLink *string `json:"selfLink,omitempty"`
    SnapshotDefinition *SnapshotDefinition `json:"snapshotDefinition,omitempty"`
    StreamingBuffer *Streamingbuffer `json:"streamingBuffer,omitempty"`
    TableReference *TableReference `json:"tableReference,omitempty"`
    TimePartitioning *TimePartitioning `json:"timePartitioning,omitempty"`
    Type *string `json:"type,omitempty"`
    View *ViewDefinition `json:"view,omitempty"`
    
}


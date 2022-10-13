package shared

type Table struct {
	CloneDefinition            *CloneDefinition            `json:"cloneDefinition"`
	Clustering                 *Clustering                 `json:"clustering"`
	CreationTime               *string                     `json:"creationTime"`
	DefaultCollation           *string                     `json:"defaultCollation"`
	Description                *string                     `json:"description"`
	EncryptionConfiguration    *EncryptionConfiguration    `json:"encryptionConfiguration"`
	Etag                       *string                     `json:"etag"`
	ExpirationTime             *string                     `json:"expirationTime"`
	ExternalDataConfiguration  *ExternalDataConfiguration  `json:"externalDataConfiguration"`
	FriendlyName               *string                     `json:"friendlyName"`
	ID                         *string                     `json:"id"`
	Kind                       *string                     `json:"kind"`
	Labels                     map[string]string           `json:"labels"`
	LastModifiedTime           *string                     `json:"lastModifiedTime"`
	Location                   *string                     `json:"location"`
	MaterializedView           *MaterializedViewDefinition `json:"materializedView"`
	MaxStaleness               *string                     `json:"maxStaleness"`
	Model                      *ModelDefinition            `json:"model"`
	NumBytes                   *string                     `json:"numBytes"`
	NumLongTermBytes           *string                     `json:"numLongTermBytes"`
	NumPhysicalBytes           *string                     `json:"numPhysicalBytes"`
	NumRows                    *string                     `json:"numRows"`
	NumActiveLogicalBytes      *string                     `json:"num_active_logical_bytes"`
	NumActivePhysicalBytes     *string                     `json:"num_active_physical_bytes"`
	NumLongTermLogicalBytes    *string                     `json:"num_long_term_logical_bytes"`
	NumLongTermPhysicalBytes   *string                     `json:"num_long_term_physical_bytes"`
	NumPartitions              *string                     `json:"num_partitions"`
	NumTimeTravelPhysicalBytes *string                     `json:"num_time_travel_physical_bytes"`
	NumTotalLogicalBytes       *string                     `json:"num_total_logical_bytes"`
	NumTotalPhysicalBytes      *string                     `json:"num_total_physical_bytes"`
	RangePartitioning          *RangePartitioning          `json:"rangePartitioning"`
	RequirePartitionFilter     *bool                       `json:"requirePartitionFilter"`
	Schema                     *TableSchema                `json:"schema"`
	SelfLink                   *string                     `json:"selfLink"`
	SnapshotDefinition         *SnapshotDefinition         `json:"snapshotDefinition"`
	StreamingBuffer            *Streamingbuffer            `json:"streamingBuffer"`
	TableReference             *TableReference             `json:"tableReference"`
	TimePartitioning           *TimePartitioning           `json:"timePartitioning"`
	Type                       *string                     `json:"type"`
	View                       *ViewDefinition             `json:"view"`
}

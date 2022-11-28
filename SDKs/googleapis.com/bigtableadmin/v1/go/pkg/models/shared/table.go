package shared

type TableGranularityEnum string

const (
	TableGranularityEnumTimestampGranularityUnspecified TableGranularityEnum = "TIMESTAMP_GRANULARITY_UNSPECIFIED"
	TableGranularityEnumMillis                          TableGranularityEnum = "MILLIS"
)

// Table
// A collection of user data indexed by row, column, and timestamp. Each table is served using the resources of its parent cluster.
type Table struct {
	ClusterStates  map[string]ClusterState `json:"clusterStates,omitempty"`
	ColumnFamilies map[string]ColumnFamily `json:"columnFamilies,omitempty"`
	Granularity    *TableGranularityEnum   `json:"granularity,omitempty"`
	Name           *string                 `json:"name,omitempty"`
	RestoreInfo    *RestoreInfo            `json:"restoreInfo,omitempty"`
}

// TableInput
// A collection of user data indexed by row, column, and timestamp. Each table is served using the resources of its parent cluster.
type TableInput struct {
	ColumnFamilies map[string]ColumnFamily `json:"columnFamilies,omitempty"`
	Granularity    *TableGranularityEnum   `json:"granularity,omitempty"`
	Name           *string                 `json:"name,omitempty"`
	RestoreInfo    *RestoreInfo1           `json:"restoreInfo,omitempty"`
}

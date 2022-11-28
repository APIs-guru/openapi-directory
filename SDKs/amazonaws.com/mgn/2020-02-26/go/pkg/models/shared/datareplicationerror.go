package shared

// DataReplicationError
// Error in data replication.
type DataReplicationError struct {
	Error    *DataReplicationErrorStringEnum `json:"error,omitempty"`
	RawError *string                         `json:"rawError,omitempty"`
}

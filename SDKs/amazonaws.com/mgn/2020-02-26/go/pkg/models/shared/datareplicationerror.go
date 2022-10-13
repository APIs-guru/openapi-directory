package shared

type DataReplicationError struct {
	Error    *DataReplicationErrorStringEnum `json:"error"`
	RawError *string                         `json:"rawError"`
}

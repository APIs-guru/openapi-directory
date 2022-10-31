package shared



type DataReplicationError struct {
    Error *DataReplicationErrorStringEnum `json:"error,omitempty"`
    RawError *string `json:"rawError,omitempty"`
    
}


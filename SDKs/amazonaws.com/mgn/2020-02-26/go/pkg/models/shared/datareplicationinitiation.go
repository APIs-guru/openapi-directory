package shared

// DataReplicationInitiation
// Data replication initiation.
type DataReplicationInitiation struct {
	NextAttemptDateTime *string                         `json:"nextAttemptDateTime,omitempty"`
	StartDateTime       *string                         `json:"startDateTime,omitempty"`
	Steps               []DataReplicationInitiationStep `json:"steps,omitempty"`
}

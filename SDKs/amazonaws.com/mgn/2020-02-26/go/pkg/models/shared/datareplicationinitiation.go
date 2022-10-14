package shared

type DataReplicationInitiation struct {
	NextAttemptDateTime *string                         `json:"nextAttemptDateTime,omitempty"`
	StartDateTime       *string                         `json:"startDateTime,omitempty"`
	Steps               []DataReplicationInitiationStep `json:"steps,omitempty"`
}

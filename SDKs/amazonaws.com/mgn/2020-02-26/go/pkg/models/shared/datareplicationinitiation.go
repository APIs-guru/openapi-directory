package shared

type DataReplicationInitiation struct {
	NextAttemptDateTime *string                         `json:"nextAttemptDateTime"`
	StartDateTime       *string                         `json:"startDateTime"`
	Steps               []DataReplicationInitiationStep `json:"steps"`
}

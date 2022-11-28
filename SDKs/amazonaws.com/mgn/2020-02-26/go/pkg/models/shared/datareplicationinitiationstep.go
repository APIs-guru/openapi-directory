package shared

// DataReplicationInitiationStep
// Data replication intiation step.
type DataReplicationInitiationStep struct {
	Name   *DataReplicationInitiationStepNameEnum   `json:"name,omitempty"`
	Status *DataReplicationInitiationStepStatusEnum `json:"status,omitempty"`
}

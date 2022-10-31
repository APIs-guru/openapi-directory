package shared

type DataReplicationInfo struct {
	DataReplicationError      *DataReplicationError               `json:"dataReplicationError,omitempty"`
	DataReplicationInitiation *DataReplicationInitiation          `json:"dataReplicationInitiation,omitempty"`
	DataReplicationState      *DataReplicationStateEnum           `json:"dataReplicationState,omitempty"`
	EtaDateTime               *string                             `json:"etaDateTime,omitempty"`
	LagDuration               *string                             `json:"lagDuration,omitempty"`
	ReplicatedDisks           []DataReplicationInfoReplicatedDisk `json:"replicatedDisks,omitempty"`
}

package shared

type DataReplicationInfo struct {
	DataReplicationError      *DataReplicationError               `json:"dataReplicationError"`
	DataReplicationInitiation *DataReplicationInitiation          `json:"dataReplicationInitiation"`
	DataReplicationState      *DataReplicationStateEnum           `json:"dataReplicationState"`
	EtaDateTime               *string                             `json:"etaDateTime"`
	LagDuration               *string                             `json:"lagDuration"`
	ReplicatedDisks           []DataReplicationInfoReplicatedDisk `json:"replicatedDisks"`
}

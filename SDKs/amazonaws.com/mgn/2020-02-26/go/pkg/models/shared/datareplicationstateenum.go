package shared

type DataReplicationStateEnum string

const (
	DataReplicationStateEnumStopped          DataReplicationStateEnum = "STOPPED"
	DataReplicationStateEnumInitiating       DataReplicationStateEnum = "INITIATING"
	DataReplicationStateEnumInitialSync      DataReplicationStateEnum = "INITIAL_SYNC"
	DataReplicationStateEnumBacklog          DataReplicationStateEnum = "BACKLOG"
	DataReplicationStateEnumCreatingSnapshot DataReplicationStateEnum = "CREATING_SNAPSHOT"
	DataReplicationStateEnumContinuous       DataReplicationStateEnum = "CONTINUOUS"
	DataReplicationStateEnumPaused           DataReplicationStateEnum = "PAUSED"
	DataReplicationStateEnumRescan           DataReplicationStateEnum = "RESCAN"
	DataReplicationStateEnumStalled          DataReplicationStateEnum = "STALLED"
	DataReplicationStateEnumDisconnected     DataReplicationStateEnum = "DISCONNECTED"
)

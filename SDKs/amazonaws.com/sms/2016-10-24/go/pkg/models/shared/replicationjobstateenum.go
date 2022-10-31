package shared




type ReplicationJobStateEnum string

const (
    ReplicationJobStateEnumPending ReplicationJobStateEnum = "PENDING"
ReplicationJobStateEnumActive ReplicationJobStateEnum = "ACTIVE"
ReplicationJobStateEnumFailed ReplicationJobStateEnum = "FAILED"
ReplicationJobStateEnumDeleting ReplicationJobStateEnum = "DELETING"
ReplicationJobStateEnumDeleted ReplicationJobStateEnum = "DELETED"
ReplicationJobStateEnumCompleted ReplicationJobStateEnum = "COMPLETED"
ReplicationJobStateEnumPausedOnFailure ReplicationJobStateEnum = "PAUSED_ON_FAILURE"
ReplicationJobStateEnumFailing ReplicationJobStateEnum = "FAILING"
)



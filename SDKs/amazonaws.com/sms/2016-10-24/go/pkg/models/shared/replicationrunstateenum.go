package shared




type ReplicationRunStateEnum string

const (
    ReplicationRunStateEnumPending ReplicationRunStateEnum = "PENDING"
ReplicationRunStateEnumMissed ReplicationRunStateEnum = "MISSED"
ReplicationRunStateEnumActive ReplicationRunStateEnum = "ACTIVE"
ReplicationRunStateEnumFailed ReplicationRunStateEnum = "FAILED"
ReplicationRunStateEnumCompleted ReplicationRunStateEnum = "COMPLETED"
ReplicationRunStateEnumDeleting ReplicationRunStateEnum = "DELETING"
ReplicationRunStateEnumDeleted ReplicationRunStateEnum = "DELETED"
)



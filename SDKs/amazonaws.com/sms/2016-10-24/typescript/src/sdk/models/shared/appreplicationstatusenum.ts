


export enum AppReplicationStatusEnum {
    ReadyForConfiguration = "READY_FOR_CONFIGURATION",
    ConfigurationInProgress = "CONFIGURATION_IN_PROGRESS",
    ConfigurationInvalid = "CONFIGURATION_INVALID",
    ReadyForReplication = "READY_FOR_REPLICATION",
    ValidationInProgress = "VALIDATION_IN_PROGRESS",
    ReplicationPending = "REPLICATION_PENDING",
    ReplicationInProgress = "REPLICATION_IN_PROGRESS",
    Replicated = "REPLICATED",
    PartiallyReplicated = "PARTIALLY_REPLICATED",
    DeltaReplicationInProgress = "DELTA_REPLICATION_IN_PROGRESS",
    DeltaReplicated = "DELTA_REPLICATED",
    DeltaReplicationFailed = "DELTA_REPLICATION_FAILED",
    ReplicationFailed = "REPLICATION_FAILED",
    ReplicationStopping = "REPLICATION_STOPPING",
    ReplicationStopFailed = "REPLICATION_STOP_FAILED",
    ReplicationStopped = "REPLICATION_STOPPED"
}

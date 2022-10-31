package shared

type AppReplicationStatusEnum string

const (
	AppReplicationStatusEnumReadyForConfiguration      AppReplicationStatusEnum = "READY_FOR_CONFIGURATION"
	AppReplicationStatusEnumConfigurationInProgress    AppReplicationStatusEnum = "CONFIGURATION_IN_PROGRESS"
	AppReplicationStatusEnumConfigurationInvalid       AppReplicationStatusEnum = "CONFIGURATION_INVALID"
	AppReplicationStatusEnumReadyForReplication        AppReplicationStatusEnum = "READY_FOR_REPLICATION"
	AppReplicationStatusEnumValidationInProgress       AppReplicationStatusEnum = "VALIDATION_IN_PROGRESS"
	AppReplicationStatusEnumReplicationPending         AppReplicationStatusEnum = "REPLICATION_PENDING"
	AppReplicationStatusEnumReplicationInProgress      AppReplicationStatusEnum = "REPLICATION_IN_PROGRESS"
	AppReplicationStatusEnumReplicated                 AppReplicationStatusEnum = "REPLICATED"
	AppReplicationStatusEnumPartiallyReplicated        AppReplicationStatusEnum = "PARTIALLY_REPLICATED"
	AppReplicationStatusEnumDeltaReplicationInProgress AppReplicationStatusEnum = "DELTA_REPLICATION_IN_PROGRESS"
	AppReplicationStatusEnumDeltaReplicated            AppReplicationStatusEnum = "DELTA_REPLICATED"
	AppReplicationStatusEnumDeltaReplicationFailed     AppReplicationStatusEnum = "DELTA_REPLICATION_FAILED"
	AppReplicationStatusEnumReplicationFailed          AppReplicationStatusEnum = "REPLICATION_FAILED"
	AppReplicationStatusEnumReplicationStopping        AppReplicationStatusEnum = "REPLICATION_STOPPING"
	AppReplicationStatusEnumReplicationStopFailed      AppReplicationStatusEnum = "REPLICATION_STOP_FAILED"
	AppReplicationStatusEnumReplicationStopped         AppReplicationStatusEnum = "REPLICATION_STOPPED"
)

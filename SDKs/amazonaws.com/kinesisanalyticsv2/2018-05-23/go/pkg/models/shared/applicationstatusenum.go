package shared




type ApplicationStatusEnum string

const (
    ApplicationStatusEnumDeleting ApplicationStatusEnum = "DELETING"
ApplicationStatusEnumStarting ApplicationStatusEnum = "STARTING"
ApplicationStatusEnumStopping ApplicationStatusEnum = "STOPPING"
ApplicationStatusEnumReady ApplicationStatusEnum = "READY"
ApplicationStatusEnumRunning ApplicationStatusEnum = "RUNNING"
ApplicationStatusEnumUpdating ApplicationStatusEnum = "UPDATING"
ApplicationStatusEnumAutoscaling ApplicationStatusEnum = "AUTOSCALING"
ApplicationStatusEnumForceStopping ApplicationStatusEnum = "FORCE_STOPPING"
ApplicationStatusEnumMaintenance ApplicationStatusEnum = "MAINTENANCE"
ApplicationStatusEnumRollingBack ApplicationStatusEnum = "ROLLING_BACK"
ApplicationStatusEnumRolledBack ApplicationStatusEnum = "ROLLED_BACK"
)



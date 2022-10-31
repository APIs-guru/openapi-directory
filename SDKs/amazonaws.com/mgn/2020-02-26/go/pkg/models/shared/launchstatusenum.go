package shared




type LaunchStatusEnum string

const (
    LaunchStatusEnumPending LaunchStatusEnum = "PENDING"
LaunchStatusEnumInProgress LaunchStatusEnum = "IN_PROGRESS"
LaunchStatusEnumLaunched LaunchStatusEnum = "LAUNCHED"
LaunchStatusEnumFailed LaunchStatusEnum = "FAILED"
LaunchStatusEnumTerminated LaunchStatusEnum = "TERMINATED"
)



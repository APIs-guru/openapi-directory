package shared




type StreamProcessorStatusEnum string

const (
    StreamProcessorStatusEnumStopped StreamProcessorStatusEnum = "STOPPED"
StreamProcessorStatusEnumStarting StreamProcessorStatusEnum = "STARTING"
StreamProcessorStatusEnumRunning StreamProcessorStatusEnum = "RUNNING"
StreamProcessorStatusEnumFailed StreamProcessorStatusEnum = "FAILED"
StreamProcessorStatusEnumStopping StreamProcessorStatusEnum = "STOPPING"
)



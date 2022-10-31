package shared




type StateEnum string

const (
    StateEnumOffline StateEnum = "OFFLINE"
StateEnumOnline StateEnum = "ONLINE"
StateEnumStarting StateEnum = "STARTING"
StateEnumStopping StateEnum = "STOPPING"
StateEnumStartFailed StateEnum = "START_FAILED"
StateEnumStopFailed StateEnum = "STOP_FAILED"
)



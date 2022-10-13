package shared

type LifeCycleStateEnum string

const (
	LifeCycleStateEnumStopped         LifeCycleStateEnum = "STOPPED"
	LifeCycleStateEnumNotReady        LifeCycleStateEnum = "NOT_READY"
	LifeCycleStateEnumReadyForTest    LifeCycleStateEnum = "READY_FOR_TEST"
	LifeCycleStateEnumTesting         LifeCycleStateEnum = "TESTING"
	LifeCycleStateEnumReadyForCutover LifeCycleStateEnum = "READY_FOR_CUTOVER"
	LifeCycleStateEnumCuttingOver     LifeCycleStateEnum = "CUTTING_OVER"
	LifeCycleStateEnumCutover         LifeCycleStateEnum = "CUTOVER"
	LifeCycleStateEnumDisconnected    LifeCycleStateEnum = "DISCONNECTED"
)

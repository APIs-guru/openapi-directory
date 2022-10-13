package shared

type SimulationJobBatchStatusEnum string

const (
	SimulationJobBatchStatusEnumPending    SimulationJobBatchStatusEnum = "Pending"
	SimulationJobBatchStatusEnumInProgress SimulationJobBatchStatusEnum = "InProgress"
	SimulationJobBatchStatusEnumFailed     SimulationJobBatchStatusEnum = "Failed"
	SimulationJobBatchStatusEnumCompleted  SimulationJobBatchStatusEnum = "Completed"
	SimulationJobBatchStatusEnumCanceled   SimulationJobBatchStatusEnum = "Canceled"
	SimulationJobBatchStatusEnumCanceling  SimulationJobBatchStatusEnum = "Canceling"
	SimulationJobBatchStatusEnumCompleting SimulationJobBatchStatusEnum = "Completing"
	SimulationJobBatchStatusEnumTimingOut  SimulationJobBatchStatusEnum = "TimingOut"
	SimulationJobBatchStatusEnumTimedOut   SimulationJobBatchStatusEnum = "TimedOut"
)

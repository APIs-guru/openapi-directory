package shared




type SimulationJobStatusEnum string

const (
    SimulationJobStatusEnumPending SimulationJobStatusEnum = "Pending"
SimulationJobStatusEnumPreparing SimulationJobStatusEnum = "Preparing"
SimulationJobStatusEnumRunning SimulationJobStatusEnum = "Running"
SimulationJobStatusEnumRestarting SimulationJobStatusEnum = "Restarting"
SimulationJobStatusEnumCompleted SimulationJobStatusEnum = "Completed"
SimulationJobStatusEnumFailed SimulationJobStatusEnum = "Failed"
SimulationJobStatusEnumRunningFailed SimulationJobStatusEnum = "RunningFailed"
SimulationJobStatusEnumTerminating SimulationJobStatusEnum = "Terminating"
SimulationJobStatusEnumTerminated SimulationJobStatusEnum = "Terminated"
SimulationJobStatusEnumCanceled SimulationJobStatusEnum = "Canceled"
)



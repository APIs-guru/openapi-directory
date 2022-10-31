package shared

type MaintenanceWindowExecutionStatusEnum string

const (
	MaintenanceWindowExecutionStatusEnumPending            MaintenanceWindowExecutionStatusEnum = "PENDING"
	MaintenanceWindowExecutionStatusEnumInProgress         MaintenanceWindowExecutionStatusEnum = "IN_PROGRESS"
	MaintenanceWindowExecutionStatusEnumSuccess            MaintenanceWindowExecutionStatusEnum = "SUCCESS"
	MaintenanceWindowExecutionStatusEnumFailed             MaintenanceWindowExecutionStatusEnum = "FAILED"
	MaintenanceWindowExecutionStatusEnumTimedOut           MaintenanceWindowExecutionStatusEnum = "TIMED_OUT"
	MaintenanceWindowExecutionStatusEnumCancelling         MaintenanceWindowExecutionStatusEnum = "CANCELLING"
	MaintenanceWindowExecutionStatusEnumCancelled          MaintenanceWindowExecutionStatusEnum = "CANCELLED"
	MaintenanceWindowExecutionStatusEnumSkippedOverlapping MaintenanceWindowExecutionStatusEnum = "SKIPPED_OVERLAPPING"
)

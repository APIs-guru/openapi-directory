package shared

type ServiceStatusEnum string

const (
	ServiceStatusEnumCreateInProgress              ServiceStatusEnum = "CREATE_IN_PROGRESS"
	ServiceStatusEnumCreateFailedCleanupInProgress ServiceStatusEnum = "CREATE_FAILED_CLEANUP_IN_PROGRESS"
	ServiceStatusEnumCreateFailedCleanupComplete   ServiceStatusEnum = "CREATE_FAILED_CLEANUP_COMPLETE"
	ServiceStatusEnumCreateFailedCleanupFailed     ServiceStatusEnum = "CREATE_FAILED_CLEANUP_FAILED"
	ServiceStatusEnumCreateFailed                  ServiceStatusEnum = "CREATE_FAILED"
	ServiceStatusEnumActive                        ServiceStatusEnum = "ACTIVE"
	ServiceStatusEnumDeleteInProgress              ServiceStatusEnum = "DELETE_IN_PROGRESS"
	ServiceStatusEnumDeleteFailed                  ServiceStatusEnum = "DELETE_FAILED"
	ServiceStatusEnumUpdateInProgress              ServiceStatusEnum = "UPDATE_IN_PROGRESS"
	ServiceStatusEnumUpdateFailedCleanupInProgress ServiceStatusEnum = "UPDATE_FAILED_CLEANUP_IN_PROGRESS"
	ServiceStatusEnumUpdateFailedCleanupComplete   ServiceStatusEnum = "UPDATE_FAILED_CLEANUP_COMPLETE"
	ServiceStatusEnumUpdateFailedCleanupFailed     ServiceStatusEnum = "UPDATE_FAILED_CLEANUP_FAILED"
	ServiceStatusEnumUpdateFailed                  ServiceStatusEnum = "UPDATE_FAILED"
	ServiceStatusEnumUpdateCompleteCleanupFailed   ServiceStatusEnum = "UPDATE_COMPLETE_CLEANUP_FAILED"
)

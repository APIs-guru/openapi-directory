package shared

type JobLogEventEnum string

const (
	JobLogEventEnumJobStart              JobLogEventEnum = "JOB_START"
	JobLogEventEnumServerSkipped         JobLogEventEnum = "SERVER_SKIPPED"
	JobLogEventEnumCleanupStart          JobLogEventEnum = "CLEANUP_START"
	JobLogEventEnumCleanupEnd            JobLogEventEnum = "CLEANUP_END"
	JobLogEventEnumCleanupFail           JobLogEventEnum = "CLEANUP_FAIL"
	JobLogEventEnumSnapshotStart         JobLogEventEnum = "SNAPSHOT_START"
	JobLogEventEnumSnapshotEnd           JobLogEventEnum = "SNAPSHOT_END"
	JobLogEventEnumSnapshotFail          JobLogEventEnum = "SNAPSHOT_FAIL"
	JobLogEventEnumUsingPreviousSnapshot JobLogEventEnum = "USING_PREVIOUS_SNAPSHOT"
	JobLogEventEnumConversionStart       JobLogEventEnum = "CONVERSION_START"
	JobLogEventEnumConversionEnd         JobLogEventEnum = "CONVERSION_END"
	JobLogEventEnumConversionFail        JobLogEventEnum = "CONVERSION_FAIL"
	JobLogEventEnumLaunchStart           JobLogEventEnum = "LAUNCH_START"
	JobLogEventEnumLaunchFailed          JobLogEventEnum = "LAUNCH_FAILED"
	JobLogEventEnumJobCancel             JobLogEventEnum = "JOB_CANCEL"
	JobLogEventEnumJobEnd                JobLogEventEnum = "JOB_END"
)



export enum JobLogEventEnum {
    JobStart = "JOB_START"
,    ServerSkipped = "SERVER_SKIPPED"
,    CleanupStart = "CLEANUP_START"
,    CleanupEnd = "CLEANUP_END"
,    CleanupFail = "CLEANUP_FAIL"
,    SnapshotStart = "SNAPSHOT_START"
,    SnapshotEnd = "SNAPSHOT_END"
,    SnapshotFail = "SNAPSHOT_FAIL"
,    UsingPreviousSnapshot = "USING_PREVIOUS_SNAPSHOT"
,    ConversionStart = "CONVERSION_START"
,    ConversionEnd = "CONVERSION_END"
,    ConversionFail = "CONVERSION_FAIL"
,    LaunchStart = "LAUNCH_START"
,    LaunchFailed = "LAUNCH_FAILED"
,    JobCancel = "JOB_CANCEL"
,    JobEnd = "JOB_END"
}

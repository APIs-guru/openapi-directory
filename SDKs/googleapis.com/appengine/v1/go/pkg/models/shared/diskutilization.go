package shared

type DiskUtilization struct {
	TargetReadBytesPerSecond  *int32 `json:"targetReadBytesPerSecond"`
	TargetReadOpsPerSecond    *int32 `json:"targetReadOpsPerSecond"`
	TargetWriteBytesPerSecond *int32 `json:"targetWriteBytesPerSecond"`
	TargetWriteOpsPerSecond   *int32 `json:"targetWriteOpsPerSecond"`
}

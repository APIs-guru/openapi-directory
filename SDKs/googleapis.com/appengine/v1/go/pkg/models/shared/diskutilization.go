package shared



type DiskUtilization struct {
    TargetReadBytesPerSecond *int32 `json:"targetReadBytesPerSecond,omitempty"`
    TargetReadOpsPerSecond *int32 `json:"targetReadOpsPerSecond,omitempty"`
    TargetWriteBytesPerSecond *int32 `json:"targetWriteBytesPerSecond,omitempty"`
    TargetWriteOpsPerSecond *int32 `json:"targetWriteOpsPerSecond,omitempty"`
    
}


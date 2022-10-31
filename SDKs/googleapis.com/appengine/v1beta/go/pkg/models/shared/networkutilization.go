package shared



type NetworkUtilization struct {
    TargetReceivedBytesPerSecond *int32 `json:"targetReceivedBytesPerSecond,omitempty"`
    TargetReceivedPacketsPerSecond *int32 `json:"targetReceivedPacketsPerSecond,omitempty"`
    TargetSentBytesPerSecond *int32 `json:"targetSentBytesPerSecond,omitempty"`
    TargetSentPacketsPerSecond *int32 `json:"targetSentPacketsPerSecond,omitempty"`
    
}


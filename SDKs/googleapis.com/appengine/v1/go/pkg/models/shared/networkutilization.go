package shared

type NetworkUtilization struct {
	TargetReceivedBytesPerSecond   *int32 `json:"targetReceivedBytesPerSecond"`
	TargetReceivedPacketsPerSecond *int32 `json:"targetReceivedPacketsPerSecond"`
	TargetSentBytesPerSecond       *int32 `json:"targetSentBytesPerSecond"`
	TargetSentPacketsPerSecond     *int32 `json:"targetSentPacketsPerSecond"`
}

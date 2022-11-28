package shared

// NetworkUtilization
// Target scaling by network usage. Only applicable in the App Engine flexible environment.
type NetworkUtilization struct {
	TargetReceivedBytesPerSecond   *int32 `json:"targetReceivedBytesPerSecond,omitempty"`
	TargetReceivedPacketsPerSecond *int32 `json:"targetReceivedPacketsPerSecond,omitempty"`
	TargetSentBytesPerSecond       *int32 `json:"targetSentBytesPerSecond,omitempty"`
	TargetSentPacketsPerSecond     *int32 `json:"targetSentPacketsPerSecond,omitempty"`
}

package shared

// JourneyLimits
// Specifies limits on the messages that a journey can send and the number of times participants can enter a journey.
type JourneyLimits struct {
	DailyCap                *int64  `json:"DailyCap,omitempty"`
	EndpointReentryCap      *int64  `json:"EndpointReentryCap,omitempty"`
	EndpointReentryInterval *string `json:"EndpointReentryInterval,omitempty"`
	MessagesPerSecond       *int64  `json:"MessagesPerSecond,omitempty"`
}

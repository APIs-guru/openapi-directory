package shared

type JourneyLimits struct {
	DailyCap                *int64  `json:"DailyCap"`
	EndpointReentryCap      *int64  `json:"EndpointReentryCap"`
	EndpointReentryInterval *string `json:"EndpointReentryInterval"`
	MessagesPerSecond       *int64  `json:"MessagesPerSecond"`
}

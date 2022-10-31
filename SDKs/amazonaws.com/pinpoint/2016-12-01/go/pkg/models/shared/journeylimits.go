package shared



type JourneyLimits struct {
    DailyCap *int64 `json:"DailyCap,omitempty"`
    EndpointReentryCap *int64 `json:"EndpointReentryCap,omitempty"`
    EndpointReentryInterval *string `json:"EndpointReentryInterval,omitempty"`
    MessagesPerSecond *int64 `json:"MessagesPerSecond,omitempty"`
    
}


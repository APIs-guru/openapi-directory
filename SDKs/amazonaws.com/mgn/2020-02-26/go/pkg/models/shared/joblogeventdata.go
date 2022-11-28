package shared

// JobLogEventData
// Job log data
type JobLogEventData struct {
	ConversionServerID *string `json:"conversionServerID,omitempty"`
	RawError           *string `json:"rawError,omitempty"`
	SourceServerID     *string `json:"sourceServerID,omitempty"`
	TargetInstanceID   *string `json:"targetInstanceID,omitempty"`
}

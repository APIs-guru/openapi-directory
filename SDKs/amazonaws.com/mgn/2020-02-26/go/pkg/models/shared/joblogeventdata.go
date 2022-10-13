package shared

type JobLogEventData struct {
	ConversionServerID *string `json:"conversionServerID"`
	RawError           *string `json:"rawError"`
	SourceServerID     *string `json:"sourceServerID"`
	TargetInstanceID   *string `json:"targetInstanceID"`
}

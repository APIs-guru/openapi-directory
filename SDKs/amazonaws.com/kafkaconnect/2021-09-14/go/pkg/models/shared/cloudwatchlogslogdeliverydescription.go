package shared

// CloudWatchLogsLogDeliveryDescription
// A description of the log delivery settings.
type CloudWatchLogsLogDeliveryDescription struct {
	Enabled  *bool   `json:"enabled,omitempty"`
	LogGroup *string `json:"logGroup,omitempty"`
}

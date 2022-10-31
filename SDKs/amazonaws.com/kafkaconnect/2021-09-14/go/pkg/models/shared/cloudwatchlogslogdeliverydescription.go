package shared

type CloudWatchLogsLogDeliveryDescription struct {
	Enabled  *bool   `json:"enabled,omitempty"`
	LogGroup *string `json:"logGroup,omitempty"`
}

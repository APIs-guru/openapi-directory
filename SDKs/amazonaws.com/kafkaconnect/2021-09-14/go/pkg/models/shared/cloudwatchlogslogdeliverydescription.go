package shared

type CloudWatchLogsLogDeliveryDescription struct {
	Enabled  *bool   `json:"enabled"`
	LogGroup *string `json:"logGroup"`
}

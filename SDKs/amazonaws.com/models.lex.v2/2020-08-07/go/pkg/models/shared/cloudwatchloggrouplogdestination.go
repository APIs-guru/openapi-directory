package shared

// CloudWatchLogGroupLogDestination
// The Amazon CloudWatch Logs log group where the text and metadata logs are delivered. The log group must exist before you enable logging.
type CloudWatchLogGroupLogDestination struct {
	CloudWatchLogGroupArn string `json:"cloudWatchLogGroupArn"`
	LogPrefix             string `json:"logPrefix"`
}

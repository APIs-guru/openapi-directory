package shared

// AudioLogDestination
// The location of audio log files collected when conversation logging is enabled for a bot.
type AudioLogDestination struct {
	S3Bucket S3BucketLogDestination `json:"s3Bucket"`
}

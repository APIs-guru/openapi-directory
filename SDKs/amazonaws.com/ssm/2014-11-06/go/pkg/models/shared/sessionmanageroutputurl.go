package shared

type SessionManagerOutputURL struct {
	CloudWatchOutputURL *string `json:"CloudWatchOutputUrl"`
	S3OutputURL         *string `json:"S3OutputUrl"`
}

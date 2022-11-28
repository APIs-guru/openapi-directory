package shared

// AudioLogSetting
// Settings for logging audio of conversations between Amazon Lex and a user. You specify whether to log audio and the Amazon S3 bucket where the audio file is stored.
type AudioLogSetting struct {
	Destination AudioLogDestination `json:"destination"`
	Enabled     bool                `json:"enabled"`
}

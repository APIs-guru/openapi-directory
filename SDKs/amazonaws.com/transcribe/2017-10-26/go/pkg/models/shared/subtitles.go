package shared

// Subtitles
// Generate subtitles for your batch transcription job.
type Subtitles struct {
	Formats []SubtitleFormatEnum `json:"Formats,omitempty"`
}

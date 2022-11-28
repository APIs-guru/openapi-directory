package shared

// SubtitlesOutput
// Specify the output format for your subtitle file.
type SubtitlesOutput struct {
	Formats          []SubtitleFormatEnum `json:"Formats,omitempty"`
	SubtitleFileUris []string             `json:"SubtitleFileUris,omitempty"`
}

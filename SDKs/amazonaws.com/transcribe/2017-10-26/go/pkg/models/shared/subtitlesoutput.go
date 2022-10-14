package shared

type SubtitlesOutput struct {
	Formats          []SubtitleFormatEnum `json:"Formats,omitempty"`
	SubtitleFileUris []string             `json:"SubtitleFileUris,omitempty"`
}

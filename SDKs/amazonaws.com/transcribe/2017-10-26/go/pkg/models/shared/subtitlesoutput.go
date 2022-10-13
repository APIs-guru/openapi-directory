package shared

type SubtitlesOutput struct {
	Formats          []SubtitleFormatEnum `json:"Formats"`
	SubtitleFileUris []string             `json:"SubtitleFileUris"`
}

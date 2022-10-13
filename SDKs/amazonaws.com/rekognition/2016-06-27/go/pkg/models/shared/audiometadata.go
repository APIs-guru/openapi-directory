package shared

type AudioMetadata struct {
	Codec            *string `json:"Codec"`
	DurationMillis   *int64  `json:"DurationMillis"`
	NumberOfChannels *int64  `json:"NumberOfChannels"`
	SampleRate       *int64  `json:"SampleRate"`
}

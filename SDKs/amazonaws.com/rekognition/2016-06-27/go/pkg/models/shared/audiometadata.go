package shared

type AudioMetadata struct {
	Codec            *string `json:"Codec,omitempty"`
	DurationMillis   *int64  `json:"DurationMillis,omitempty"`
	NumberOfChannels *int64  `json:"NumberOfChannels,omitempty"`
	SampleRate       *int64  `json:"SampleRate,omitempty"`
}

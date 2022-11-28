package shared

// AudioMetadata
// Metadata information about an audio stream. An array of <code>AudioMetadata</code> objects for the audio streams found in a stored video is returned by <a>GetSegmentDetection</a>.
type AudioMetadata struct {
	Codec            *string `json:"Codec,omitempty"`
	DurationMillis   *int64  `json:"DurationMillis,omitempty"`
	NumberOfChannels *int64  `json:"NumberOfChannels,omitempty"`
	SampleRate       *int64  `json:"SampleRate,omitempty"`
}

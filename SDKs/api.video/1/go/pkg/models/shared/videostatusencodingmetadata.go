package shared

type VideostatusEncodingMetadata struct {
	AspectRatio *string  `json:"aspectRatio"`
	AudioCodec  *string  `json:"audioCodec"`
	Bitrate     *float64 `json:"bitrate"`
	Duration    *int64   `json:"duration"`
	Framerate   *int64   `json:"framerate"`
	Height      *int64   `json:"height"`
	Samplerate  *int64   `json:"samplerate"`
	VideoCodec  *string  `json:"videoCodec"`
	Width       *int64   `json:"width"`
}

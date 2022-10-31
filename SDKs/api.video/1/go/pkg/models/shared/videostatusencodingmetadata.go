package shared



type VideostatusEncodingMetadata struct {
    AspectRatio *string `json:"aspectRatio,omitempty"`
    AudioCodec *string `json:"audioCodec,omitempty"`
    Bitrate *float64 `json:"bitrate,omitempty"`
    Duration *int64 `json:"duration,omitempty"`
    Framerate *int64 `json:"framerate,omitempty"`
    Height *int64 `json:"height,omitempty"`
    Samplerate *int64 `json:"samplerate,omitempty"`
    VideoCodec *string `json:"videoCodec,omitempty"`
    Width *int64 `json:"width,omitempty"`
    
}


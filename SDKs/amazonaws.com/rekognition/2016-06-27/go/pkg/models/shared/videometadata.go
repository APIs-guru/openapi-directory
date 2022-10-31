package shared



type VideoMetadata struct {
    Codec *string `json:"Codec,omitempty"`
    ColorRange *VideoColorRangeEnum `json:"ColorRange,omitempty"`
    DurationMillis *int64 `json:"DurationMillis,omitempty"`
    Format *string `json:"Format,omitempty"`
    FrameHeight *int64 `json:"FrameHeight,omitempty"`
    FrameRate *float32 `json:"FrameRate,omitempty"`
    FrameWidth *int64 `json:"FrameWidth,omitempty"`
    
}


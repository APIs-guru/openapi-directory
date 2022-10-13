package shared

type VideoMetadata struct {
	Codec          *string              `json:"Codec"`
	ColorRange     *VideoColorRangeEnum `json:"ColorRange"`
	DurationMillis *int64               `json:"DurationMillis"`
	Format         *string              `json:"Format"`
	FrameHeight    *int64               `json:"FrameHeight"`
	FrameRate      *float32             `json:"FrameRate"`
	FrameWidth     *int64               `json:"FrameWidth"`
}

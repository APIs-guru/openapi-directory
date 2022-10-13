package shared

type LiveStream struct {
	Assets       *LiveStreamAssets `json:"assets"`
	Broadcasting *bool             `json:"broadcasting"`
	LiveStreamID *string           `json:"liveStreamId"`
	Name         *string           `json:"name"`
	PlayerID     *string           `json:"playerId"`
	Public       *bool             `json:"public"`
	Record       *bool             `json:"record"`
	StreamKey    *string           `json:"streamKey"`
}

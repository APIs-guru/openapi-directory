package shared

type VideoSource struct {
	LiveStream *VideoSourceLiveStream `json:"liveStream"`
	Type       *string                `json:"type"`
	URI        *string                `json:"uri"`
}

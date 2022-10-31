package shared

type VideoSourceLiveStream struct {
	Links        []VideoSourceLiveStreamLink `json:"links,omitempty"`
	LiveStreamID *string                     `json:"liveStreamId,omitempty"`
}

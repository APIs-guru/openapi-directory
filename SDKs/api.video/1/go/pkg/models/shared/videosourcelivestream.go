package shared

// VideoSourceLiveStream
// This appears if the video is from a Live Record.
type VideoSourceLiveStream struct {
	Links        []VideoSourceLiveStreamLink `json:"links,omitempty"`
	LiveStreamID *string                     `json:"liveStreamId,omitempty"`
}

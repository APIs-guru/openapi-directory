package shared

type VideoSourceLiveStream struct {
	Links        []VideoSourceLiveStreamLink `json:"links"`
	LiveStreamID *string                     `json:"liveStreamId"`
}

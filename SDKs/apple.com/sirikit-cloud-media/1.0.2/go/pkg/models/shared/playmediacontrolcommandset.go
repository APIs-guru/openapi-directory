package shared

type PlayMediaControlCommandSet struct {
	BookmarkTrack          *bool `json:"bookmarkTrack"`
	DislikeTrack           *bool `json:"dislikeTrack"`
	LikeTrack              *bool `json:"likeTrack"`
	NextTrack              *bool `json:"nextTrack"`
	PreferSkipBackward     *bool `json:"preferSkipBackward"`
	PreferSkipForward      *bool `json:"preferSkipForward"`
	PreviousTrack          *bool `json:"previousTrack"`
	SeekToPlaybackPosition *bool `json:"seekToPlaybackPosition"`
	SkipBackward           *bool `json:"skipBackward"`
	SkipForward            *bool `json:"skipForward"`
}

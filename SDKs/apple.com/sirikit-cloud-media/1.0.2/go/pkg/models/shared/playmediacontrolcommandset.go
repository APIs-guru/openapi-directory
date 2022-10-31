package shared



type PlayMediaControlCommandSet struct {
    BookmarkTrack *bool `json:"bookmarkTrack,omitempty"`
    DislikeTrack *bool `json:"dislikeTrack,omitempty"`
    LikeTrack *bool `json:"likeTrack,omitempty"`
    NextTrack *bool `json:"nextTrack,omitempty"`
    PreferSkipBackward *bool `json:"preferSkipBackward,omitempty"`
    PreferSkipForward *bool `json:"preferSkipForward,omitempty"`
    PreviousTrack *bool `json:"previousTrack,omitempty"`
    SeekToPlaybackPosition *bool `json:"seekToPlaybackPosition,omitempty"`
    SkipBackward *bool `json:"skipBackward,omitempty"`
    SkipForward *bool `json:"skipForward,omitempty"`
    
}


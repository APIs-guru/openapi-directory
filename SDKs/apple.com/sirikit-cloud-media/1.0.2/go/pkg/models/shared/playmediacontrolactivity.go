package shared



type PlayMediaControlActivity struct {
    PlayElapsed *int64 `json:"playElapsed,omitempty"`
    PlayElapsedInterval *int64 `json:"playElapsedInterval,omitempty"`
    PlayPaused *int64 `json:"playPaused,omitempty"`
    
}


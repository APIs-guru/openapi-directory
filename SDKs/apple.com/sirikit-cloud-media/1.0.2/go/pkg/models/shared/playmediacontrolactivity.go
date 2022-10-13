package shared

type PlayMediaControlActivity struct {
	PlayElapsed         *int64 `json:"playElapsed"`
	PlayElapsedInterval *int64 `json:"playElapsedInterval"`
	PlayPaused          *int64 `json:"playPaused"`
}

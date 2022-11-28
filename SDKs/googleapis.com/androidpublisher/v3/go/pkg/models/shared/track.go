package shared

// Track
// A track configuration. The resource for TracksService.
type Track struct {
	Releases []TrackRelease `json:"releases,omitempty"`
	Track    *string        `json:"track,omitempty"`
}

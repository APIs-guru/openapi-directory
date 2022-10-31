package shared

type Track struct {
	Releases []TrackRelease `json:"releases,omitempty"`
	Track    *string        `json:"track,omitempty"`
}

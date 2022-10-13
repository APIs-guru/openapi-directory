package shared

type Track struct {
	Releases []TrackRelease `json:"releases"`
	Track    *string        `json:"track"`
}

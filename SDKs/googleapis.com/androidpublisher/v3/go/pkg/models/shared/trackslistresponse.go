package shared

// TracksListResponse
// Response listing all tracks.
type TracksListResponse struct {
	Kind   *string `json:"kind,omitempty"`
	Tracks []Track `json:"tracks,omitempty"`
}

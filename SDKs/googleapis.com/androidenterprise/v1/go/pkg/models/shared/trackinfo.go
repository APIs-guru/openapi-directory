package shared

// TrackInfo
// Id to name association of a track.
type TrackInfo struct {
	TrackAlias *string `json:"trackAlias,omitempty"`
	TrackID    *string `json:"trackId,omitempty"`
}

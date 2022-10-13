package shared

type VideoStreamingPlaylistsRedundancies struct {
	BaseURL *string `json:"baseUrl"`
}

type VideoStreamingPlaylists struct {
	Files             []interface{}                         `json:"files"`
	ID                *int64                                `json:"id"`
	PlaylistURL       *string                               `json:"playlistUrl"`
	Redundancies      []VideoStreamingPlaylistsRedundancies `json:"redundancies"`
	SegmentsSha256URL *string                               `json:"segmentsSha256Url"`
	Type              *int64                                `json:"type"`
}

package shared

type VideoStreamingPlaylistsRedundancies struct {
	BaseURL *string `json:"baseUrl,omitempty"`
}

type VideoStreamingPlaylists struct {
	Files             []interface{}                         `json:"files,omitempty"`
	ID                *int64                                `json:"id,omitempty"`
	PlaylistURL       *string                               `json:"playlistUrl,omitempty"`
	Redundancies      []VideoStreamingPlaylistsRedundancies `json:"redundancies,omitempty"`
	SegmentsSha256URL *string                               `json:"segmentsSha256Url,omitempty"`
	Type              *int64                                `json:"type,omitempty"`
}

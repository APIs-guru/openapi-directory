package shared

type ContentAttributesArtwork struct {
	URL *string `json:"url,omitempty"`
}

type ContentAttributes struct {
	AlbumName        *string                   `json:"albumName,omitempty"`
	ArtistName       *string                   `json:"artistName,omitempty"`
	Artwork          *ContentAttributesArtwork `json:"artwork,omitempty"`
	ComposerName     *string                   `json:"composerName,omitempty"`
	DurationInMillis *int64                    `json:"durationInMillis,omitempty"`
	GenreNames       []string                  `json:"genreNames,omitempty"`
	Name             *string                   `json:"name,omitempty"`
	TrackNumber      *int64                    `json:"trackNumber,omitempty"`
}

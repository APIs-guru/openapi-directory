package shared

type ContentAttributesArtwork struct {
	URL *string `json:"url"`
}

type ContentAttributes struct {
	AlbumName        *string                   `json:"albumName"`
	ArtistName       *string                   `json:"artistName"`
	Artwork          *ContentAttributesArtwork `json:"artwork"`
	ComposerName     *string                   `json:"composerName"`
	DurationInMillis *int64                    `json:"durationInMillis"`
	GenreNames       []string                  `json:"genreNames"`
	Name             *string                   `json:"name"`
	TrackNumber      *int64                    `json:"trackNumber"`
}

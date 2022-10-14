package shared

type APIResponseSimilarityResponseSimilarityList struct {
	ArtistName *string  `json:"artist_name,omitempty"`
	ArtistURL  *string  `json:"artist_url,omitempty"`
	ID         *int64   `json:"id,omitempty"`
	IndexID    *int64   `json:"index_id,omitempty"`
	Lyrics     *string  `json:"lyrics,omitempty"`
	Percentage *float32 `json:"percentage,omitempty"`
	SongName   *string  `json:"song_name,omitempty"`
	SongURL    *string  `json:"song_url,omitempty"`
}

type APIResponseSimilarityResponse struct {
	SimilarityList []APIResponseSimilarityResponseSimilarityList `json:"similarity_list,omitempty"`
}

type APIResponseSimilarity struct {
	Error    *bool                          `json:"error,omitempty"`
	Message  *string                        `json:"message,omitempty"`
	Response *APIResponseSimilarityResponse `json:"response,omitempty"`
}

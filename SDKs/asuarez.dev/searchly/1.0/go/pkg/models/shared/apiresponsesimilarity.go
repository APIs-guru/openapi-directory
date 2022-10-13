package shared

type APIResponseSimilarityResponseSimilarityList struct {
	ArtistName *string  `json:"artist_name"`
	ArtistURL  *string  `json:"artist_url"`
	ID         *int64   `json:"id"`
	IndexID    *int64   `json:"index_id"`
	Lyrics     *string  `json:"lyrics"`
	Percentage *float32 `json:"percentage"`
	SongName   *string  `json:"song_name"`
	SongURL    *string  `json:"song_url"`
}

type APIResponseSimilarityResponse struct {
	SimilarityList []APIResponseSimilarityResponseSimilarityList `json:"similarity_list"`
}

type APIResponseSimilarity struct {
	Error    *bool                          `json:"error"`
	Message  *string                        `json:"message"`
	Response *APIResponseSimilarityResponse `json:"response"`
}

package shared

type APIResponseSongResponseResults struct {
	ID   *int64  `json:"id"`
	Name *string `json:"name"`
}

type APIResponseSongResponse struct {
	Results []APIResponseSongResponseResults `json:"results"`
}

type APIResponseSong struct {
	Error    *bool                    `json:"error"`
	Message  *string                  `json:"message"`
	Response *APIResponseSongResponse `json:"response"`
}

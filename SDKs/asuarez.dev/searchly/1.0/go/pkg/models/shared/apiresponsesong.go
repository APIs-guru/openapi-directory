package shared

// APIResponseSongResponseResults
// Song item.
type APIResponseSongResponseResults struct {
	ID   *int64  `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

// APIResponseSongResponse
// Contains the response data if the request was successful.
type APIResponseSongResponse struct {
	Results []APIResponseSongResponseResults `json:"results,omitempty"`
}

type APIResponseSong struct {
	Error    *bool                    `json:"error,omitempty"`
	Message  *string                  `json:"message,omitempty"`
	Response *APIResponseSongResponse `json:"response,omitempty"`
}

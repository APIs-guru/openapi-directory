package shared



type APIResponseSongResponseResults struct {
    ID *int64 `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

type APIResponseSongResponse struct {
    Results []APIResponseSongResponseResults `json:"results,omitempty"`
    
}

type APIResponseSong struct {
    Error *bool `json:"error,omitempty"`
    Message *string `json:"message,omitempty"`
    Response *APIResponseSongResponse `json:"response,omitempty"`
    
}


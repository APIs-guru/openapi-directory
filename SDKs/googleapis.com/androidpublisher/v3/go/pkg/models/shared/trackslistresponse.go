package shared



type TracksListResponse struct {
    Kind *string `json:"kind,omitempty"`
    Tracks []Track `json:"tracks,omitempty"`
    
}

